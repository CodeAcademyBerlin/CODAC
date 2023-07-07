import { gql, useMutation, useQuery } from "@apollo/client";
import { type Chat, ChatEntity, type ComponentChatMessage } from "codac-graphql-types";
import { Button } from "codac-sassy";

import { useEffect, useState } from "react";

import { useSocket } from "#/contexts/socketContext";
import { ApolloGenericQuery } from "#/types/apollo";

import { ChatBubble } from "./chat-bubble";

import { GetChatsQuery } from "codac-graphql-types";
export const GetChatDocument = gql`
  query getChat($id: ID!) {
    chat(id: $id) {
      data {
        id
        attributes {
          name
          messages {
            id
            body
            timestamp
            author {
              data {
                id
                attributes {
                  username
                  email
                }
              }
            }
          }
        }
      }
    }
  }
`;

const AddChatMsgDocument = gql`
  mutation addChatMessage($chatId: ID!, $body: String!) {
    addChatMessage(chatId: $chatId, body: $body) {
      success
      message
    }
  }
`;

interface Props {
  roomId: string;
}

const ChatRoom: React.FC<Props> = ({ roomId }) => {
  const [chatHistory, setChatHistory] = useState<ComponentChatMessage[]>([]);

  const { data, refetch } = useQuery<ApolloGenericQuery<ChatEntity>>(GetChatDocument, {
    variables: {
      id: roomId,
    },
  });
  // console.log('data for chris... :>> ', data);
  const [addChatMessageMutation] = useMutation(AddChatMsgDocument);

  const [msg, setMsg] = useState<string>("");
  const [typing, setTyping] = useState<boolean>(false);
  const { socket } = useSocket();

  useEffect(() => {
    if (socket) {
      socket.on("chat:update", (chatEvent: Chat) => {
        const history = chatEvent.messages as ComponentChatMessage[];
        history.length && setChatHistory(history);
      });
    }
  }, [socket]);

  useEffect(() => {
    refetch();
    if (data) {
      const history = data?.chat?.data?.attributes?.messages as ComponentChatMessage[];
      console.log("history roomId", history);
      history.length && setChatHistory(history);
      //  I have maped over the variable in order to find only the id of each message
      const messageId = history.map((message) => {
        return message.id;
      });
      console.log("messageId :>> ", messageId);
      // trying to fin the message id.... chris 21/06/23
      console.log("updatedHistory roomId", chatHistory);
    }
  }, [roomId, data]);

  const sendMessage = () => {
    if (msg) {
      addChatMessageMutation({
        variables: {
          chatId: `${roomId}`,
          body: msg,
        },
      });
      setMsg("");
    }
  };

  return (
    <div className="chatroom-container">
      <span style={{ backgroundColor: "yellow" }}>display here the rooms’ name</span>
      <button style={{ backgroundColor: "yellow" }} className="see-older-message">
        See older messages
      </button>

      {chatHistory.map((message) => (
        <div key={message.id}>
          <ChatBubble key={message.id} message={message}></ChatBubble>
        </div>
      ))}

      {roomId !== "" && (
        <>
          {typing && <p className="activity-message">someone typing...</p>}

          <div className="send-message-container">
            <div>
              <textarea
                placeholder="Write something..."
                onFocus={() => {
                  setTyping(true);
                }}
                onBlur={() => {
                  setTyping(false);
                }}
                value={msg}
                onChange={(e) => {
                  setMsg(e.target.value);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    sendMessage();
                  }
                }}
              />
              <Button
                label="Send"
                primary
                onClick={() => {
                  sendMessage();
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatRoom;
