import Head from "next/head";
import { Button, Card, Layout } from "codac-ui";
import { useGetPagesQuery } from "codac-administration";

const CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
];

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
      <Layout>
        {data?.pages &&
          data.pages.data.map((p) => <p key={p.id}>{p?.attributes?.slug}</p>)}
        <p>hello</p>
      </Layout>
      <Button />
      {/* <main className="pt-16 sm:pt-24 mx-auto w-auto px-4 pb-8 lg:px-8">
        <h1 className="text-6xl sm:text-7xl lg:text-8xl xl:text-8xl mx-auto text-center font-extrabold tracking-tight text-white">
          Web
          <span className="from-brandred to-brandblue block bg-gradient-to-r bg-clip-text px-2 text-transparent">
            Turborepo Example
          </span>
        </h1>
        <div className="mx-auto mt-5 max-w-xl sm:flex sm:justify-center md:mt-8">
          <Button />
        </div>

        <div className="mt-12 grid grid-cols-1 place-content-evenly gap-4 sm:grid-cols-3">
          {CARD_CONTENT.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </main> */}
    </div>
  );
}
