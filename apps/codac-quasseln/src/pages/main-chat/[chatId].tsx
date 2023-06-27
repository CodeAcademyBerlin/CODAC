import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { useAuth } from "#/contexts/authContext";
import { timeStamp } from "console";

// This query is to find the chatroom.... NOT all the messages...
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
const getPinnedMessages = gql`
query pinnedMessages {
    messages(filters: { pinned: { eq: true } }){
    data  {
            id
      attributes{
                pinned
            }

        }
    }
} `;

const SingleChat = (props: Props) => {
  const { user } = useAuth();
  const userId = user?.id;
  console.log("userId :>> ", userId);
  // const router = useRouter();
  const { chatId } = useRouter().query;
  const [active, setActive] = useState(2);
  // Refetching enables you to refrescdh query results in response to a particular user action, as opposed to using a fixed interval.
  const {
    data: chatRooms,
    error,
    loading,
  } = useQuery(getSingleChat, { variables: { id: chatId } });
  //  the refecth should be for the chat history...
  console.log('chatRooms :>> ', chatRooms);
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

  const sendMessage = () => {
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
    refetch();
  };

  const [deleteMessageMutation] = useMutation(deleteChatMessage);
  //  the mentor has permmision to delete as well... condicional... id not working and only deleting first message...
  const deleteMessage = (e: FormEvent<HTMLFormElement>, message: any) => {
    e.preventDefault();
    console.log("object :>> ", message.attributes.author.data?.id);
    if (userId === message.attributes.author.data.id || user?.role?.name === "Mentor") {
      deleteMessageMutation({
        variables: {
          id: message.id,
        },
      });
      refetch();
    }
    setDeleteModal(!deleteModal);
  };
  // when fetch the message we let graphql
  // sort property and sort the messages by created.... display them like that

  const [updateMessageMutation] = useMutation(upDateChatMessage);

  const updateMessage = (e: FormEvent<HTMLFormElement>, message: any) => {
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
      refetch();
    }
    setOptionsModal(!optionsModal);
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
    <div style={{ color: "whitesmoke" }}>
      <h1>Welcome to {chatRooms?.chatroom.data?.attributes.name}</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
        <h2>Conversations...</h2>
        {chatRooms &&
          chatRooms.chatroom?.data?.attributes.conversations?.data?.map((conversation: any) => {
            return (
              <div
                key={conversation.id}
                onClick={async () => {
                  setActive(conversation.id);
                }}
              >
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
          })}
      </div>
      {/* All Messages from a conversation.... */}
      <div style={{ border: "2px solid white" }}>
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
              return (
                <div
                  className="message_container"
                  style={{ border: "1px solid red", width: "90%", margin: "5px" }}
                  key={message.id}
                >
                  <div
                    style={{
                      display: "flex",
                      // border: "yellow 2px solid",
                      justifyContent: "space-between",
                    }}
                  >
                    <div
                      className="message_label"
                      style={{
                        display: "flexbox",
                        // border: "2px white solid",
                        width: "50%",
                        fontSize: "11px",
                        marginLeft: "3px",
                      }}
                    >
                      {/* <h2 style={{ color: "white" }}>id: {message.id}</h2> */}

                      {user?.username !== message.attributes.author.data?.attributes.username ? (
                        <strong>{message.attributes.author.data?.attributes.username}</strong>
                      ) : (
                        <strong>me</strong>
                      )}

                      {formatDate(message.attributes.createdAt)}
                    </div>

                    <div
                      className="message_functions_container"
                      style={{
                        display: "flex",
                        // border: "2px white solid",
                        width: "40%",
                        gap: "5px",
                        justifyContent: "flex-end",
                        marginRight: "2px",
                        fontSize: "10px",
                      }}
                    >
                      <button onClick={toogleOptionsModal}>edit</button>
                      <button onClick={toogleDeleteModal}>delete</button>
                    </div>
                  </div>
                  <div className="text_body">
                    <p>{message.attributes.body}</p>
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
                          // backgroundColor: "black",
                          backgroundColor: "rgba(0,0,0,0.3)",
                        }}
                        onClick={toogleOptionsModal}
                      >
                        <div
                          className="edit_message_modal_container"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          style={{
                            position: "relative",
                            zIndex: "1000",
                            display: "flex",
                            flexDirection: "column",
                            width: "35%",
                            height: "25%",
                            border: "white solid 3px",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            margin: "auto",
                            marginTop: "200px",
                          }}
                        >
                          {/* <form onSubmit={(e) => { deleteMessage(e, message) }} > aquí viene la funcion!! */}
                          <form
                            onSubmit={(e) => {
                              updateMessage(e, message);
                            }}
                          >
                            <label htmlFor="edit_post_text" style={{ color: "black" }}>
                              Edit Message
                            </label>
                            <textarea
                              style={{
                                outline: "none",
                                resize: "none",
                                color: "black",
                                width: "90%",
                                height: "60px",
                              }}
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
                            <button
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
                  )}

                  {/* // +++++++++++++++++++++++++ DELETE MODAL +++++++++++++++++++ */}
                  {deleteModal && (
                    <div
                      className="delete_post_modal"
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
                        className="delete_modal_overlay"
                        style={{
                          width: "100vw",
                          height: "100vh",
                          top: "0",
                          left: "0",
                          right: "0",
                          bottom: "0",
                          position: "fixed",
                          // backgroundColor: "black",
                          backgroundColor: "rgba(0,0,0,0.3)",
                        }}
                        onClick={toogleDeleteModal}
                      >
                        <div
                          className="delete_post_modal_container"
                          onClick={(e) => {
                            e.stopPropagation();
                          }}
                          style={{
                            position: "relative",
                            zIndex: "1000",
                            display: "flex",
                            flexDirection: "column",
                            width: "35%",
                            height: "25%",
                            border: "white solid 3px",
                            borderRadius: "10px",
                            backgroundColor: "white",
                            margin: "auto",
                            marginTop: "200px",
                          }}
                        >
                          {/* onSubmit={deleteMessage}  */}
                          {/* {(<button onClick={(e) => { handleDeleteCommentSubmit(e, comment._id) }}>} */}
                          <form
                            onSubmit={(e) => {
                              deleteMessage(e, message);
                            }}
                          >
                            <div
                              className="delete_post_modal_text"
                              style={{
                                marginTop: "10px",
                                color: "black",
                                textAlign: "center",
                              }}
                            >
                              <h3>Do you want to delete your message?</h3>
                            </div>
                            <div
                              className="delete_post_modal_btns"
                              style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: "10px",
                                marginTop: "20px",
                              }}
                            >
                              <button
                                type="submit"
                                style={{
                                  color: "white",
                                  backgroundColor: "black",
                                  border: "none",
                                  borderRadius: "5px",
                                  height: "30px",
                                  width: "80px",
                                }}
                              // onClick={toogleDeleteModal}
                              >
                                Continue
                              </button>

                              <button
                                type="button"
                                style={{
                                  color: "white",
                                  backgroundColor: "black",
                                  border: "none",
                                  borderRadius: "5px",
                                  height: "30px",
                                  width: "80px",
                                }}
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
              );
            })}
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
          <textarea
            style={{
              outline: "none",
              resize: "none",
              color: "black",
              width: "80%",
              height: "60px",
            }}
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
                refetch();
              }
            }}
          ></textarea>
          <button
            style={{ width: "10%", border: "2px solid blue", height: "60px" }}
            onClick={sendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleChat;
