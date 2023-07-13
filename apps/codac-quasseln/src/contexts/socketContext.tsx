/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import type { Chat, Conversation, ConversationEntity } from "codac-graphql-types";
import { createContext, type ReactNode, useContext, useEffect, useState } from "react";
import { io, type Socket } from "socket.io-client";

import { getToken } from "#/lib/apolloClient";

import { useAuth } from "./authContext";
import { MessageEntity } from "codac-graphql-types";


interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
  ["chat:update"]: (chat: Chat) => void;
  ["chat"]: (chat: Chat) => void;
  ["conversation:update"]: (conversation: ConversationEntity) => void;
  ["message:update"]: (message: MessageEntity) => void;


}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface ClientToServerEvents {
  // chat: () => void;
}
type SocketIface = Socket<ServerToClientEvents, ClientToServerEvents>;

export interface SocketContextIface {
  socket: SocketIface | null;
  connectSocket: () => void;
}
const init = {
  socket: null,
  connectSocket: () => {
    console.log("error connecting socket");
  },
};
export const SocketContext = createContext<SocketContextIface>(init);

export const useSocket = (): SocketContextIface => useContext(SocketContext);

export const SocketProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth();
  const [socket, setSocket] = useState<SocketIface | null>(null);

  const connectSocket = () => {
    if (!user || socket || typeof window === "undefined") {
      return;
    } else {
      const token = getToken();

      const s: SocketIface = io(`${process.env.NEXT_PUBLIC_CODAC_SERVER_URL ?? ""}`, {
        auth: {
          token: token,
        },
      });
      setSocket(s);
    }
  };
  // why do you use have Socket as dependency...? 
  // shoud we clean it up? in the return...? 
  useEffect(() => {
    connectSocket();
  }, [user]);

  const data = {
    socket,
    connectSocket,
  };
  return <SocketContext.Provider value={data}>{children}</SocketContext.Provider>;
};
