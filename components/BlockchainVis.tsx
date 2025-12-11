import React, { useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Line, Sphere, Stars } from '@react-three/drei';
import * as THREE from 'three';

const Network = () => {
  const count = 30;
  
  const points = useMemo(() => {
    return new Array(count).fill(0).map(() => ({
      position: new THREE.Vector3(
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15
      ),
      velocity: new THREE.Vector3(
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02,
        (Math.random() - 0.5) * 0.02
      )
    }));
  }, []);

  const lines = useMemo(() => {
    // Just a placeholder, we calculate real lines in useFrame if we want dynamic
    // For performance in this demo, we'll use a static set of connections that move with points
    return []; 
  }, []);

  useFrame(() => {
    // Simple particle system animation logic would go here
    // For this static demo, we rely on the scene rotation
  });

  return (
    <group>
      {points.map((pt, i) => (
        <group key={i} position={pt.position}>
           <Sphere args={[0.15, 16, 16]}>
             <meshBasicMaterial color={i % 2 === 0 ? "#00f3ff" : "#bc13fe"} />
           </Sphere>
        </group>
      ))}
      
      {/* Create some random connections */}
      {points.map((pt, i) => {
        if (i > 0 && i % 3 === 0) {
            return (
                <Line
                    key={`line-${i}`}
                    points={[pt.position, points[i-1].position]}
                    color="#00f3ff"
                    opacity={0.2}
                    transparent
                    lineWidth={1}
                />
            )
        }
        return null;
      })}
    </group>
  );
}

export const BlockchainVis = () => {
  return (
    <div className="h-[400px] w-full relative border-y border-cyber-neonBlue/30 bg-cyber-black overflow-hidden">
      <div className="absolute top-4 left-4 z-10 bg-cyber-dark/80 p-2 border border-cyber-neonBlue/50">
        <h3 className="text-cyber-neonBlue font-orbitron text-xs">LIVE MEMPOOL</h3>
        <p className="text-cyber-neonGreen font-mono text-xs">GAS: 12 Gwei</p>
        <p className="text-cyber-text font-mono text-xs">TPS: 14.5</p>
      </div>
      
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <color attach="background" args={['#05050a']} />
        <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
        <ambientLight intensity={0.5} />
        <Network />
        {/* Slowly rotate the whole network */}
        <group rotation={[0, 0, Math.PI / 4]}>
            <mesh>
                 {/* Visual placeholder for network flow */}
            </mesh>
        </group>
      </Canvas>
    </div>
  );
};
