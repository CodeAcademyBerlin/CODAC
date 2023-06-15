import { gql, useQuery } from "@apollo/client";
import { ChatEntity } from "codac-graphql-types";
import { Button } from "codac-ui";
import { useEffect, useState } from "react";

import ChatRoom from "#/components/chat/chat-room";
import { useSocket } from "#/contexts/socketContext";
import { ApolloGenericQuery } from "#/types/apollo";
const GetChatsDocument = gql`
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
        <div>
          <div className="text-lg font-medium text-white">Chat Rooms</div>
        </div>
        {connected && room !== "" && <ChatRoom roomId={room}></ChatRoom>}
        <div className="grid grid-cols-4 gap-6">
          {data?.chats?.data.map((room) => (
            <div key={room.id} className="col-span-4 lg:col-span-1">
              {room.attributes && (
                <div className="relative">
                  <Button
                    onClick={() => {
                      setRoom(room?.id || "");
                    }}
                  >
                    {room.attributes.name ?? ""}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Chat;
