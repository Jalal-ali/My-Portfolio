import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const Animation = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  let camera: THREE.PerspectiveCamera,
    scene: THREE.Scene,
    renderer: THREE.WebGLRenderer;
  const stars: THREE.Mesh[] = [];

  useEffect(() => {
    init();
    addSphere();
    animate();

    window.addEventListener("resize", onWindowResize, false);

    // Cleanup function to prevent memory leaks
    return () => {
      window.removeEventListener("resize", onWindowResize);
      renderer.dispose();
      if (mountRef.current) {
        mountRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  const init = () => {
    camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 5;

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Append renderer to the DOM
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
  };

  const addSphere = () => {
    // Reduce the number of stars by limiting the loop range
    for (let z = -1000; z < 1000; z += 20) { // Increased the step to reduce the number of stars
      const colorValue = 0xffffff; // Set the color to white

      const geometry = new THREE.SphereGeometry(0.5, 32, 32);
      const material = new THREE.MeshBasicMaterial({ color: colorValue });

      const sphere = new THREE.Mesh(geometry, material);
      const sphere1 = new THREE.Mesh(geometry, material);

      // Set random positions for the stars
      sphere.position.set(
        Math.random() * 1000 - 500,
        Math.random() * 1000 - 500,
        z
      );
      sphere1.position.set(
        Math.random() * 1000 - 500,
        Math.random() * 1000 - 500,
        z
      );

      sphere.scale.set(2, 2, 2);
      sphere1.scale.set(2, 2, 2);

      scene.add(sphere);
      scene.add(sphere1);

      stars.push(sphere, sphere1);
    }
  };

  const animateStars = () => {
    for (let i = 0; i < stars.length; i++) {
      const star = stars[i]; // star is now of type THREE.Mesh
      // Slow down the movement of the stars
      star.position.z += i / 100; // Increase divisor for slower motion

      if (star.position.z > 1000) star.position.z -= 2000;
    }
  };

  const animate = () => {
    requestAnimationFrame(animate);
    animateStars();
    renderer.render(scene, camera);
  };

  const onWindowResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };

  return (
    <>
      {/* Three.js Animation */}
      <div
        ref={mountRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          overflow: "hidden",
          zIndex: -1, // Ensure it's in the background
        }}
      />

      {/* Other content */}
      <div
        style={{
          position: "relative",
          zIndex: 1, // Make sure content is above the animation
          color: "white",
        }}
      >
        {/* Add any content you want to display over the animation */}
      </div>
    </>
  );
};

export default Animation;
