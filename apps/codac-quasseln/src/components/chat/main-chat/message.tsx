import { useState } from "react";
import React from "react";
import { useAuth } from "#/contexts/authContext";
import { gql, useQuery } from "@apollo/client";

import { formatDate } from "#/utils/api-helpers";

// const [deleteModal, setDeleteModal] = useState(false);
// const [optionsModal, setOptionsModal] = useState(false);
// const toogleDeleteModal = () => {
//   setDeleteModal(!deleteModal);
// };
// const toogleOptionsModal = () => {
//   setOptionsModal(!optionsModal);
// };
const Message = ({ message }: { message: any }) => {
  console.log("message.id: ", message.id);

  const getSingleMessage = gql`
    query GetMessageById($id: ID) {
      message(id: $id) {
        data {
          id
          attributes {
            body
          }
        }
      }
    }
  `;

  const { loading, error, data, refetch } = useQuery(getSingleMessage, {
    variables: { id: message.id },
  });

  console.log("data: ", data);

  const { user } = useAuth();

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
        {/* <div
          className="message_label"
          style={{
            display: "flexbox",

            width: "50%",
            fontSize: "11px",
            marginLeft: "3px",
          }}
        >


          {user?.username !== data.author.username ? (
            <strong>{data.attributes.author.data?.attributes.username}</strong>
          ) : (
            <strong>me</strong>
          )}

          {formatDate(data.attributes.createdAt)}
        </div> */}

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
          {/* <button
            onClick={toogleOptionsModal}>edit
          </button>
          <button
            onClick={toogleDeleteModal}>delete
          </button> */}
        </div>
      </div>
      <div className="text_body">
        <p style={{ padding: "2rem", fontSize: "2rem", color: "white" }}>
          {data && data.message.data.attributes?.body}
        </p>
      </div>
      {/* +++++++++++++++++++++++++++++ EDIT MODAL +++++++++++++++++++++ */}
      {/* {optionsModal && (
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
      )} */}

      {/* // +++++++++++++++++++++++++ DELETE MODAL +++++++++++++++++++ */}
      {/* {deleteModal && (
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
      )} */}
    </div>
  );
};

export default Message;
