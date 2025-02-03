import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const AnimatedScene = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mountNode = mountRef.current;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountNode.appendChild(renderer.domElement);

    // Add Light
    const light = new THREE.PointLight(0xffffff, 1.2);
    light.position.set(10, 10, 10);
    scene.add(light);

    // Create Cloud Shapes
    const cloudGeometry = new THREE.SphereGeometry(1, 32, 32);
    const cloudMaterial = new THREE.MeshStandardMaterial({
      color: 0x4df2d6,
      emissive: 0x4df2d6,
      emissiveIntensity: 0.7,
      transparent: true,
      opacity: 0.9,
    });

    const googleCloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
    const awsCloud = new THREE.Mesh(cloudGeometry, cloudMaterial);
    const azureCloud = new THREE.Mesh(cloudGeometry, cloudMaterial);

    googleCloud.position.set(-3, 1, 0);
    awsCloud.position.set(0, -1, 0);
    azureCloud.position.set(3, 1, 0);

    scene.add(googleCloud, awsCloud, azureCloud);

    // Glowing Lines (Data Connections)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-3, 1, 0),
      new THREE.Vector3(0, -1, 0),
      new THREE.Vector3(3, 1, 0),
    ]);

    const lineGeometry = new THREE.TubeGeometry(curve, 50, 0.05, 8, false);
    const lineMaterial = new THREE.MeshBasicMaterial({
      color: 0xffa500,
      transparent: true,
      opacity: 0.8,
    });

    const glowingLine = new THREE.Mesh(lineGeometry, lineMaterial);
    scene.add(glowingLine);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate clouds for animation
      googleCloud.rotation.y += 0.01;
      awsCloud.rotation.y += 0.01;
      azureCloud.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    camera.position.z = 8;
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;

    animate();

    // Cleanup
    return () => {
      mountNode.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default AnimatedScene;
