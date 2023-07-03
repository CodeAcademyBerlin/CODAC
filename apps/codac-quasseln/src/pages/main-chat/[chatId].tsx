import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "#/contexts/authContext";
import { timeStamp } from "console";
import Message from "#/components/chat/main-chat/message";

// This query is to find the chatroom.... NOT all the messages... (do you mean conversations????)

const getSingleChat = gql`
  query GetChatQuery($id: ID) {
    chatroom(id: $id) {
      data {
        id
        attributes {
          name
          conversations {
            data {
              id
              attributes {
                title
                pinned
              }
            }
          }
        }
      }
    }
  }
`;

const getChatHistoryById = gql`
  query getChatHistoryById($id: ID) {
    conversation(id: $id) {
      data {
        id
        attributes {
          pinned
          messages(pagination: { page: 1, pageSize: 100 }) {
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
// I have to add the pinned property to the query/mutation---
const createNewMessage = gql`
  mutation createMessage($body: String!, $conversationId: ID!, $authorId: ID!) {
    createMessage(data: { body: $body, conversation: $conversationId, author: $authorId }) {
      data {
        id
        attributes {
          author {
            data {
              id
            }
          }
          body
          conversation {
            data {
              id
            }
          }
        }
      }
    }
  }
`;
// Collection of pinned messages inside the user----
const deleteChatMessage = gql`
  mutation deleteMessage($id: ID!) {
    deleteMessage(id: $id) {
      data {
        id
      }
    }
  }
