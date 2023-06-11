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
    name: "Community",
    items: [
      {
        name: "Community",
        slug: "community",
        description: "Community",
      },
    ],
  },

  {
    name: "LMS",
    items: [
      {
        name: "Pages",
        slug: "pages",
        description: "Pages",
      },
    ],
  },
];
