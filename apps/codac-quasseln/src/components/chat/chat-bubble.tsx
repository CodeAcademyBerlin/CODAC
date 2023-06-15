import React from "react";

import { useAuth } from "#/contexts/authContext";

export const ChatBubble = ({ message }: { message: any }) => {
  const { user } = useAuth();
  const author =
    message?.author?.data?.attributes?.username || (message?.author?.username as string);

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
      {user?.username !== author ? (
        <div className="flex flex-row  justify-start gap-3 p-2">
          <p className="text-secondary text-xs font-semibold uppercase">
            <b>{author} </b>
            {formatDate(message.timestamp)}
          </p>
          <div className="bg-primary rounded-xl p-3">
            <p className="text-xl text-white">{message.body}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-row  justify-end gap-3 p-2">
          <p className="text-secondary text-xs font-semibold uppercase">
            <b>{author} </b>
            {formatDate(message.timestamp)}
          </p>

          <div className="rounded-xl bg-white p-3">
            <p className="text-primary text-xl">{message.body}</p>
          </div>
        </div>
      )}
    </>
  );
};
