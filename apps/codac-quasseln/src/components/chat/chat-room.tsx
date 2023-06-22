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
          messages{
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
// esta puede ser la version delete...

const DeleteChatMsgDocument = gql`
  mutation deleteChatMessage($chatId: ID!, $messageId: ID!){
    deleteChatMessage(chatId: $chatId, messageId: $messageId){
      success
      message
    }
  }
`;

// faltaria edit message...(update...?)

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
  console.log('data for chris... :>> ', data);
  const [addChatMessageMutation] = useMutation(AddChatMsgDocument);

  //  I'm trying to figure out the delete function.... 21/06/23
  const [deleteChatMessageMutation] = useMutation(DeleteChatMsgDocument)


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
        return message.id
      })
      console.log('messageId :>> ', messageId);
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

  //  the could be the delete function... 21/06/23
  const deleteMessage = () => {
    if (msg) {
      deleteChatMessageMutation({
        variables: {
          chatId: `${roomId}`,
          // messageId: `${messageId}` 
        }
      })
    }

  }


  return (
    <div>
      <div
        style={{
          backgroundColor: "inherit",
          width: "95%",
          height: "110%",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {chatHistory.map((message) => (
          //adding a div to solve problem with key...
          // Problem with the key.id solved.... Chris 21/06/23 01.07pm
          <div key={message.id}>
            <ChatBubble key={message.id} message={message}></ChatBubble>
          </div>
        ))}

        {typing && (
          <div className="flex flex-row items-center space-x-2">
            <p className="text-sm text-white">someone typing...</p>
          </div>
        )}
        {roomId !== "" && (
          <input
            placeholder="Write something..."
            className="h-10 w-full rounded-lg border-2 border-gray-300 bg-white px-5 pr-16 text-sm focus:outline-none"
            onFocus={() => {
              setTyping(true);
            }}
            onBlur={() => {
              setTyping(false);
            }}
            id="outlined-basic"
            // label={{ socket } ? 'Write something' : 'Connecting...'}
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
        )}
      </div>
    </div>
  );
};

export default ChatRoom;
