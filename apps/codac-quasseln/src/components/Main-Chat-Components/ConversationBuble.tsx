import React, { useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { useAuth } from "#/contexts/authContext";

interface Props {
  conversation: {
    id: string;
    attributes: {
      description: string;
      pinned: boolean;
      title: string;
    };
  };
  active: string;
  // setActive: React.Dispatch<React.SetStateAction<string>>;
  setActive: () => void
  deleteConv: () => void
}
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

const deleteConversation = gql`
mutation deleteConversation($id: ID!){
  deleteConversation(id:$id){
    data{
      id
    }
  }
}`

const ConversationBuble = ({ conversation, setActive, active, deleteConv }: Props) => {
  const { user } = useAuth();
  const [optionsModal, setOptionsModal] = useState(false);
  const [messageText, setMessageText] = useState(conversation.attributes.description);
  const [messageTitle, setMessageTitle] = useState(conversation.attributes.title);
  const [isChecked, setIsChecked] = useState(conversation.attributes.pinned);


  const checkBox = () => {
    setIsChecked(!isChecked);
  };
  const {
    data: allMessages,
    loading: chatLoading,
    error: messageError,
    refetch,
  } = useQuery(getChatHistoryById, { variables: { id: conversation.id } });
  const toogleOptionsModal = () => {
    setOptionsModal(!optionsModal);
  };


  const [selectColor, setSelectColor] = useState("");
  const [updatePinnedMutation] = useMutation(updatePinnedConversation);
  const updatePinned = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, conver: any) => {
    e.preventDefault();

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

  const messageArray = allMessages?.conversation?.data?.attributes?.messages?.data;
  let lastMessage: any = {};
  messageArray?.length > 0
    ? (lastMessage = messageArray[messageArray.length - 1])
    : (lastMessage = "Empty Conversation...");

  const kurzeTitle = conversation?.attributes?.title.slice(0, 30);
  // console.log("kurzeTitle", kurzeTitle);
  const kurzeDescription = conversation?.attributes?.description?.slice(0, 30);
  // console.log("kurzeDescription", kurzeDescription);
  const kurzeLastMessage = lastMessage?.attributes?.body?.slice(0, 30);
  // console.log("kurzeLastMessage", kurzeLastMessage);
  const [isActiveConvo, setIsActiveConvo] = useState<string>("");

  const handleConversationClick = () => {
    setActive();
  };

  //  DELETE CONVERSATION STATES AND FUNCTIONS...
  const [deleteNewConversation] = useMutation(deleteConversation);

  const deleteEmptyConversation = async (conversationId: any) => {
    if (allMessages.conversation.data.attributes.messages.data.length === 0) {
      const deleted = await deleteNewConversation({
        variables: {
          id: conversationId
        }
      })
      if (deleted) {
        deleteConv()
      }
    }
  }



  return (
    <div
      className={`conversation ${conversation.id === active ? "active" : "inactive"}`}
      key={conversation.id}
      onClick={handleConversationClick}
    >
      <div className="flex-central">
        <div className="flex-start">
          {user?.role?.name === "Mentor" ? (
            <svg
              className="edit-conversation-svg"
              onClick={toogleOptionsModal}
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z" />
            </svg>
          ) : (
            ""
          )}

          {allMessages?.conversation.data?.attributes.messages.data.length === 0 &&
            <button
              onClick={() => {
                deleteEmptyConversation(conversation.id)
              }}
            >X</button>
          }



          <p>
            {conversation.attributes?.title.length < 30
              ? conversation.attributes?.title
              : `${kurzeTitle}...`}
          </p>
        </div>

        {user?.role?.name === "Mentor" ? (
          ""
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
      </div>
      <p className="conversation-subtitle">
        {conversation.attributes?.description && (
          <>
            {conversation.attributes?.description
              && `${kurzeDescription}...`}
          </>
        )}
        {!conversation.attributes?.description && lastMessage?.attributes?.body &&
          <i>
            {kurzeLastMessage}...
          </i>}
      </p>

      {/* +++++++++++++++++++++++++++++ EDIT MODAL +++++++++++++++++++++ */}
      {optionsModal && (
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
                    placeholder={conversation?.attributes?.title}
                    value={messageTitle}
                    onChange={(e) => {
                      e.stopPropagation();
                      setMessageTitle(e.target.value);
                    }}
                  ></input>
                  <br /> <br />
                  <p>Description</p>
                  <input
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
                  ></input>
                  <div className="flex-start" style={{ margin: "1rem 0" }}>
                    <input
                      className="form-check-input"
                      type="checkbox"
                      checked={isChecked === true ? true : false}
                      onChange={checkBox}
                    ></input>
                    <p>Do you want to pin this conversation ?</p>
                  </div>
                  <div className="buttons-container">
                    <button
                      className="primary"
                      onClick={(e) => updatePinned(e, conversation)}
                      type="submit"
                    >
                      Save Changes
                    </button>
                    <button className="secondary" type="button" onClick={toogleOptionsModal}>
                      Cancel
                    </button>
                  </div>
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
