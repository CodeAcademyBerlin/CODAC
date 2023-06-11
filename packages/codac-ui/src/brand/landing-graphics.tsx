import { BerlinSkyline } from "./berlin-skyline";
import { TronGrid } from "./tron-grid";

export const LandingGraphics = ({
  animateRerendering,
  color,
}: {
  animateRerendering?: boolean;
  color?: "pink" | "blue" | "violet" | "cyan" | "orange" | "default";
}) => {
  return (
    <>
      <BerlinSkyline color={color} animateRerendering={animateRerendering} />
      <TronGrid color={color} animateRerendering={animateRerendering} />
    </>
  );
};
