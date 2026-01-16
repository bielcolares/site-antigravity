import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';

function FloatingShape({ position, color }) {
    const mesh = useRef();
    const [hovered, setHover] = useState(false);

    useFrame((state, delta) => {
        mesh.current.rotation.x += delta * 0.2;
        mesh.current.rotation.y += delta * 0.15;
        mesh.current.position.y += Math.sin(state.clock.elapsedTime + position[0]) * 0.002;
    });

    return (
        <mesh
            ref={mesh}
            position={position}
            onPointerOver={() => setHover(true)}
            onPointerOut={() => setHover(false)}
            scale={hovered ? 1.2 : 1}
        >
            <icosahedronGeometry args={[1, 0]} />
            <meshStandardMaterial
                color={color}
                wireframe
                transparent
                opacity={0.3}
                roughness={0}
                metalness={1}
            />
        </mesh>
    );
}

const IndustrialBackground = () => {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}>
            <Canvas camera={{ position: [0, 0, 10], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                <FloatingShape position={[-4, 2, -5]} color="#444" />
                <FloatingShape position={[4, -2, -4]} color="#666" />
                <FloatingShape position={[0, 0, -8]} color="#333" />
                <FloatingShape position={[-6, -4, -6]} color="#555" />
                <FloatingShape position={[6, 4, -7]} color="#777" />

                <Environment preset="city" />
            </Canvas>
        </div>
    );
};

export default IndustrialBackground;
