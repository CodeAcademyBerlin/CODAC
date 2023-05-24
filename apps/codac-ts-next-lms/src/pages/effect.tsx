import { TronGrid } from "codac-ui";
import { BlankLayout, EffectScene } from "codac-ui";
import type { ReactNode } from "react";

const Home = () => {
  return (
    <div>
      <TronGrid />
      <EffectScene />
    </div>
  );
};
Home.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;
export default Home;
