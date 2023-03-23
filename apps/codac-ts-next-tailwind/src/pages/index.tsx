import Head from "next/head";
import { Button, Card, Layout } from "codac-ui";
import { useGetPagesQuery } from "codac-administration";

export default function Home() {
  const { data, loading, error } = useGetPagesQuery({
    variables: {},
  });
  console.log("data", data);
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>
      {data?.pages &&
        data.pages.data.map((page) => (
          <p key={page.id}>{page?.attributes?.slug}</p>
        ))}
      <p>hello</p>
      <main className="pt-16 sm:pt-24 mx-auto w-auto px-4 pb-8 lg:px-8">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl mx-auto text-center font-extrabold tracking-tight text-white">
          Web
          <span className="from-brandred to-brandblue block bg-gradient-to-r bg-clip-text px-2 text-transparent">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>
      </main>
    </div>
  );
}
