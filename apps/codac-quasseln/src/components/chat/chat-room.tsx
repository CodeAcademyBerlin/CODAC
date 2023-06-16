import { gql, useMutation, useQuery } from "@apollo/client";
import { type Chat, ChatEntity, type ComponentChatMessage } from "codac-graphql-types";
import { useEffect, useState } from "react";

import { useSocket } from "#/contexts/socketContext";
import { ApolloGenericQuery } from "#/types/apollo";

import { ChatBubble } from "./chat-bubble";
const GetChatDocument = gql`
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
      <span style={{ backgroundColor: "yellow" }}>display here room's name</span>
      <button style={{ backgroundColor: "yellow" }} className="see-older-message">
        See older messages
      </button>
      {chatHistory.map((message) => (
        <ChatBubble key={message.id} message={message}></ChatBubble>
      ))}
      {roomId !== "" && (
        <>
          {typing && <p className="activity-message">someone typing...</p>}
          <div className="send-message-container">
            <textarea
              placeholder="Write something..."
              onFocus={() => {
                setTyping(true);
              }}
              onBlur={() => {
                setTyping(false);
              }}
              id="outlined-basic"
              // label={{ socket } ? "Write something" : "Connecting..."}
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
            <button style={{ backgroundColor: "yellow" }} className="send-button">
              Send
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default ChatRoom;
