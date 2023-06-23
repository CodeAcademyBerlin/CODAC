import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";


import { useAuth } from "#/contexts/authContext";

// ++++++  creating the delete function... Chris 22/06/23 +++++++
const deleteChatMessage = gql`
  mutation deleteMessage( $id: ID!) {
  deleteMessage(id: $id) {
    data {
      id
      }
    }
  }
`;

// const deleteChatMessage = gql`
// mutation deleteChatMessage($chatId:ID!,$messageId: ID!){
//   deleteChatMessage(chatId: $chatId, messageId: $messageId){
//     success
//     message
//   }
// }`
// should I include the author id?????? in the mutation????
//  I cannot apply this change.... ask Emily??
interface Message {
  author: {
    data: {
      id: string,
      attributes: {
        username: string,
        email: string
      }
    }
  }
  body: string,
  id: string,
  timestamp: string,
  updated: string | null
}
export const ChatBubble = ({ message }: { message: any }) => {
  const { user } = useAuth();
  // const {data, refetch}= useQuery(Get)
  console.log("message.id", message)

  // esta funcion tengo que llamarla después.. ojo!! 
  const [deleteMessageMutation] = useMutation(deleteChatMessage)
  const author =
    message?.author?.data?.attributes?.username || (message?.author?.data?.attributes?.username as string);
  const authorId =
    message?.author.data?.id

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
    formattedDate += ` @ ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${date.getMinutes() < 10 ? "0" : ""
      }${date.getMinutes()}`;
    return formattedDate;
  };

  const deleteMessage = () => {
    if (authorId === user?.id) {
      deleteMessageMutation({
        variables: {
          id: `${message.id}`
        }
      })
    }
    alert("message deleted")
  }

  // const handleDeleteMessage = async (e: { preventDefault: () => void }) => {
  //   e.preventDefault();


  // }



  return (
    <div className="message-container">
      <div className={`message ${user?.username === author ? "my-message" : "you-all-message"}`}>
        <div className="message-label">
          {user?.username !== author ? <strong>{author}</strong> : <strong>me</strong>}{" "}
          {formatDate(message.timestamp)}
          <button >edit</button><br />
          <button onClick={deleteMessage} >delete</button>
        </div>
        <div className="message-bubble">
          <p>{message.body}</p>
        </div>
      </div>
    </div>
  );
};
