import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "#/contexts/authContext";
import { timeStamp } from "console";
import Message from "#/components/Main-Chat-Components/message";
import ConversationBuble from "#/components/Main-Chat-Components/ConversationBuble";
import { Socket } from "socket.io-client";
import { useSocket } from "#/contexts/socketContext";

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
const createNewMessage = gql`
  # Strappi create new name for the query
  # createConversationMessage instead of createMessage
  mutation createConversationMessage($body: String!, $conversationId: ID!) {
    createConversationMessage(body: $body, conversationId: $conversationId) {
      message
      success
    }
  }
`;

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

const createConversation = gql`
  mutation createConversation(
    $chatroomId: ID!
    $title: String!
    $pinned: Boolean
    $description: String
  ) {
    createConversation(
      data: { chatroom: $chatroomId, title: $title, pinned: $pinned, description: $description }
    ) {
      data {
        id
        attributes {
          title
          description
          pinned
          createdAt
          updatedAt
          chatroom {
            data {
              id
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

  const deleteMsg = () => {
    refetch();
  };

  const deleteConv = () => {
    conversationRefetch();
  };
  // UPDATE PINNED CONVERSATION FUNCTION
  const [updatePinnedMutation] = useMutation(updatePinnedConversation);

  const updatePinned = async (
    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>,
    conversation: any
  ) => {
    e.preventDefault();
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

  // const router = useRouter();
  const { chatId } = useRouter().query;
  const [active, setActive] = useState("");
  const { socket } = useSocket();

  // Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval.
  const {
    data: conversations,
    error,
    loading,
    refetch: conversationRefetch,
  } = useQuery(getSingleChat, { variables: { id: chatId } });

  //NOTE  GETTING ALL MESSAGES FOR A SINGLE CONVERSATION
  const {
    data: allMessages,
    loading: chatLoading,
    error: messageError,
    refetch,
  } = useQuery(getChatHistoryById, { variables: { id: active } });
  // console.log('allMessages :>> ', allMessages);

  //NOTE - SAVE/CREATE A NEW MESSAGE
  // FUNCTION TO SCROLL DOWN TO THE LAST MESSAGE IN THE CHAT
  const messagesEndRef = React.useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    // behaivor options: instant, auto and smooth...
  };
  useEffect(scrollToBottom, [allMessages]);

  const [messageText, setMessageText] = useState("");
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
    } else {
      return;
    }
    refetch();
    // setTestVariable(!testVariable);
  };

  // the function to format the date was missing....
  // this function has to be used on the Message Component...
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

  // new conversation states and functions
  const [newConversationModal, setNewConversationModal] = useState(false);
  const [newConversationTitle, setNewConversationTitle] = useState("");
  const [newConversationDescription, setNewConversationDescription] = useState("");
  const [createNewConversation, { loading: loadingNewConversation }] =
    useMutation(createConversation);

  const newConversation = (e: any) => {
    e.preventDefault();

    if (newConversationTitle.length >= 1) {
      createNewConversation({
        variables: {
          chatroomId: chatId,
          title: newConversationTitle,
          pinned: false,
          description: newConversationDescription,
        },
      });
      setNewConversationTitle("");
      setNewConversationDescription("");
      setNewConversationModal(false);
      // back to empty string!
      conversationRefetch();
    } else {
      // just for the beginning...
      alert("please add a title");
    }
  };

  useEffect(() => {
    socket?.on("conversation:update", (conversation) => {
      console.log("conversation :>> ", conversation);
      if (conversation.id === active) {
        conversationRefetch();
      }
    });
  }, [socket]);

  useEffect(() => {
    conversationRefetch();
  }, [active]);

  return (
    <>
      <div>
        <h1>{conversations?.chatroom.data?.attributes.name}</h1>
        <div className="chat-container">
          <div className="chat-dashboard-container">
            <div className="pinned-conversations-container">
              <span className="conversations-container-title">
                Pinned Conversations of{" "}
                <strong>{conversations?.chatroom.data?.attributes.name}</strong>
              </span>

              {conversations &&
                conversations.chatroom?.data?.attributes.conversations?.data?.map(
                  (conversation: Conversation) => {
                    if (conversation?.attributes?.pinned === true) {
                      return (
                        <ConversationBuble
                          key={conversation.id}
                          conversation={conversation}
                          setActive={() => setActive(conversation.id)}
                          active={active}
                          deleteConv={deleteConv}
                        />
                      );
                    }
                  }
                )}
            </div>
            <div className="unpinned-conversations-container">
              <span className="conversations-container-title">
                Other Conversations of{" "}
                <strong>{conversations?.chatroom.data?.attributes.name}</strong>
              </span>
              <div className="unpinned-conversations">
                {conversations &&
                  conversations.chatroom?.data?.attributes.conversations?.data?.map(
                    (conversation: Conversation) => {
                      if (conversation?.attributes?.pinned === false) {
                        return (
                          <ConversationBuble
                            key={conversation.id}
                            conversation={conversation}
                            setActive={() => setActive(conversation.id)}
                            active={active}
                            deleteConv={deleteConv}
                          />
                        );
                      }
                    }
                  )}
              </div>
              {/* Inline styling to make a test version  */}
            </div>
            {loadingNewConversation ? (
              <p>creating conversation</p>
            ) : (
              <div className="buttons-container newconvo-button">
                <button
                  className="primary"
                  onClick={() => setNewConversationModal(!newConversationModal)}
                >
                  Create Conversation
                </button>
              </div>
            )}
          </div>
          <div className="chat-convo-container">
            <div className="messages">
              {allMessages &&
                allMessages?.conversation?.data?.attributes?.messages?.data?.map((message: any) => {
                  return <Message message={message} deleteMsg={deleteMsg} />;
                })}
            </div>
            <div ref={messagesEndRef} />
            {active !== "" ? (
              <div className="send-message-container">
                <textarea
                  placeholder="write something..."
                  value={messageText}
                  onChange={(e: { preventDefault: () => void; target: any }) => {
                    e.preventDefault();
                    setMessageText(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      sendMessage();
                    }
                  }}
                  style={{ resize: "none" }}
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
            ) : (
              <div className="no-convo-message">
                <p>🍕 Select a conversation to be able to chat</p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Create conversation Modal */}
      {newConversationModal && (
        <div className="edit_message_modal">
          <div
            className="edit_message_modal_overlay"
            // onClick={toogleOptionsModal} //TODO - UNDER REVIEW
          >
            <div
              className="edit_message_modal_container"
              onClick={(e) => {
                e.stopPropagation();
              }}
              // MODAL DIV:::: HERE STYLING FOR CHANGE DIV MODAL
            >
              <div>
                <form>
                  <p>Title</p>
                  <input
                    type="text"
                    name="title"
                    placeholder={"Enter a title"}
                    value={newConversationTitle}
                    onChange={(e) => {
                      e.stopPropagation();
                      setNewConversationTitle(e.target.value);
                    }}
                  ></input>
                  <br /> <br />
                  <p>Description</p>
                  <input
                    type="text"
                    name="edit_conversation"
                    id="edit_post_text"
                    placeholder={"Please set a Description..."}
                    value={newConversationDescription}
                    onChange={(e) => {
                      e.stopPropagation();
                      setNewConversationDescription(e.target.value);
                    }}
                    // onKeyDown={(e) => {
                    //   if (e.key === "Enter") {
                    //     e.stopPropagation();
                    //     (e: any) => updatePinned(e, conversation);
                    //   }
                    // }}
                  ></input>
                  {/* remove Check functionality for new Conversation div */}
                  {/* <div className="flex-start" style={{ margin: "1rem 0" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={isChecked === true ? true : false}
                      onChange={checkBox}
                    ></input>
                    <p>Do you want to pin this conversation ?</p>
                  </div> */}
                  <div className="buttons-container">
                    <button className="primary" onClick={newConversation} type="submit">
                      Create Conversation
                    </button>
                    <button
                      className="secondary"
                      type="button"
                      onClick={() => setNewConversationModal(false)}
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleChat;
