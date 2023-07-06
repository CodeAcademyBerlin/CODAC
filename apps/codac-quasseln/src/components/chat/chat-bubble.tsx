import { Bubble } from "codac-sassy";
import React from "react";
import { gql, useMutation, useQuery } from "@apollo/client";

import { useAuth } from "#/contexts/authContext";

// ++++++  creating the delete function... Chris 22/06/23 +++++++
const deleteChatMessage = gql`
  mutation deleteMessage($id: ID!) {
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
      id: string;
      attributes: {
        username: string;
        email: string;
      };
    };
  };
  body: string;
  id: string;
  timestamp: string;
  updated: string | null;
}
export const ChatBubble = ({ message }: { message: any }) => {
  const { user } = useAuth();

  const author =
    message?.author?.data?.attributes?.username || (message?.author?.username as string);
  const myMessage = user?.username === author; // Check if user is the author

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
    formattedDate += ` @ ${date.getHours() < 10 ? "0" : ""}${date.getHours()}:${
      date.getMinutes() < 10 ? "0" : ""
    }${date.getMinutes()}`;
    return formattedDate;
  };

  const deleteMessage = () => {
    // if (authorId === user?.id) {
    //   deleteMessageMutation({
    //     variables: {
    //       id: `${message.id}`,
    //     },
    //   });
    // }
    alert("message deleted");
  };

  return (
    <>
      <Bubble
        darkmode
        content={message.body}
        author={author}
        {...(myMessage ? { editable: true } : { editable: false })}
        timestamp={message.timestamp}
      />
    </>
  );
};
