export interface Item {
  name: string;
  slug: string;
  description?: string;
}

export const navigation: { name: string; items: Item[] }[] = [
  {
    name: "Dashboard",
    items: [
      {
        name: "Dashboard",
        slug: "dashboard",
        description: "dashboard",
      },
    ],
  },
  {
    name: "Chats",
    items: [
      {
        name: "Legacy Chat",
        slug: "chat",
        description: "Chat",
      },
      {
        name: "Kangaroos Chat",
        slug: "main-chat",
        description: "Main Chat",
      },
    ],
  },
  // maybe it would be a good idea to have the chatrooms Links in the side bar...
  // query getChatById only displaying names...

  // {
  //   name: "Main Chat",
  //   items: [
  //     {
  //       name: "Main Chat",
  //       slug: "main-chat",
  //       description: "main chat",
  //     },
  //   ],
  // },
];
// New section "Main Chat" added by Christian.
