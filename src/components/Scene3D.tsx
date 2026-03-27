import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

function FloatingSphere({ position, scale, speed = 1, distort = 0.4, color = "#8b5cf6" }: {
  position: [number, number, number];
  scale: number;
  speed?: number;
  distort?: number;
  color?: string;
}) {
  return (
    <Float speed={speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh position={position} scale={scale}>
        <icosahedronGeometry args={[1, 4]} />
        <MeshDistortMaterial
          color={color}
          roughness={0.1}
          metalness={0.8}
          distort={distort}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingTorus({ position, scale, color = "#a855f7" }: {
  position: [number, number, number];
  scale: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta * 0.3;
      ref.current.rotation.y += delta * 0.2;
    }
  });
  return (
    <Float speed={0.8} rotationIntensity={1} floatIntensity={1.5}>
      <mesh ref={ref} position={position} scale={scale}>
        <torusGeometry args={[1, 0.35, 16, 32]} />
        <MeshWobbleMaterial color={color} factor={0.3} speed={1.5} roughness={0.2} metalness={0.7} />
      </mesh>
    </Float>
  );
}

function FloatingOctahedron({ position, scale, color = "#c084fc" }: {
  position: [number, number, number];
  scale: number;
  color?: string;
}) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.5;
      ref.current.rotation.z += delta * 0.2;
    }
  });
  return (
    <Float speed={1.2} rotationIntensity={2} floatIntensity={1.8}>
      <mesh ref={ref} position={position} scale={scale}>
        <octahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial color={color} roughness={0.15} metalness={0.9} distort={0.2} speed={3} />
      </mesh>
    </Float>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const count = 400;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 35;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 35;
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#a78bfa" transparent opacity={0.6} sizeAttenuation />
    </points>
  );
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} color="#c084fc" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#7c3aed" />
        {/* Spread elements far apart */}
        <FloatingSphere position={[-8, 5, -6]} scale={2.5} color="#7c3aed" />
        <FloatingSphere position={[9, -4, -8]} scale={3} distort={0.5} color="#a855f7" speed={0.8} />
        <FloatingSphere position={[2, -8, -10]} scale={1.8} color="#c084fc" speed={1.2} />
        <FloatingSphere position={[-10, -6, -12]} scale={2} color="#6d28d9" speed={0.6} distort={0.3} />
        <FloatingSphere position={[6, 8, -9]} scale={2.2} color="#8b5cf6" speed={0.9} />
        <FloatingTorus position={[10, 6, -7]} scale={1.5} color="#a855f7" />
        <FloatingTorus position={[-7, -9, -11]} scale={1.8} color="#7c3aed" />
        <FloatingOctahedron position={[-6, -10, -5]} scale={1.2} color="#7c3aed" />
        <FloatingOctahedron position={[7, 10, -13]} scale={1} color="#c084fc" />
        <FloatingOctahedron position={[-12, 3, -9]} scale={1.4} color="#a855f7" />
        <Particles />
      </Canvas>
    </div>
  );
}
