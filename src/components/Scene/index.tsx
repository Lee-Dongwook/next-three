"use client";
import { useEffect } from "react";
import { a, useSpring } from "@react-spring/three";
import { MeshWobbleMaterial, useGLTF } from "@react-three/drei";

export function Cactus() {
  const { nodes, materials } = useGLTF("/glb/level-react-draco.glb");
  return (
    <mesh
      geometry={nodes.Cactus.geometry}
      position={[-0.42, 0.51, -0.62]}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <MeshWobbleMaterial factor={0.6} map={materials.Cactus.map} />
    </mesh>
  );
}

export function Camera() {
  const { nodes, materials } = useGLTF("/glb/level-react-draco.glb");
  const [spring, api] = useSpring(
    () => ({ "rotation-z": 0, config: { friction: 40 } }),
    []
  );

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    const wander = () => {
      api.start({ "rotation-z": Math.random() });
      timeout = setTimeout(wander, (1 + Math.random() * 2) * 800);
    };
    wander();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <a.group
      position={[-0.58, 0.83, -0.03]}
      rotation={[Math.PI / 2, 0, 0.47]}
      {...spring}
    >
      <mesh geometry={nodes.Camera.geometry} material={nodes.Camera.material} />
      <mesh geometry={nodes.Camera_1.geometry} material={materials.Lens} />
    </a.group>
  );
}
