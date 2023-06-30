import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { useAuth } from "#/contexts/authContext";
import { timeStamp } from "console";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";

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
  const { user } = useAuth();
  const userId = user?.id;
  // console.log("userId :>> ", userId);

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
  // Refetching enables you to refrescdh query results in response to a particular user action, as opposed to using a fixed interval.
  const {
    data: chatRooms,
    error,
    loading,
  } = useQuery(getSingleChat, { variables: { id: chatId } });
  //  the refecth should be for the chat history...
  // console.log("chatRooms :>> ", chatRooms);
  const {
    data: allMessages,
    loading: chatLoading,
    error: messageError,
    refetch,
  } = useQuery(getChatHistoryById, { variables: { id: active } });

  // do I need this chatHistory state????
  // const [chatHistory, setChatHistory] = useState([]);
  const [messageText, setMessageText] = useState("");
  // do I need this  typing state????
  // const [typing, setTyping] = useState(false);

  const [newMessageMutation] = useMutation(createNewMessage);

  const sendMessage = async () => {
    if (messageText) {
      newMessageMutation({
        variables: {
          conversationId: active,
          authorId: userId,
          body: messageText,
        },
      });
      setMessageText("");
    }
    await refetch();
  };

  const [deleteMessageMutation] = useMutation(deleteChatMessage);
  //  the mentor has permmision to delete as well... condicional... id not working and only deleting first message...
  const deleteMessage = async (e: FormEvent<HTMLFormElement>, message: any) => {
    e.preventDefault();
    console.log("object :>> ", message.attributes.author.data?.id);
    if (userId === message.attributes.author.data.id || user?.role?.name === "Mentor") {
      deleteMessageMutation({
        variables: {
          id: message.id,
        },
      });
      await refetch();
    }
    setDeleteModal(!deleteModal);
  };
  // when fetch the message we let graphql
  // sort property and sort the messages by created.... display them like that

  const [updateMessageMutation] = useMutation(upDateChatMessage);

  const updateMessage = async (e: FormEvent<HTMLFormElement>, message: any) => {
    e.preventDefault();
    console.log("message.id :>> ", message.id);
    if (userId === message.attributes.author.data.id || user?.role?.name === "Mentor") {
      if (messageText) {
        updateMessageMutation({
          variables: {
            id: message.id,
            body: messageText,
          },
        });
      }
      setMessageText("");
      await refetch();
    }
    setOptionsModal(!optionsModal);
  };

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
    formattedDate += `@ ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()} `;

    return formattedDate;
  };

  // console.log('chatId :>> ', chatId);
  // console.log('router :>> ', router);
  // console.log('data :>> ', chatRooms);
  console.log("messages history :>> ", allMessages?.conversation?.data.attributes.messages.data);

  // +++++++++++++++++++++++ MODALS ++++++++++++++++++++++

  const [deleteModal, setDeleteModal] = useState(false);
  const [optionsModal, setOptionsModal] = useState(false);
  const toogleDeleteModal = () => {
    setDeleteModal(!deleteModal);
  };
  const toogleOptionsModal = () => {
    setOptionsModal(!optionsModal);
  };

  return (
    <div>
      <h1>Welcome to {chatRooms?.chatroom.data?.attributes.name}</h1>
      {/* Este es el div que alberga todo el chat!!!!!! */}
      <div className="chat-container">
        {/* CONVERSATIONS DIV */}
        <div className="chat-dashboard-container">
          {/* HIER ARE THE PINNED CONVERSATIONS */}
          <div className="pinned-conversations-container">
            <span className="conversations-container-title">
              Pinned Conversations of <strong>{chatRooms?.chatroom.data?.attributes.name}</strong>
            </span>
            {chatRooms &&
              chatRooms.chatroom?.data?.attributes.conversations?.data?.map((conversation: any) => {
                if (conversation.attributes.pinned === true) {
                  return (
                    <div
                      className={`pinned-conversation ${
                        active === conversation.id ? "is-active" : "is-inactive"
                      }`}
                      key={conversation.id}
                      onClick={async () => {
                        setActive(conversation.id);
                      }}
                    >
                      <>
                        {user?.role?.name === "Mentor" ? (
                          <svg
                            className="pin-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                          >
                            <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                          </svg>
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
                      <span>{conversation.attributes?.title}</span>
                    </div>
                  );
                }
              })}
          </div>
          {/* HIER ARE THE NOT PINNED CONVERSATIONS */}

          <div className="unpinned-conversations-container">
            <span className="conversations-container-title">
              Other Conversations of <strong>{chatRooms?.chatroom.data?.attributes.name}</strong>
            </span>

            {chatRooms &&
              chatRooms.chatroom?.data?.attributes.conversations?.data?.map((conversation: any) => {
                if (conversation.attributes.pinned === false) {
                  return (
                    <div
                      className={`unpinned-conversation ${
                        active === conversation.id ? "is-active" : "is-inactive"
                      }`}
                      key={conversation.id}
                      onClick={async () => {
                        setActive(conversation.id);
                      }}
                    >
                      <>
                        {user?.role?.name === "Mentor" ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 384 512"
                            className="unpin-icon"
                          >
                            <path d="M0 48C0 21.5 21.5 0 48 0l0 48V441.4l130.1-92.9c8.3-6 19.6-6 27.9 0L336 441.4V48H48V0H336c26.5 0 48 21.5 48 48V488c0 9-5 17.2-13 21.3s-17.6 3.4-24.9-1.8L192 397.5 37.9 507.5c-7.3 5.2-16.9 5.9-24.9 1.8S0 497 0 488V48z" />
                          </svg>
                        ) : (
                          <svg
                            className="unpin-icon"
                            xmlns="http://www.w3.org/2000/svg"
                            height="1em"
                            viewBox="0 0 640 512"
                          >
                            <path d="M88.2 309.1c9.8-18.3 6.8-40.8-7.5-55.8C59.4 230.9 48 204 48 176c0-63.5 63.8-128 160-128s160 64.5 160 128s-63.8 128-160 128c-13.1 0-25.8-1.3-37.8-3.6c-10.4-2-21.2-.6-30.7 4.2c-4.1 2.1-8.3 4.1-12.6 6c-16 7.2-32.9 13.5-49.9 18c2.8-4.6 5.4-9.1 7.9-13.6c1.1-1.9 2.2-3.9 3.2-5.9zM0 176c0 41.8 17.2 80.1 45.9 110.3c-.9 1.7-1.9 3.5-2.8 5.1c-10.3 18.4-22.3 36.5-36.6 52.1c-6.6 7-8.3 17.2-4.6 25.9C5.8 378.3 14.4 384 24 384c43 0 86.5-13.3 122.7-29.7c4.8-2.2 9.6-4.5 14.2-6.8c15.1 3 30.9 4.5 47.1 4.5c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176zM432 480c16.2 0 31.9-1.6 47.1-4.5c4.6 2.3 9.4 4.6 14.2 6.8C529.5 498.7 573 512 616 512c9.6 0 18.2-5.7 22-14.5c3.8-8.8 2-19-4.6-25.9c-14.2-15.6-26.2-33.7-36.6-52.1c-.9-1.7-1.9-3.4-2.8-5.1C622.8 384.1 640 345.8 640 304c0-94.4-87.9-171.5-198.2-175.8c4.1 15.2 6.2 31.2 6.2 47.8l0 .6c87.2 6.7 144 67.5 144 127.4c0 28-11.4 54.9-32.7 77.2c-14.3 15-17.3 37.6-7.5 55.8c1.1 2 2.2 4 3.2 5.9c2.5 4.5 5.2 9 7.9 13.6c-17-4.5-33.9-10.7-49.9-18c-4.3-1.9-8.5-3.9-12.6-6c-9.5-4.8-20.3-6.2-30.7-4.2c-12.1 2.4-24.7 3.6-37.8 3.6c-61.7 0-110-26.5-136.8-62.3c-16 5.4-32.8 9.4-50 11.8C279 439.8 350 480 432 480z" />
                          </svg>
                        )}
                      </>
                      <span>{conversation.attributes?.title}</span>
                    </div>
                  );
                }
              })}
          </div>
        </div>

        <div className="chat-convo-container">
          {allMessages &&
            allMessages?.conversation?.data.attributes?.messages?.data?.map((message: any) => {
              return (
                <div className="message-container">
                  <div
                    className={`message-bubble ${
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
                      )}{" "}
                      {formatDate(message.attributes.createdAt)}
                      <>
                        {user?.username === message.attributes.author.data?.attributes.username && (
                          <div className="message-functions-panel">
                            <button onClick={toogleOptionsModal}>
                              <svg
                                className="icon"
                                xmlns="http://www.w3.org/2000/svg"
                                height="1em"
                                viewBox="0 0 512 512"
                              >
                                <path d="M362.7 19.3L314.3 67.7 444.3 197.7l48.4-48.4c25-25 25-65.5 0-90.5L453.3 19.3c-25-25-65.5-25-90.5 0zm-71 71L58.6 323.5c-10.4 10.4-18 23.3-22.2 37.4L1 481.2C-1.5 489.7 .8 498.8 7 505s15.3 8.5 23.7 6.1l120.3-35.4c14.1-4.2 27-11.8 37.4-22.2L421.7 220.3 291.7 90.3z" />
                              </svg>
                            </button>
                            <button onClick={toogleDeleteModal}>
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
                      </>
                    </div>

                    <div className="message-text" key={message.id}>
                      <div className="text-body">
                        <p>{message.attributes.body}</p>
                      </div>
                      {/* +++++++++++++++++++++++++++++ EDIT MODAL +++++++++++++++++++++ */}
                      {optionsModal && (
                        <div className="edit-message-modal-overlay">
                          <div onClick={toogleOptionsModal}>
                            <div
                              className="edit-message-modal-container"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              {/* <form onSubmit={(e) => { deleteMessage(e, message) }} > aquí viene la funcion!! */}
                              <form
                                onSubmit={(e) => {
                                  updateMessage(e, message);
                                }}
                              >
                                <label htmlFor="edit-post-text">Edit message</label>
                                <textarea
                                  name="edit_message"
                                  id="edit_post_text"
                                  placeholder="write something..."
                                  value={messageText}
                                  onChange={(e) => {
                                    e.stopPropagation();
                                    setMessageText(e.target.value);
                                    console.log("messageText :>> ", messageText);
                                  }}
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      // updateMessage.....
                                    }
                                  }}
                                ></textarea>
                                <div className="buttons-container">
                                  <button className="primary" type="submit">
                                    Save Changes
                                  </button>
                                  <button
                                    className="secondary"
                                    type="button"
                                    onClick={toogleOptionsModal}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* // +++++++++++++++++++++++++ DELETE MODAL +++++++++++++++++++ */}
                      {deleteModal && (
                        <div className="delete-post-modal-overlay">
                          <div onClick={toogleDeleteModal}>
                            <div
                              className="delete-message-modal_container"
                              onClick={(e) => {
                                e.stopPropagation();
                              }}
                            >
                              {/* onSubmit={deleteMessage}  */}
                              {/* {(<button onClick={(e) => { handleDeleteCommentSubmit(e, comment._id) }}>} */}
                              <form
                                onSubmit={(e) => {
                                  deleteMessage(e, message);
                                }}
                              >
                                <p>Do you want to delete your message?</p>
                                <div className="buttons-container">
                                  <button
                                    className="primary"
                                    type="submit"
                                    // onClick={toogleDeleteModal}
                                  >
                                    Continue
                                  </button>

                                  <button
                                    className="secondary"
                                    type="button"
                                    onClick={toogleDeleteModal}
                                  >
                                    Cancel
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}

          {/* +++++++++++++++++++++++++ TEXT BODY +++++++++++++++++++ */}

          <div className="send-message-container">
            <textarea
              placeholder="write something..."
              value={messageText}
              // ask Emily why refetch each time I write something....
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
            ></textarea>
            <button onClick={sendMessage}>
              <>
                <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
                  <path d="M498.1 5.6c10.1 7 15.4 19.1 13.5 31.2l-64 416c-1.5 9.7-7.4 18.2-16 23s-18.9 5.4-28 1.6L284 427.7l-68.5 74.1c-8.9 9.7-22.9 12.9-35.2 8.1S160 493.2 160 480V396.4c0-4 1.5-7.8 4.2-10.7L331.8 202.8c5.8-6.3 5.6-16-.4-22s-15.7-6.4-22-.7L106 360.8 17.7 316.6C7.1 311.3 .3 300.7 0 288.9s5.9-22.8 16.1-28.7l448-256c10.7-6.1 23.9-5.5 34 1.4z" />
                </svg>
                <span>Send</span>
              </>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleChat;
