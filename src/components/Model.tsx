// src/components/Model.tsx
import React, { useRef } from 'react';
import { MeshTransmissionMaterial, useGLTF, Text } from "@react-three/drei";
import { useFrame, useThree } from '@react-three/fiber';
import { useControls } from 'leva';

export default function Model() {
    const { scene, nodes } = useGLTF("/square-infinity.glb"); // Adjust the path as necessary 
    const { viewport } = useThree();
    const modelRef = useRef(null);
    
    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.x += 0.02;
        }
    });

    const materialProps = useControls({
        thickness: { value: 0.2, min: 0, max: 3, step: 0.05 },
        roughness: { value: 0, min: 0, max: 1, step: 0.1 },
        transmission: { value: 1, min: 0, max: 1, step: 0.1 },
        ior: { value: 1.2, min: 0, max: 3, step: 0.1 },
        chromaticAberration: { value: 0.02, min: 0, max: 1 },
        backside: { value: true },
    });

    return (
        <group scale={viewport.width / 3.75} ref={modelRef}>
            <Text font={'/path/to/your/font.ttf'} position={[0, 0, -1]} fontSize={0.5} color="white" anchorX="center" anchorY="middle">
                hello world!
            </Text>
            <primitive object={scene}>
                <MeshTransmissionMaterial {...materialProps} attach="material" />
            </primitive>
        </group>
    );
}
