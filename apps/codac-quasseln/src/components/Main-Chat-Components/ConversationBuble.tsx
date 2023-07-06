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
const ConversationBuble = ({ conversation, setActive }: Props) => {
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
      style={{
        border: `solid 2px ${selectColor}`,
      }}
      key={conversation.id}
      onClick={async () => {
        setActive(conversation.id);
      }}
    >
      {/* //TODO - FOR ROXANE - HIER COME THE PINN OR EDIT ICON; PLEASE CHANGE IT FOR THE <p> */}
      <>
        {user?.role?.name === "Mentor" ? (
          <p onClick={toogleOptionsModal} style={{ cursor: "pointer" }}>
            X
          </p>
        ) : (
          ""
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
        <h3
          style={{
            color: selectColor,
            margin: "5px",
            borderRadius: "5px",
            textAlign: "center",
            cursor: "pointer",
            fontSize: "large",
          }}
        >
          {/*//NOTE - HIER WE SHOW TITLE; DESCRIPTION OR LAST MESSAGE FOR EVERY CONVERSATION */}

          {conversation.attributes?.title.length < 30
            ? conversation.attributes?.title
            : `${kurzeTitle}...`}
        </h3>{" "}
        <h3
          style={{
            color: selectColor,
            margin: "5px",
            borderRadius: "5px",
            textAlign: "center",
            cursor: "pointer",
          }}
        >
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
        </h3>
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
