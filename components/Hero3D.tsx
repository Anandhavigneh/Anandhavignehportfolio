import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { TorusKnot, Icosahedron, Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

export const Hero3D = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.rotation.x += 0.005;
    }
    if (outerRef.current) {
      outerRef.current.rotation.z -= 0.002;
      outerRef.current.rotation.y -= 0.005;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      {/* Core Kernel */}
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.8, 1]} />
        <MeshDistortMaterial
          color="#00f3ff"
          wireframe
          distort={0.4}
          speed={2}
          roughness={0}
          emissive="#00f3ff"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Outer Ring */}
      <mesh ref={outerRef}>
        <torusKnotGeometry args={[2.5, 0.2, 128, 16]} />
        <meshStandardMaterial
          color="#bc13fe"
          wireframe
          opacity={0.3}
          transparent
          emissive="#bc13fe"
          emissiveIntensity={0.8}
        />
      </mesh>
      
      {/* Particles */}
      <points>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={100}
            array={new Float32Array(300).map(() => (Math.random() - 0.5) * 10)}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial size={0.05} color="#0aff0a" transparent opacity={0.6} />
      </points>
      
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#00f3ff" />
      <pointLight position={[-10, -10, -10]} intensity={2} color="#bc13fe" />
    </Float>
  );
};
