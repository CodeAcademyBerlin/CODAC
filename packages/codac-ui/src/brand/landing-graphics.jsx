import { BerlinSkyline } from "./berlin-skyline";
import { TronGrid } from "./tron-grid";
export const LandingGraphics = ({ animateRerendering, color, }) => {
    return (<>
      <BerlinSkyline color={color} animateRerendering={animateRerendering}/>
      <TronGrid color={color} animateRerendering={animateRerendering}/>
    </>);
};
