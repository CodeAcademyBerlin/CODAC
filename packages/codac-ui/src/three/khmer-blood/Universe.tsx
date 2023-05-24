import { OrbitControls, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import { Spaceship } from "./Spaceship";

const Universe = () => {
  return (
    <Canvas className="h-full w-full bg-black">
      <OrbitControls></OrbitControls>
      <pointLight position={[10, 10, 10]} />
      <Stars></Stars>
      <Spaceship></Spaceship>
    </Canvas>
  );
};

export { Universe };
