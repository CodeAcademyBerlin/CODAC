import { BlankLayout, CodacLogoTriangle, LandingGraphics } from "codac-ui";
import Link from "next/link";
// Deploy test
const Landing = () => {
  return (
    <>
      <LandingGraphics color="default" animateRerendering={true} />
      <BlankLayout>
        <Link href="/dashboard">
          <CodacLogoTriangle />
        </Link>
      </BlankLayout>
    </>
  );
};

export default Landing;
