import { BlankLayout, BrandLogo, CardShinyHOC, CodacLogoTriangle, LandingGraphics } from "codac-ui";
import Link from "next/link";

const Landing = () => {
  return (
    <>
      <LandingGraphics color="default" animateRerendering={true} />
      <BlankLayout>
        <Link href="/dashboard">
          <CodacLogoTriangle />
          {/* <CardShinyHOC>
            <BrandLogo>CODAC</BrandLogo>
            <div className="py-4 text-center">
              <p className="font-bold text-zinc-400">by Code Academy Berlin</p>
            </div>
          </CardShinyHOC> */}
        </Link>
      </BlankLayout>
    </>
  );
};

export default Landing;
