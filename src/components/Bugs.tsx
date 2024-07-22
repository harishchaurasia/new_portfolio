// src/components/Bugs.tsx
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { gsap } from 'gsap';

const Bugs: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current!;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mount.appendChild(renderer.domElement);

    const bugGeometry = new THREE.SphereGeometry(0.5, 32, 32);
    const bugMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    const bugs: THREE.Mesh[] = [];
    for (let i = 0; i < 10; i++) {
      const bug = new THREE.Mesh(bugGeometry, bugMaterial);
      bug.position.set(Math.random() * 10 - 5, Math.random() * 10 - 5, Math.random() * 10 - 5);
      bugs.push(bug);
      scene.add(bug);
    }

    camera.position.z = 5;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const onMouseMove = (event: MouseEvent) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObjects(bugs);
      for (let i = 0; i < bugs.length; i++) {
        const bug = bugs[i];
        if (intersects.find(intersect => intersect.object === bug)) {
          gsap.to(bug.position, { x: bug.position.x + (Math.random() - 0.5) * 2, y: bug.position.y + (Math.random() - 0.5) * 2, z: bug.position.z + (Math.random() - 0.5) * 2, duration: 1 });
        } else {
          bug.position.x += (Math.random() - 0.5) * 0.01;
          bug.position.y += (Math.random() - 0.5) * 0.01;
        }
      }

      renderer.render(scene, camera);
    };

    window.addEventListener('mousemove', onMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      mount.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0"></div>;
};

export default Bugs;
