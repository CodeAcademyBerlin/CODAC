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
];
