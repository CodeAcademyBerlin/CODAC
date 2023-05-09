import { GetPagesDocument, GetPagesQuery } from "codac-administration";
import { initializeApollo } from "../lib/apolloClient";

import { Card } from "codac-ui";
import { InferGetStaticPropsType } from "next/types";

export default function Pages({
  pages,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  console.log("pages", pages);
  return (
    <div className="space-y-7">
      <h1 className="text-3xl font-semibold text-white">Pages</h1>
      {/* <Particles type="confetti" /> */}
      <div className="xs:grid-cols-1 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {pages &&
          pages.map((page) => {
            return (
              page && (
                <Card
                  key={page.id}
                  name={page?.attributes?.slug || ""}
                  // description={course?.attributes?.description || ""}
                  href={`/pages/${page?.attributes?.slug}`}
                />
                // <div
                //   className="col-span-4 lg:col-span-1"
                //   key={i}
                // >
                //   <p>
                //     <strong>Name of the course:</strong> &emsp;{" "}
                //     {course?.attributes?.name}
                //   </p>
                //   <p>
                //     <strong>Description:</strong>
                //     &emsp;
                //     {course?.attributes?.description}
                //   </p>
                //   <div className="flex flex-col">
                //     <div className="flex flex-col">
                //       <div className="flex flex-col">
                //         {course?.attributes?.mentors?.data?.map((mentor, i) => (
                //           <div key={i}>
                //             <strong>Mentor {i + 1}:</strong> &emsp;
                //             <span>
                //               {
                //                 mentor?.attributes?.user?.data?.attributes
                //                   ?.firstname
                //               }{" "}
                //               {
                //                 mentor?.attributes?.user?.data?.attributes
                //                   ?.lastname
                //               }{" "}
                //               (
                //               {
                //                 mentor?.attributes?.user?.data?.attributes
                //                   ?.email
                //               }
                //               )
                //             </span>
                //           </div>
                //         ))}
                //       </div>
                //       <div className="flex">
                //         <strong>Related projects:</strong> &emsp;
                //         {course?.attributes?.projects?.data?.map(
                //           (project, i) => (
                //             <span key={i}>
                //               {project?.attributes?.name} <br />
                //               <b>Description:</b>{" "}
                //               {project?.attributes?.description} <br />
                //               <b>Published at:</b>{" "}
                //               {project?.attributes?.publishedAt}
                //             </span>
                //           )
                //         )}
                //       </div>
                //     </div>
                //     <p>
                //       <strong>Period:</strong> &emsp;
                //       {course?.attributes?.length} months
                //     </p>
                //     <Link
                //       className="flex justify-end font-bold underline hover:decoration-double"
                //       href={`courses/${course?.id}`}
                //     >
                //       Course page {">>"}
                //     </Link>
                //   </div>
                // </div>
              )
            );
          })}
      </div>
    </div>
  );
}
export async function getStaticProps() {
  // const { data, loading, error } = useGetAllCoursesQuery();
  // console.log("🚀 ~ ~ error:", error);
  // console.log("🚀 ~ data ~ data:", data);
  const client = initializeApollo(null, null);

  const { data, loading, error } = await client.query<GetPagesQuery>({
    query: GetPagesDocument,
  });
  const pages = data?.pages?.data;
  if (pages) {
    return {
      props: {
        pages,
      },
      // revalidate: 10,
    };
  }
  if (error || !pages) {
    return {
      notFound: true,
    };
  }
}
