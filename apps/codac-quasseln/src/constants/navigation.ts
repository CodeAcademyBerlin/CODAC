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
    name: "Chat",
    items: [
      {
        name: "Chat",
        slug: "chat",
        description: "Chat",
      },
    ],
  },
  {
    name: "Main Chat",
    items: [
      {
        name: "Main Chat",
        slug: "main-chat",
        description: "main chat",
      },
    ],
  },
];
// New section "Main Chat" added by Christian.
