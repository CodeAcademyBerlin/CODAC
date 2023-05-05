import Link from "next/link";
import { Button, Card, MainContainer, Navbar, RainbowCursor } from "toxic-ui";
import ParticlesComp from "../components/Particles/Particles";
import { useState } from "react";

export default function Home() {
  const [celebrate, setCelebrate] = useState(false);
  return (
    <MainContainer>

      <Card
        img={
          "https://storage.googleapis.com/lms-codeacademyberlin/cohorts/logo/636e643451f2fa36938aa1e8.jpg"
        }
        title="Powered by Toxic-UI"
        key={1}
      />
      <div className="mt-5 flex w-full justify-around">
        {" "}
        <Link href="/courses">
          <Button label="Courses" shape="rounded" />
        </Link>
        <Link href="/projects">
          <Button label="Projects" shape="rounded" />
        </Link>
        <Link href="/spikes">
          <Button label="Spikes" shape="rounded" />
        </Link>
      </div>
      <div className="mt-20 flex w-full justify-around">
        {celebrate && <ParticlesComp type="confetti" />}
        <button onClick={() => setCelebrate(true)}>?</button>
      </div>

    </MainContainer>
  );
}
