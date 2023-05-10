export interface Item {
  name: string;
  slug: string;
  description?: string;
  items?: Item[];
}

export const navData: { name: string; items: Item[] }[] = [
  {
    name: "Main Category",
    items: [
      {
        name: "Sub Category",
        slug: "suv-category",
        description: "Some description",
      },
    ],
  },
  {
    name: "Second Category",
    items: [
      {
        name: "Link 1",
        slug: "link-1",
        description: "Next Link 1",
      },
      {
        name: "Link 2",
        slug: "link-2",
        description: "Next Link 2",
      },
    ],
  },
];
