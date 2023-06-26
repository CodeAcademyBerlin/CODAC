import { Bubble } from "codac-sassy";
import React from "react";

import { useAuth } from "#/contexts/authContext";

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
