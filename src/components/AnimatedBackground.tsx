
import { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedSphere = ({ position, scale, color, speed, distort }) => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.2) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * speed * 0.4) * 0.2;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * speed) * 0.2 + position[1];
    }
  });
  
  return (
    <Sphere args={[1, 32, 32]} scale={scale} position={position} ref={meshRef}>
      <MeshDistortMaterial 
        color={color} 
        attach="material" 
        distort={distort} 
        speed={speed} 
        roughness={0.5} 
        metalness={0.2}
        opacity={0.7}
        transparent={true}
      />
    </Sphere>
  );
};

const AnimatedBackground = ({ className = "" }) => {
  return (
    <div className={`fixed inset-0 -z-10 opacity-50 ${className}`}>
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Suspense fallback={null}>
          <AnimatedSphere 
            position={[-2, -1, -2]} 
            scale={1.5} 
            color={new THREE.Color('#9b87f5')} 
            speed={0.6} 
            distort={0.4} 
          />
          <AnimatedSphere 
            position={[2, 1, -4]} 
            scale={2} 
            color={new THREE.Color('#9b65f5')} 
            speed={0.4} 
            distort={0.5} 
          />
          <AnimatedSphere 
            position={[0, -2, -6]} 
            scale={3} 
            color={new THREE.Color('#8b5cf6')} 
            speed={0.3} 
            distort={0.3} 
          />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default AnimatedBackground;
