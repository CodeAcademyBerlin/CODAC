import Head from "next/head";
import { Button, Card, MainContainer, Navbar, RainbowCursor } from "toxic-ui";

import { useGetPagesQuery } from "codac-administration";

export default function Home() {
  const { data, loading, error } = useGetPagesQuery({
    variables: {},
  });
  console.log("data", data);
  return (
    <MainContainer>
      <RainbowCursor />
      <Card title="testing card" key={0} />
      <Navbar
        brand={{ id: 1, text: "sdsd" }}
        urls={[{ id: 1, text: "url-1" }]}
      />
      <Button label="testing button" shape="rounded" />
    </MainContainer>
  );
}
