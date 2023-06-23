import { useRouter } from 'next/router'
import { gql, useQuery, useMutation } from "@apollo/client";
import React, { useState } from 'react'
import { useAuth } from '#/contexts/authContext';



// This query is to find the chatroom.... NOT all the messages...
const getSingleChat = gql`
query GetChatQuery($id: ID) {
  chatroom(id: $id) {
    data {
      id
      attributes {
        name
        conversations {
          data {
            id
            attributes {
              title
            }
          }
        }
      }
    }
  }
}
`;

const getChatHistoryById = gql`
query getChatHistoryById($id: ID) {
  conversation(id: $id) {
    data {
      attributes {
        messages {
          data {
            id
            attributes {
              body
              createdAt
              updatedAt
              author {
                data {
                  attributes {
                    username
                    avatar {
                      data {
                        attributes {
                          url
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
    }
  }
}
`;

const createNewMessage = gql`
mutation createMessage( $body: String!, $conversationId: ID!, $authorId: ID!){
  createMessage( data: {body: $body, conversation: $conversationId, author: $authorId} ) {
    data{
      id
      attributes{
        author{
          data{
            id
          }
        }
        body
        conversation{
          data{
            id
          } 
        }
      }
    }
  }
}
`;

// this are the variables..... 
// {"body": "CODAC... from Emily", 
// "conversationId": 1,
// "authorId": 18
// }

type Props = {}

const SingleChat = (props: Props) => {
    const { user } = useAuth();
    const userId = user?.id

    const router = useRouter();
    const { chatId } = useRouter().query;

    const [active, setActive] = useState("");
    // Refetching enables you to refresh query results in response to a particular user action, as opposed to using a fixed interval.
    const { data: chatRooms, error, loading } = useQuery(getSingleChat,
        {
            variables: {
                id: chatId
            }
        });
    //  the refecth should be for the chat history...

    const { data: allMessages, loading: chatLoading, error: messageError, refetch } = useQuery(getChatHistoryById,
        {
            variables: {
                id: active
            }
        });

    // do I need this chatHitory state????
    const [chatHistory, setChatHistory] = useState([]);

    const [message, setMessage] = useState("");

    // do I need this  typing state????
    // const [typing, setTyping] = useState(false);


    // esta pendiente.....
    const [newMessageMutation] = useMutation(createNewMessage);
    const sendMessage = () => {
        if (message) {
            newMessageMutation({
                variables: {
                    conversationId: active,
                    authorId: userId,
                    body: message
                }
            })
            setMessage("");
        }
    }

    // console.log('chatId :>> ', chatId);
    // console.log('router :>> ', router);
    // console.log('data :>> ', chatRooms);
    // console.log('messages history :>> ', allMessages?.conversation?.data.attributes.messages.data);



    return (
        <div style={{ color: "whitesmoke" }}>
            <h1>Welcome to {chatRooms?.chatroom.data?.attributes.name}</h1>
            <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                <h2>Conversations...</h2>
                {chatRooms && chatRooms.chatroom?.data?.attributes.conversations?.data?.map((conversation: any) => {
                    return (
                        <div key={conversation.id}
                            onClick={async () => {
                                setActive(conversation.id.toString());
                                // await getMessages();
                            }}

                        >
                            <p>{conversation.attributes?.title}</p>
                        </div>
                    )
                })}

            </div>



            {/* All Messages from a conversation.... */}
            <div style={{ border: "2px solid white" }}>
                <div style={{ border: "2px solid white", width: "90%", height: "300px", margin: "auto", overflow: "scroll" }} >
                    {allMessages && allMessages?.conversation?.data.attributes?.messages?.data?.map((message: any) => {
                        return (
                            <div style={{ border: "1px solid red", width: "90%", margin: "5px" }} key={message.id}>
                                <p>{message.attributes.body}</p>
                            </div>
                        )
                    })}
                </div>
                <div style={{ color: "whitesmoke", textAlign: "center" }}>
                    <textarea
                        style={{ outline: "none", resize: "none", color: "black", width: "90%", margin: "auto" }}
                        placeholder='write something...'
                        value={message}
                        // ask Emily why refetch each time I write something....
                        onChange={(e: { preventDefault: () => void, target: any }) => {
                            e.preventDefault();
                            setMessage(e.target.value);
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {

                                sendMessage();
                                refetch();
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    )
};

export default SingleChat