import { BlankLayout, BrandLogo, CardShinyHOC } from "codac-ui";
import Link from "next/link";

import LandingGraphics from "#/components/LandingGraphics";

const Landing = () => {
  // const [animation, setAnimation] = useState(true);
  // const toggleAnimation = () => {
  //   setAnimation(!animation);
  // };
  return (
    <>
      <LandingGraphics />
      <BlankLayout>
        {/* <div className="absolute right-2 top-2">
          <ToggleButton checked={animation} toggle={toggleAnimation} label="" />
        </div> */}
        <Link href="/courses">
          <CardShinyHOC>
            <BrandLogo>CODAC</BrandLogo>
            <div className="py-4 text-center">
              <p className="font-bold text-zinc-400">by Code Academy Berlin</p>
            </div>
          </CardShinyHOC>
        </Link>
      </BlankLayout>
    </>
  );
};

export default Landing;
