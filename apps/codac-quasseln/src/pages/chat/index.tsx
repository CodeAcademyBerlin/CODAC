import { gql, useQuery } from "@apollo/client";
import { ChatEntity } from "codac-graphql-types";
import { Button } from "codac-ui";
import { useEffect, useState } from "react";

import ChatRoom from "#/components/chat/chat-room";
import { useSocket } from "#/contexts/socketContext";
import { ApolloGenericQuery } from "#/types/apollo";
export const GetChatsDocument = gql`
  query getChats {
    chats {
      data {
        id
        attributes {
          name
          messages {
            body
            timestamp
            author {
              data {
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
`;

function Chat() {
  const { data } = useQuery<ApolloGenericQuery<ChatEntity[]>>(GetChatsDocument);
  const [connected, setConnected] = useState(false);
  const [room, setRoom] = useState<string>("");
  const { socket } = useSocket();
  useEffect(() => {
    if (socket) {
      setConnected(true);
    } else {
      setConnected(false);
    }
  }, [socket]);
  console.log("socket", socket);

  return (
    <>
      <div className="space-y-6">
        <div className="text-lg font-medium text-white">Chat Rooms</div>

        {connected && room !== "" && <ChatRoom roomId={room}></ChatRoom>}

        <div style={{ backgroundColor: "yellow" }} className="chatroom-nav">
          <span>Access other chat rooms</span>
          {data?.chats?.data.map((room) => (
            // chris added a div with the key={room.id} to solve error 22/06/23
            <div key={room.id}>
              {room.attributes && (
                <Button
                  key={room.id}
                  onClick={() => {
                    setRoom(room?.id || "");
                  }}
                >
                  {room.attributes.name ?? ""}
                </Button>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chat;
