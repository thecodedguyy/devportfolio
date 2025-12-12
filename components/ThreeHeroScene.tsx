"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Float } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

function FloatingSphere() {
    const mesh = useRef<THREE.Mesh>(null!);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (!mesh.current) return;

        mesh.current.position.y = Math.sin(t) * 0.2;
        mesh.current.rotation.y += 0.01;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1.5}>
            <mesh ref={mesh} castShadow receiveShadow>
                <sphereGeometry args={[1.2, 64, 64]} />
                <meshStandardMaterial
                    metalness={0.7}
                    roughness={0.2}
                    color="#38bdf8"
                />
            </mesh>
        </Float>
    );
}

export default function ThreeHeroScene() {
    return (
        <div className="w-full h-full">
            <Canvas
                camera={{ position: [0, 0, 4], fov: 45 }}
                shadows
            >
                <color attach="background" args={["#020617"]} />

                <ambientLight intensity={0.4} />
                <directionalLight
                    castShadow
                    position={[3, 5, 4]}
                    intensity={1.5}
                />
                <pointLight position={[-4, -3, -4]} intensity={0.5} />

                <Suspense fallback={null}>
                    <FloatingSphere />
                </Suspense>

                <OrbitControls enableZoom={false} />
            </Canvas>
        </div>
    );
}
