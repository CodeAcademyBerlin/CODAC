"use client";
import { Suspense, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { confetti } from "./options/confetti";
import { snow } from "./options/snow";
import { triangles } from "./options/tiangles";
var ParticulesOptions;
(function (ParticulesOptions) {
    ParticulesOptions[ParticulesOptions["snow"] = 0] = "snow";
    ParticulesOptions[ParticulesOptions["confetti"] = 1] = "confetti";
    ParticulesOptions[ParticulesOptions["triangles"] = 2] = "triangles";
})(ParticulesOptions || (ParticulesOptions = {}));
const getOptions = (type) => {
    switch (type) {
        case "snow":
            return snow;
        case "confetti":
            return confetti;
        case "triangles":
            return triangles;
        default:
            return triangles;
    }
};
export const ParticlesComp = ({ type }) => {
    const particlesInit = useCallback(async (engine) => {
        // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        await loadFull(engine);
        // await loadConfig(config)
    }, []);
    const particlesLoaded = useCallback(async (container) => {
        // await console.log(container);
    }, []);
    return (<Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <Particles init={particlesInit} loaded={particlesLoaded} options={getOptions(type)}/>
    </Suspense>);
};
