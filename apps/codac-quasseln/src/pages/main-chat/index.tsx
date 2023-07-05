import { useAuth } from '#/contexts/authContext';

import React, { useEffect, useState } from 'react'
import { gql, useQuery } from "@apollo/client";
import Link from 'next/link';
import { useSocket } from '#/contexts/socketContext';
import { Enum_Componentleadlifecycle_State } from "codac-graphql-types";



const GetAllChats = gql`
query getAllChats {
  chatrooms {
    data {
      id
      attributes {
        name
        createdAt
        users_permissions_users {
          data {
            id
            attributes {
              username
              avatar {
                data {
                  attributes {
                    url
                  }
                }
              }
              role {
                data {
                  attributes {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

type Props = {}

const ChrisChat = (props: Props) => {
  const { data, error, loading } = useQuery(GetAllChats);
  const { user } = useAuth();
  console.log('user :>> ', user);

  // do I need this connected state???
  const [connected, setConnected] = useState(false);

  const { socket } = useSocket();
  useEffect(() => {
    if (socket) {
      setConnected(true);
    } else {
      setConnected(false)
    }
  }, [socket]);
  console.log('socket :>> ', socket);

  console.log('user :>> ', user);
  console.log('data from chris query :>> ', data);

  return (
    <>
      <div className='space-y-6' >
        <div className='text-lg font-medium text-white'>Chat Rooms</div>
        <div >index
          <h1 style={{ color: "white" }}>Index For Alls Chatrooms... </h1>
        </div>
        <div>
          {data && data?.chatrooms?.data.map((chat: any) => {
            return (
              <div key={chat.id}
                style={{
                  color: "white",
                  margin: "6px",
                  border: "2px solid white",
                  borderRadius: "5px",
                  textAlign: "center"
                }} >
                {/* se puede con el nombre?? sería mejor... */}
                <Link href={`main-chat/${chat.id}`}>
                  <p>{chat.attributes.name}</p>
                </Link>
              </div>
            )
          })}

        </div>

      </div>
    </>
  )
}

export default ChrisChat