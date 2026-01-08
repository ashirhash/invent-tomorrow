'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThreeBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas || !canvas.parentElement) return;

        const container = canvas.parentElement;
        let renderer;

        try {
            renderer = new THREE.WebGLRenderer({
                canvas,
                alpha: true,
                antialias: false,
            });
        } catch (err) {
            console.warn('WebGL not available, skipping Three.js background', err);
            return;
        }
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

        const scene = new THREE.Scene();

        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 5;

        const geometry = new THREE.BufferGeometry();
        const vertices = [];

        for (let i = 0; i < 5000; i++) {
            vertices.push(
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000),
                THREE.MathUtils.randFloatSpread(2000)
            );
        }

        geometry.setAttribute(
            'position',
            new THREE.Float32BufferAttribute(vertices, 3)
        );

        const material = new THREE.PointsMaterial({
            color: 0x3b82f6,
            size: 2,
        });

        const points = new THREE.Points(geometry, material);
        scene.add(points);

        const resize = () => {
            const { width, height } = container.getBoundingClientRect();
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
            renderer.setSize(width, height, false);
        };

        resize();

        const resizeObserver = new ResizeObserver(resize);
        resizeObserver.observe(container);

        let rafId;
        const animate = () => {
            rafId = requestAnimationFrame(animate);
            points.rotation.y += 0.0005;
            renderer.render(scene, camera);
        };

        animate();

        return () => {
            cancelAnimationFrame(rafId);
            resizeObserver.disconnect();
            geometry.dispose();
            material.dispose();
            renderer.dispose();
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 -z-1 w-full h-full"
        />
    );
}
