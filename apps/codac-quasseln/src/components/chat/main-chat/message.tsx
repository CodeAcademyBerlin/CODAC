import { FormEvent, useEffect, useRef, useState } from "react";
import React from "react";
import { useAuth } from "#/contexts/authContext";
import { gql, useQuery, useMutation } from "@apollo/client";
import { formatDate } from "#/utils/api-helpers";

const upDateChatMessage = gql`
  mutation updateMessage($id: ID!, $body: String!) {
    updateMessage(id: $id, data: { body: $body }) {
      data {
        id
        attributes {
          body
        }
      }
    }
  }
`;
const getSingleMessage = gql`
  query GetMessageById($id: ID) {
    message(id: $id) {
      data {
        id
        attributes {
          body
          author {
            data {
              id
              attributes {
                username
                avatar {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
const deleteChatMessage = gql`
  mutation deleteMessage($id: ID!) {
    deleteMessage(id: $id) {
      data {
        id
      }
    }
  }
`;

const Message = ({ message, deleteMsg }: { message: any; deleteMsg: () => void }) => {
  // console.log("message.id: ", message.id);
  const [hiddenDiv, setHiddenDiv] = useState(false);
  const [editToggle, setEditToggle] = useState(false);
  const [newMsg, setNewMsg] = useState(message?.attributes?.body || "");

  const { loading, error, data, refetch } = useQuery(getSingleMessage, {
    variables: { id: message.id },
  });

  // console.log("data: ", data);

  const { user } = useAuth();
  const userId = user?.id;

  const [updateMessageMutation] = useMutation(upDateChatMessage);

  const [deleteMessageMutation] = useMutation(deleteChatMessage);
  //  the mentor has permmision to delete as well... condicional... id not working and only deleting first message...
  const deleteMessage = (messageId: any) => {
    // console.log("object :>> ", message.attributes.author.data?.id);
    if (userId === message.attributes.author.data.id || user?.role?.name === "Mentor") {
      deleteMessageMutation({
        variables: {
          id: message.id,
        },
      });
      deleteMsg();
    }
  };
  const updateMessage = async (e: FormEvent<HTMLFormElement>, message: any) => {
    e.preventDefault();
    // console.log("message.id :>> ", message.id);
    // console.log("msg attributes:>>", message.attributes);
    if (userId === message.attributes.author.data.id) {
      if (newMsg) {
        updateMessageMutation({
          variables: {
            id: message.id,
            body: newMsg, // we need to create a new form with this variable as msg body
          },
        });
      }
      setNewMsg("");
      // await refetch();
      refetch();
    }
  };
  // testing click outside the div closes it .....

  const hiddenDivRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (hiddenDivRef.current && !hiddenDivRef.current.contains(event.target)) {
        setHiddenDiv(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="message-container">
      {!editToggle && (
        <>
          <div
            // ref={hiddenDivRef}
            className={`message-bubble option-A ${
              user?.username === message.attributes.author.data?.attributes.username
                ? "my-message"
                : "user-message"
            }`}
          >
            <div className="message-label">
              {user?.username !== message.attributes.author.data?.attributes.username ? (
                <strong>{message.attributes.author.data?.attributes.username}</strong>
              ) : (
                <strong>me</strong>
              )}
              {message && message.attributes.createdAt}
              {user?.username === message.attributes.author.data?.attributes.username && (
                <div className="message-functions-panel">
                  <button
                    onClick={() => {
                      setEditToggle(!editToggle);
                      setNewMsg(message.attributes.body);
                    }}
                  >
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 512 512"
                    >
                      <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                    </svg>
                  </button>
                  <button
                    onClick={() => {
                      setHiddenDiv(!hiddenDiv);
                    }}
                  >
                    <svg
                      className="icon"
                      xmlns="http://www.w3.org/2000/svg"
                      height="1em"
                      viewBox="0 0 448 512"
                    >
                      <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
                    </svg>
                  </button>
                </div>
              )}
            </div>
            <p className="message-text">{message && message.attributes?.body}</p>
            {hiddenDiv && (
              <div ref={hiddenDivRef}>
                <button
                  onClick={() => {
                    setHiddenDiv(!hiddenDiv);
                  }}
                >
                  No
                </button>
                <button
                  onClick={() => {
                    deleteMessage(message.id);
                  }}
                >
                  Yes
                </button>
              </div>
            )}
          </div>
        </>
      )}
      {editToggle && (
        <>
          <div className="option-B">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                updateMessage(e, message);
                setEditToggle(!editToggle);
              }}
            >
              <textarea
                name="newText"
                value={newMsg}
                onChange={(e) => {
                  setNewMsg(e.target.value);
                  console.log("new message   :", newMsg);
                }}
              />
              <button type="submit">Submit</button>
              <button
                type="button"
                onClick={() => {
                  setEditToggle(!editToggle);
                }}
              >
                Cancel
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Message;
