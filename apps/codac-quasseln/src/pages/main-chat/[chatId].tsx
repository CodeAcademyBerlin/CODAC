import { useRouter } from "next/router";
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { FormEvent, useEffect, useRef, useState } from "react";
import { useAuth } from "#/contexts/authContext";
import { timeStamp } from "console";
import Message from "#/components/Main-Chat-Components/message";
import ConversationBuble from "#/components/Main-Chat-Components/ConversationBuble";

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
type Props = {};

const SingleChat = (props: Props) => {
  const [testVariable, setTestVariable] = useState(false);
  const { user } = useAuth();
  const userId = user?.id;

  const deleteMsg = () => {
    refetch();
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
  // Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval.
  const {
    data: conversations,
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

  return (
    <div>
      <h1>Welcome to {conversations?.chatroom.data?.attributes.name}</h1>
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
                  if (conversation.attributes?.pinned === true) {
                    return (
                      <ConversationBuble
                        conversation={conversation}
                        active={active}
                        setActive={setActive}
                      />
                      // <div
                      //   className={`pinned-conversation ${
                      //     active === conversation.id ? "is-active" : "is-inactive"
                      //   }`}
                      //   key={conversation.id}
                      //   onClick={async () => {
                      //     setActive(conversation.id);
                      //   }}
                      // >
                      //   <>
                      //     {user?.role?.name === "Mentor" ? (
                      //       <div className="tooltip">
                      //         <svg
                      //           className="pin-icon"
                      //           xmlns="http://www.w3.org/2000/svg"
                      //           height="1em"
                      //           viewBox="0 0 384 512"
                      //           onClick={(e: any) => {
                      //             updatePinned(e, conversation);
                      //             console.log("click :");
                      //           }}
                      //         >
                      //           <path d="M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z" />
                      //         </svg>
                      //         <span className="tooltiptext">Unpin conversation</span>
                      //       </div>
                      //     ) : (
                      //       <svg
                      //         className="pin-icon"
                      //         xmlns="http://www.w3.org/2000/svg"
                      //         height="1em"
                      //         viewBox="0 0 640 512"
                      //       >
                      //         <path d="M208 352c114.9 0 208-78.8 208-176S322.9 0 208 0S0 78.8 0 176c0 38.6 14.7 74.3 39.6 103.4c-3.5 9.4-8.7 17.7-14.2 24.7c-4.8 6.2-9.7 11-13.3 14.3c-1.8 1.6-3.3 2.9-4.3 3.7c-.5 .4-.9 .7-1.1 .8l-.2 .2 0 0 0 0C1 327.2-1.4 334.4 .8 340.9S9.1 352 16 352c21.8 0 43.8-5.6 62.1-12.5c9.2-3.5 17.8-7.4 25.3-11.4C134.1 343.3 169.8 352 208 352zM448 176c0 112.3-99.1 196.9-216.5 207C255.8 457.4 336.4 512 432 512c38.2 0 73.9-8.7 104.7-23.9c7.5 4 16 7.9 25.2 11.4c18.3 6.9 40.3 12.5 62.1 12.5c6.9 0 13.1-4.5 15.2-11.1c2.1-6.6-.2-13.8-5.8-17.9l0 0 0 0-.2-.2c-.2-.2-.6-.4-1.1-.8c-1-.8-2.5-2-4.3-3.7c-3.6-3.3-8.5-8.1-13.3-14.3c-5.5-7-10.7-15.4-14.2-24.7c24.9-29 39.6-64.7 39.6-103.4c0-92.8-84.9-168.9-192.6-175.5c.4 5.1 .6 10.3 .6 15.5z" />
                      //       </svg>
                      //     )}
                      //   </>
                      //   <span>{conversation.attributes?.title}</span>
                      // </div>
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

            {conversations &&
              conversations.chatroom?.data?.attributes.conversations?.data?.map(
                (conversation: Conversation) => {
                  if (conversation.attributes?.pinned === false) {
                    return (
                      <ConversationBuble
                        conversation={conversation}
                        active={active}
                        setActive={setActive}
                      />
                    );
                  }
                }
              )}
          </div>
        </div>

        <div className="chat-convo-container">
          {allMessages &&
            allMessages?.conversation?.data?.attributes?.messages?.data?.map((message: any) => {
              return <Message message={message} deleteMsg={deleteMsg} />;
            })}
          <div ref={messagesEndRef} />
          {/* este puede ser el error... */}
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
  );
};

export default SingleChat;
