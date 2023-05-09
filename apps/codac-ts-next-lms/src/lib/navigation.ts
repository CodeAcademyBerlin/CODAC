export type Item = {
  name: string;
  slug: string;
  description?: string;
};

export const navigation: { name: string; items: Item[] }[] = [
  {
    name: "LMS",
    items: [
      {
        name: "Courses",
        slug: "courses",
        description: "Courses",
      },
      {
        name: "Projects",
        slug: "projects",
        description: "Projects",
      },
      {
        name: "Spikes",
        slug: "spikes",
        description: "Spikes",
      },
    ],
  },
  {
    name: "Pages",
    items: [
      {
        name: "Pages",
        slug: "test",
        description: "Pages",
      },
    ],
  },
  {
    name: "Challenges",
    items: [
      {
        name: "Challenges",
        slug: "challenges",
        description: "Challenges",
      },
    ],
  },
];
