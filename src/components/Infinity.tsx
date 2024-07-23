// src/components/Infinity.tsx
'use client';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import Model from './Model';

export default function Infinity() {
  return (
    <div>
      <Canvas style={{ background: '#000000' }}>
        <Model />
        <directionalLight intensity={2} position={[0, 2, 3]} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