`;

const upDateChatMessage = gql`
  mutation updateMessage($id: ID!, $body: String!) {
    updateMessage(id: $id, data: { body: $body }) {
      data {
        id
        attributes {
          body
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
`;
type Props = {};

// fetching all pinned messages
// const getPinnedMessages = gql`
//   query pinnedMessages {
//     messages(filters: { pinned: { eq: true } }) {
//       data {
//         id
//         attributes {
//           pinned
//         }
//       }
//     }
//   }
// `;

// UPDATE PINNED CONVERSATION MUTATION/QUERY
const updatePinnedConversation = gql`
  mutation updateArticle($id: ID!, $pinned: Boolean!) {
    updateConversation(id: $id, data: { pinned: $pinned }) {
      data {
        id
        attributes {
          title
          pinned
        }
      }
    }
  }
`;

const SingleChat = (props: Props) => {
  const [testVariable, setTestVariable] = useState(false);
  const { user } = useAuth();
  // console.log("user :>> ", user);
  const userId = user?.id;
  // console.log("userId :>> ", userId)

  const deleteMsg = () => {
    refetch()
  }
  // UPDATE PINNED CONVERSATION FUNCTION
  const [updatePinnedMutation] = useMutation(updatePinnedConversation);
  const updatePinned = async (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    conversation: any
  ) => {
    e.preventDefault();
    // const { user } = useAuth();
    //  console.log("message.id :>> ", message.id);
    if (user?.role?.name === "Mentor") {
      if (conversation?.attributes?.pinned === false) {
        updatePinnedMutation({
          variables: {
            id: conversation.id,
            pinned: true,
          },
        });
      } else if (conversation?.attributes?.pinned === true) {
        updatePinnedMutation({
          variables: {
            id: conversation.id,
            pinned: false,
          },
        });
      }

      await refetch();
    }
  };
  ///////////////////////////////////////////////////////////////////////////////////////////

  // const router = useRouter();
  const { chatId } = useRouter().query;
  const [active, setActive] = useState("");
  // Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval.
  const {
    data: conversations,
    error,
    loading,
  } = useQuery(getSingleChat, { variables: { id: chatId } });

  const {
    data: allMessages,
    loading: chatLoading,
    error: messageError,
    refetch,
  } = useQuery(getChatHistoryById, { variables: { id: active } });

  // FUNCTION TO SCROLL DOWN TO THE LAST MESSAGE IN THE CHAT
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // behaivor options: instant, auto and smooth...
  }
  useEffect(scrollToBottom, [allMessages]);


  // do I need this chatHistory state????
  // const [chatHistory, setChatHistory] = useState([]);
  const [messageText, setMessageText] = useState("");
  // do I need this  typing state????
  // const [typing, setTyping] = useState(false);

  const [newMessageMutation] = useMutation(createNewMessage);

  const sendMessage = () => {
    if (messageText.length >= 1) {
      newMessageMutation({
        variables: {
          conversationId: active,
          authorId: userId,
          body: messageText,
        },
      });
      setMessageText("");
    }
    else {
      return
    }
    refetch();
    // setTestVariable(!testVariable);

  };

  // this is for the date in each message...
  const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);
    let formattedDate = "";
    if (date.getDate() === today.getDate()) {
      formattedDate = "Today";
    } else if (date.getDate() === yesterday.getDate()) {
      formattedDate = "Yesterday";
    } else {
      formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    }
    // what it that???? +=  ?
    formattedDate += `@ ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:
        ${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()} `;
    return formattedDate;
  };

  // console.log('chatId :>> ', chatId);
  // console.log('router :>> ', router);
  // console.log('data :>> ', chatRooms);
  // console.log("messages history :>> ", allMessages?.conversation?.data.attributes.messages.data);

  return (
    <div>

      <h1
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Welcome to {conversations?.chatroom.data?.attributes.name}
      </h1>

      {/* Este es el div que alberga todo el chat!!!!!! */}

      <div
        style={{
          color: "whitesmoke",
          display: "flex",
          flexDirection: "row",
          marginTop: "10px",
          border: "green solid 3px",
        }}
      >
        {/* CONVERSATIONS DIV */}
        <div
          className="for conversations (pinned and normal...) container"
          style={{
            display: "flex",
            flexDirection: "column",
            width: "30%",
            border: "solid 2px red",
          }}
        >
          {/* HIER ARE THE PINNED CONVERSATIONS */}

          <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
            {conversations &&
              conversations.chatroom?.data?.attributes.conversations?.data?.map(
                (conversation: any) => {
                  // console.log("conversation :>> ", conversation);
                  if (conversation.attributes.pinned === true) {
                    return (
                      <div
                        style={{
                          border: "solid 2px blue",
                        }}
                        key={conversation.id}
                        onClick={async () => {
                          setActive(conversation.id);
                        }}
                      >
                        {/* HIER COME THE PINN ICON; PLEASE CHANGE IT FOR THE <p> */}
                        <>
                          {user?.role?.name === "Mentor" ? (
                            <p
                              onClick={(e) => updatePinned(e, conversation)}
                              style={{ cursor: "pointer" }}
                            >
                              X
                            </p>
                          ) : (
                            ""
                          )}
                        </>
                        <h3
                          style={{
                            color: "blue",
                            margin: "5px",
                            border: "2px solid blue",
                            borderRadius: "5px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                        >
                          {conversation.attributes?.title}
                        </h3>
                      </div>
                    );
                  }
                }
              )}
          </div>

          <hr />

          {/* HIER ARE THE NOT PINNED CONVERSATIONS */}

          <div style={{ display: "flex", flexDirection: "column", gap: "5px", width: "100%" }}>
            {conversations &&
              conversations.chatroom?.data?.attributes.conversations?.data?.map(
                (conversation: any) => {
                  // console.log("conversation :>> ", conversation);
                  if (conversation.attributes.pinned === false) {
                    return (
                      <div
                        style={{
                          border: "solid 2px white",
                        }}
                        key={conversation.id}
                        onClick={async () => {
                          setActive(conversation.id);
                        }}
                      >
                        {/* HIER COME THE PINN ICON; PLEASE CHANGE IT FOR THE <p> */}
                        <>
                          {user?.role?.name === "Mentor" ? (
                            <p
                              onClick={(e) => updatePinned(e, conversation)}
                              style={{ cursor: "pointer" }}
                            >
                              X
                            </p>
                          ) : (
                            ""
                          )}
                        </>

                        <h3
                          style={{
                            color: "white",
                            margin: "5px",
                            border: "2px solid white",
                            borderRadius: "5px",
                            textAlign: "center",
                            cursor: "pointer",
                          }}
                        >
                          {conversation.attributes?.title}
                        </h3>
                      </div>
                    );
                  }
                }
              )}
          </div>
        </div>

        {/* All Messages from a conversation.... */}
        <div
          style={{
            border: "2px solid white",
            width: "75%",
          }}
        >
          <div
            style={{
              border: "2px solid white",
              width: "90%",
              height: "300px",
              margin: "auto",
              overflow: "scroll",
            }}
          >
            {allMessages &&
              allMessages?.conversation?.data.attributes?.messages?.data?.map((message: any) => {

                return <Message
                  message={message}
                  deleteMsg={deleteMsg}
                />;

              })}
            <div ref={messagesEndRef} />
          </div>

          {/* +++++++++++++++++++++++++ TEXT BODY +++++++++++++++++++ */}
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              color: "whitesmoke",
              textAlign: "center",
              margin: "auto",
              justifyContent: "center",
            }}
          >
            <input
              style={{
                outline: "none",
                resize: "none",
                color: "black",
                width: "80%",
                height: "60px",
              }}
              placeholder="write something..."
              value={messageText}
              onChange={(e: { preventDefault: () => void; target: any }) => {
                e.preventDefault();
                setMessageText(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                  // refetch();
                }
              }}
            ></input>
            <button
              style={{ width: "10%", border: "2px solid blue", height: "60px" }}
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChat;


