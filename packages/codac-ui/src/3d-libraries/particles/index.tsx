"use client";
import { Suspense, useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { IOptions, type ISourceOptions, MoveDirection, OutMode } from "tsparticles-engine";

import { confetti } from "./options/confetti";
import { snow } from "./options/snow";
import { triangles } from "./options/tiangles";

enum ParticulesOptions {
  "snow",
  "confetti",
  "triangles",
}

const getOptions = (type: string): ISourceOptions => {
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

export const ParticlesComp = ({ type }: { type: string }) => {
  const particlesInit = useCallback(async (engine: any) => {
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    await loadFull(engine);
    // await loadConfig(config)
  }, []);

  const particlesLoaded = useCallback(async (container: any) => {
    // await console.log(container);
  }, []);
  return (
    <Suspense fallback={<div>Loading...</div>}>
      {/* @ts-expect-error Async Server Component */}
      <Particles init={particlesInit} loaded={particlesLoaded} options={getOptions(type)} />
    </Suspense>
  );
};
