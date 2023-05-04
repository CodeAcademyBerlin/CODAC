import { Button, Card, MainContainer, Navbar, RainbowCursor } from "toxic-ui";

export default function Home() {
  return (
    <MainContainer>
      <Button label="CODAC LMS" shape="rounded" />
      <Card
        img={
          "https://storage.googleapis.com/lms-codeacademyberlin/cohorts/logo/636e643451f2fa36938aa1e8.jpg"
        }
        title="Powered by Toxic-UI"
        key={1}
      />
    </MainContainer>
  );
}
