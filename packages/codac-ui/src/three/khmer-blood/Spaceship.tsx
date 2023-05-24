import { Html, useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";
import type { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

// import codacGlb from "./codac-logo.glb";

type GLTFResult = GLTF & {
  nodes: {
    Default: THREE.Mesh;
  };
};
// 3d model source: https://codesandbox.io/s/react-three-fiber-orbit-controls-without-drei-7c11y?from-embed=&file=/src/App.js
const Model3D = () => {
  const model = useGLTF(
    "test2.glb",
    // "https://uploads.codesandbox.io/uploads/user/c16bd0b5-fe7e-4464-bdea-b2bf766b639b/h9Gz-arwing.glb",
    true
  ) as unknown;
  const { nodes } = model as GLTFResult;
  return (
    <mesh geometry={nodes.Default.geometry}>
      <meshStandardMaterial attach="material" color="#49404a" roughness={0.3} metalness={0.3} />
    </mesh>
  );
};

const Spaceship = () => {
  const group = useRef<THREE.Group>(null!);

  return (
    <Suspense fallback={null}>
      <group ref={group}>
        <Model3D></Model3D>
        <Html
          center={true}
          position={[0, 0, 1]}
          className="flex aspect-video w-48 select-none items-center justify-center rounded-lg sm:w-80"
        ></Html>
      </group>
    </Suspense>
  );
};

export { Spaceship };
