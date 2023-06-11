import { GetPagesDocument, type GetPagesQuery } from "codac-graphql-types";
import { Card } from "codac-ui";
import type { InferGetStaticPropsType } from "next/types";

import { initializeApollo } from "#/lib/apolloClient";

export default function Pages({ pages }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-semibold text-white">Pages</h1>

      <div className="xs:grid-cols-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pages.map((page) => {
          return (
            page.attributes && (
              <Card
                key={page.id}
                title={page.attributes.slug ?? ""}
                href={`/pages/${page.attributes.slug ?? ""}`}
              />
            )
          );
        })}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const client = initializeApollo({});

  const { data, error } = await client.query<GetPagesQuery>({
    query: GetPagesDocument,
  });
  const pages = data.pages?.data;
  if (pages) {
    return {
      props: {
        pages,
      },
      // revalidate: 10,
    };
  }
  if (error) {
    return {
      notFound: true,
    };
  }
}
