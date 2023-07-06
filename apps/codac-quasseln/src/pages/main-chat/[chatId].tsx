import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { FormEvent, useState } from "react";
import { useAuth } from "#/contexts/authContext";
import ConversationBuble from "../../components/Main-Chat-Components/ConversationBuble";

// This query is to find the chatroom.... NOT all the messages... (do you mean conversations????)
interface Conversation {
  id: string;
  attributes: {
    pinned: boolean;
    title: string;
    description: string;
  };
}
type Key = string | number | null | undefined;

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
                description
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

const SingleChat = (props: Props) => {
  const { user } = useAuth();
  const userId = user?.id;
  const { chatId } = useRouter().query;
  const [active, setActive] = useState("");

  // Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval.
  const {
    data: chatRooms,
    error,
    loading,
  } = useQuery(getSingleChat, { variables: { id: chatId } });

  //NOTE  GETTING ALL MESSAGES FOR A SINGLE CONVERSATION
  const {
    data: allMessages,
    loading: chatLoading,
    error: messageError,
    refetch,
  } = useQuery(getChatHistoryById, { variables: { id: active } });

  //NOTE - SAVE/CREATE A NEW MESSAGE
  const [messageText, setMessageText] = useState("");
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

  //NOTE - DELETE A MESSAGE
  const [deleteMessageMutation] = useMutation(deleteChatMessage);
  const deleteMessage = async (e: FormEvent<HTMLFormElement>, message: any) => {
    e.preventDefault();
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

  //NOTE - UPDATE A MESSAGE
  const [updateMessageMutation] = useMutation(upDateChatMessage);
  const updateMessage = async (e: FormEvent<HTMLFormElement>, message: any) => {
    e.preventDefault();
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

  //NOTE this is for FORMAT the date in each message...
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
    //NOTE (format the TIME hours and minuts)
    formattedDate += `@ ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:
        ${date.getMinutes() < 10 ? "0" : ""}${date.getMinutes()} `;
    return formattedDate;
  };

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
      <h1
        style={{
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Welcome to {chatRooms?.chatroom.data?.attributes.name}
      </h1>

      {/* THIS DIV COTAINS ALL THE CHATROOM (conversations and messages)*/}

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
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "100%",
              color: "blue",
            }}
          >
            {chatRooms &&
              chatRooms.chatroom?.data?.attributes.conversations?.data?.map(
                (conversation: Conversation) => {
                  if (conversation?.attributes?.pinned === true) {
                    return (
                      <ConversationBuble
                        key={conversation.id}
                        conversation={conversation}
                        setActive={setActive}
                      />
                    );
                  }
                }
              )}
          </div>

          <hr />

          {/* HIER ARE THE NOT PINNED CONVERSATIONS */}

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
              width: "100%",
              color: "white",
            }}
          >
            {chatRooms &&
              chatRooms.chatroom?.data?.attributes.conversations?.data?.map(
                (conversation: Conversation) => {
                  if (conversation?.attributes?.pinned === false) {
                    return (
                      <ConversationBuble
                        key={conversation.id}
                        conversation={conversation}
                        setActive={setActive}
                      />
                    );
                  }
                }
              )}
          </div>
        </div>

        {/* All Messages from a conversation.... MESSAGES DIV */}
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
                return (
                  <div
                    className="message_container"
                    style={{ border: "1px solid red", width: "90%", margin: "5px" }}
                    key={message.id}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                    >
                      <div
                        className="message_label"
                        style={{
                          display: "flexbox",
                          width: "50%",
                          fontSize: "11px",
                          marginLeft: "3px",
                        }}
                      >
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
                            backgroundColor: "rgba(0,0,0,0.7)",
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
                            backgroundColor: "rgba(0,0,0,0.7)",
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
