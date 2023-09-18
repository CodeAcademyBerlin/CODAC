import { GetPageDocument, GetPageQuery } from "codac-graphql-types";
import type { InferGetStaticPropsType } from "next/types";

import DynamicZoneSections from "#/components/dynamic-zone-sections";
import { initializeApollo } from "#/lib/apolloClient";

export default function LMSIndex({ page, error }: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("page", page);
  const testing = "testing string";
  return (
    <div className="space-y-7">
      {error && <p>{error.message || "Something went wrong..."}</p>}
      {testing && <p>{testing || "The testing string is undefined"}</p>}
      {page && (
        <>
          {/* <h1 className="text-3xl font-semibold text-white">{page.title}</h1> */}
          {<DynamicZoneSections contentSections={page.contentSections} />}

          {/* <div className="xs:grid-cols-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <Card title={page.title ?? ""} href={`/pages/${page.slug ?? ""}`} />
        </div> */}
        </>
      )}
    </div>
  );
}

// export async function getStaticProps() {
//   const client = initializeApollo({});

//   const { data, error } = await client.query<GetPagesQuery>({
//     query: GetPagesDocument,
//   });
//   const pages = data.pages?.data;
//   if (pages) {
//     return {
//       props: {
//         pages,
//       },
//       // revalidate: 10,
//     };
//   }
//   if (error) {
//     return {
//       notFound: true,
//     };
//   }
// }
export async function getStaticProps() {
  const client = initializeApollo({});

  const { data, error } = await client.query<GetPageQuery>({
    query: GetPageDocument,
    variables: { slug: "helloworld" },
  });
  console.log("console", data, error);
  if (data.pages?.data[0] && data.pages.data[0].attributes) {
    const page = data.pages.data[0].attributes;

    return {
      props: {
        page,
      },
      revalidate: 10,
    };
  } else if (error) {
    return {
      props: {
        error,
      },
      revalidate: 10,
    };
  } else {
    return {
      redirect: {
        destination: "/dashboard",
        permanent: false,
      },
    };
  }
}
