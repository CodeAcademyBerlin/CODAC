import { LandingGraphics, BlankLayout, CardShinyHOC, BrandLogo } from "codac-ui";
import Link from "next/link";
import { ReactNode } from "react";

const Landing = () => {
  return (
    <>
      <LandingGraphics color="default" animateRerendering={true} />
      <BlankLayout>
        <Link href="/dashboard">
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

Landing.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>;

export default Landing;

export async function getStaticProps() {
  return {
    props: {}, // will be passed to the page component as props
  };
}
