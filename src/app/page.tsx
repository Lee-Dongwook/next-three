"use client";

import { Canvas } from "@react-three/fiber";
import {
  CameraControls,
  Environment,
  PerspectiveCamera,
} from "@react-three/drei";
import { Cactus, Camera } from "@/components/Scene";

export default function Home() {
  return (
    <Canvas flat>
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 1.6} />
      <ambientLight intensity={Math.PI / 2} />
      <group scale={20} position={[0, -10, 0]}>
        <Camera />
        <Cactus />
      </group>
      <Environment preset="city" background blur={1} />
      <PerspectiveCamera makeDefault position={[80, 20, 80]} />
    </Canvas>
  );
}
