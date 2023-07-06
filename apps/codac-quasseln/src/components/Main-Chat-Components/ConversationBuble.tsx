import React, { useState } from "react";
import { DocumentNode, gql, useMutation, useQuery } from "@apollo/client";
import { useAuth } from "#/contexts/authContext";

//NOTE - TYPING THE PROPS
interface Props {
  conversation: {
    id: string;
    attributes: {
      description: string;
      pinned: boolean;
      title: string;
    };
  };
  setActive: React.Dispatch<React.SetStateAction<string>>;
  active: string;
}

// UPDATE PINNED CONVERSATION MUTATION/QUERY
const updatePinnedConversation = gql`
  mutation updateArticle($id: ID!, $title: String!, $pinned: Boolean!, $description: String!) {
    updateConversation(
      id: $id
      data: { title: $title, pinned: $pinned, description: $description }
    ) {
      data {
        id
        attributes {
          title
          pinned
          description
        }
      }
    }
  }
`;

//REVIEW - QUERY TO FIND MESSAGES
const getChatHistoryById = gql`
  query getChatHistoryById($id: ID) {
    conversation(id: $id) {
      data {
        id
        attributes {
          pinned
          messages {
            data {
              id
              attributes {
                body
                createdAt
                updatedAt
                author {
                  data {
                    id
                    attributes {
                      username
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

//SECTION - START COMPONENT
const ConversationBuble = ({ conversation, setActive, active }: Props) => {
  const { user } = useAuth();

  // USESTATES FOR THE MODAL
  const [optionsModal, setOptionsModal] = useState(false);
  const [messageText, setMessageText] = useState(conversation.attributes.description);
  const [messageTitle, setMessageTitle] = useState(conversation.attributes.title);

  //NOTE - USESTATES FOR CHECKBOX
  const [isChecked, setIsChecked] = useState(conversation.attributes.pinned);
  const checkBox = () => {
    setIsChecked(!isChecked);
  };

  //NOTE - FUNCTION TO FIND MESSAGES
  const {
    data: allMessages,
    loading: chatLoading,
    error: messageError,
    refetch,
  } = useQuery(getChatHistoryById, { variables: { id: conversation.id } });

  //NOTE - TO SHOW AND HIDE THE MODAL
  const toogleOptionsModal = () => {
    setOptionsModal(!optionsModal);
  };

  //TODO - USESTATE TO CHANGE COLORS - UNDER REVIEW
  const [selectColor, setSelectColor] = useState("");

  //NOTE -  UPDATE PINNED CONVERSATION FUNCTION
  const [updatePinnedMutation] = useMutation(updatePinnedConversation);
  const updatePinned = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, conver: any) => {
    e.preventDefault();

    //NOTE - CONDITION FOR TITLE AND DESCRIPTION REQUIRED FIELDS
    // if (!messageTitle || !messageText) {
    //NOTE - CONDITION FOR ONLY TITLE REQUIRED FIELD
    if (!messageTitle) {
      alert("Please insert a title und/oder Description");
    } else {
      setMessageText(messageText);
      setMessageTitle(messageTitle);

      if (user?.role?.name === "Mentor") {
        if (conver?.attributes?.pinned === false && isChecked === true) {
          updatePinnedMutation({
            variables: {
              title: messageTitle,
              id: conver.id,
              pinned: true,
              description: messageText,
            },
          });
          setSelectColor("Blue");
        } else if (conver?.attributes?.pinned === true && isChecked === true) {
          updatePinnedMutation({
            variables: {
              title: messageTitle,
              id: conver.id,
              pinned: true,
              description: messageText,
            },
          });
          setSelectColor("Blue");
        } else if (conver?.attributes?.pinned === true && isChecked === false) {
          updatePinnedMutation({
            variables: {
              title: messageTitle,
              id: conver.id,
              pinned: false,
              description: messageText,
            },
          });
          setSelectColor("White");
        } else if (conver?.attributes?.pinned === false && isChecked === false) {
          updatePinnedMutation({
            variables: {
              title: messageTitle,
              id: conver.id,
              pinned: false,
              description: messageText,
            },
          });
          setSelectColor("White");
        }

        // await refetch();  //TODO - UNDER REVIEW
        toogleOptionsModal();
      }
    }
  };

  //NOTE - TO GET THE LAST MESSAGE OF EVERY CONERSATION (IF EXIST)
  const messageArray = allMessages?.conversation?.data?.attributes?.messages?.data;
  let lastMessage: any = {};
  messageArray?.length > 0
    ? (lastMessage = messageArray[messageArray.length - 1])
    : (lastMessage = "Empty Conversation...");

  const kurzeTitle = conversation?.attributes?.title.slice(0, 30);
  console.log("kurzeTitle", kurzeTitle);
  const kurzeDescription = conversation?.attributes?.description?.slice(0, 30);
  console.log("kurzeDescription", kurzeDescription);
  const kurzeLastMessage = lastMessage?.attributes?.body?.slice(0, 30);
  console.log("kurzeLastMessage", kurzeLastMessage);

  //SECTION - START RETURN
  return (
    <div
      className={`pinned-conversation ${active === conversation.id ? "is-active" : "is-inactive"}`}
      key={conversation.id}
      onClick={async () => {
        setActive(conversation.id);
      }}
    >
      {/* //TODO - FOR ROXANE - HIER COME THE PINN OR EDIT ICON; PLEASE CHANGE IT FOR THE <p> */}
      <>
        {/* ///onClick={toogleOptionsModal} */}
        {user?.role?.name === "Mentor" ? (
          <div className="tooltip">
            <svg
              className="pin-icon"
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 384 512"
              onClick={toogleOptionsModal}
            >
              <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
            </svg>
            <span className="tooltiptext">Unpin conversation</span>
          </div>
        ) : (
          <svg
            className="pin-icon"
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 640 512"
          >
            <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
          </svg>
        )}
      </>
      <div
        style={{
          color: selectColor,
          margin: "5px",
          border: `solid 2px ${selectColor}`,
          borderRadius: "5px",

          cursor: "pointer",
        }}
      >
        <span>
          {conversation.attributes?.title.length < 30
            ? conversation.attributes?.title
            : `${kurzeTitle}...`}
        </span>{" "}
        <span>
          {conversation.attributes?.description ? (
            <>
              {conversation.attributes?.description.length < 30
                ? conversation.attributes?.description
                : `${kurzeDescription}...`}
            </>
          ) : (
            <>
              <i>
                {lastMessage?.attributes?.body.length < 30
                  ? lastMessage?.attributes?.body
                  : `${kurzeLastMessage}...`}
              </i>
            </>
          )}
        </span>
      </div>
      {/* +++++++++++++++++++++++++++++ EDIT MODAL +++++++++++++++++++++ */}
      {optionsModal && (
        <div
          className="edit_message_modal"
          style={{
            width: "100vw",
            height: "100vh",
            top: "0",
            left: "0",
            right: "0",
            bottom: "0",
            position: "fixed",
          }}
        >
          <div
            className="edit_message_modal_overlay"
            style={{
              width: "100vw",
              height: "100vh",
              top: "0",
              left: "0",
              right: "0",
              bottom: "0",
              position: "fixed",
              backgroundColor: "rgba(0,0,0,0.7)",
            }}
            // onClick={toogleOptionsModal} //TODO - UNDER REVIEW
          >
            <div
              className="edit_message_modal_container"
              onClick={(e) => {
                e.stopPropagation();
              }}
              // MODAL DIV:::: HERE STYLING FOR CHANGE DIV MODAL
              style={{
                position: "relative",
                zIndex: "1000",
                display: "flex",
                flexDirection: "column",
                width: "25rem",
                height: "15rem",
                border: "white solid 3px",
                borderRadius: "10px",
                backgroundColor: "white",
                margin: "auto",
                marginTop: "200px",
              }}
            >
              <div>
                <form>
                  <h3 style={{ color: "black" }}>Title</h3>
                  <input
                    style={{ color: "black" }}
                    type="text"
                    name="title"
                    placeholder={conversation?.attributes?.title}
                    value={messageTitle}
                    onChange={(e) => {
                      e.stopPropagation();
                      setMessageTitle(e.target.value);
                    }}
                  ></input>
                  <h3 style={{ color: "black" }}>Description</h3>
                  <input
                    style={{
                      outline: "none",
                      resize: "none",
                      color: "black",
                      width: "90%",
                      height: "60px",
                    }}
                    type="text"
                    name="edit_conversation"
                    id="edit_post_text"
                    placeholder={
                      conversation?.attributes?.description
                        ? conversation?.attributes?.description
                        : "Please set a Description..."
                    }
                    defaultValue={
                      conversation?.attributes?.description
                        ? conversation?.attributes?.description
                        : ""
                    }
                    value={messageText}
                    onChange={(e) => {
                      e.stopPropagation();
                      setMessageText(e.target.value);
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.stopPropagation();
                        (e: any) => updatePinned(e, conversation);
                      }
                    }}
                  ></input>{" "}
                  <br />
                  <span style={{ display: "flex", flexDirection: "row" }}>
                    <input
                      type="checkbox"
                      checked={isChecked === true ? true : false}
                      onChange={checkBox}
                    ></input>
                    <div>{isChecked ? "" : ""}.</div>
                    <h3 style={{ color: "black" }}>Pinned?</h3>
                  </span>
                  <button
                    onClick={(e) => updatePinned(e, conversation)}
                    type="submit"
                    style={{
                      color: "black",
                      border: "2px solid green",
                    }}
                  >
                    Save Changes
                  </button>
                  <button
                    type="button"
                    style={{
                      color: "black",
                      border: "2px solid green",
                    }}
                    onClick={toogleOptionsModal}
                  >
                    Cancel
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ConversationBuble;
