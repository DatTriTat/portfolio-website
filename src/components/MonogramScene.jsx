import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Same outline as MONOGRAM_PATH in Monogram.jsx, in y-up coordinates.
const buildMonogramGeometry = () => {
  const t = new THREE.Shape();
  t.moveTo(0, 101);
  t.lineTo(102, 101);
  t.lineTo(102, 87);
  t.lineTo(88, 87);
  t.lineTo(88, 0);
  t.lineTo(74, 0);
  t.lineTo(74, 87);
  t.lineTo(0, 87);
  t.closePath();

  const d = new THREE.Shape();
  d.moveTo(0, 0);
  d.lineTo(0, 78);
  d.lineTo(26, 78);
  d.absarc(26, 39, 39, Math.PI / 2, -Math.PI / 2, true);
  d.lineTo(0, 0);

  const counter = new THREE.Path();
  counter.moveTo(14, 14);
  counter.lineTo(14, 64);
  counter.lineTo(26, 64);
  counter.absarc(26, 39, 25, Math.PI / 2, -Math.PI / 2, true);
  counter.lineTo(14, 14);
  d.holes.push(counter);

  const geometry = new THREE.ExtrudeGeometry([t, d], {
    depth: 18,
    bevelEnabled: true,
    bevelThickness: 3,
    bevelSize: 1.6,
    bevelSegments: 10,
    curveSegments: 64,
  });
  geometry.center();
  geometry.computeVertexNormals();
  return geometry;
};

// A small virtual photo studio, baked once into an environment map so the
// chrome has something to reflect: neutral white softboxes only.
const StudioEnvironment = () => {
  const { gl, scene } = useThree();

  useEffect(() => {
    const studio = new THREE.Scene();
    const disposables = [];

    // Gradient dome: lighter slate overhead, deep navy below, so even the
    // flat faces of the chrome pick up a soft horizon instead of black.
    const domeGeometry = new THREE.SphereGeometry(40, 32, 16);
    const top = new THREE.Color("#8a8f98");
    const bottom = new THREE.Color("#16181d");
    const pos = domeGeometry.attributes.position;
    const colors = new Float32Array(pos.count * 3);
    const c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      const k = THREE.MathUtils.smoothstep(pos.getY(i) / 40, -0.6, 0.8);
      c.copy(bottom).lerp(top, k).toArray(colors, i * 3);
    }
    domeGeometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    const domeMaterial = new THREE.MeshBasicMaterial({ vertexColors: true, side: THREE.BackSide, toneMapped: false });
    studio.add(new THREE.Mesh(domeGeometry, domeMaterial));
    disposables.push(domeGeometry, domeMaterial);

    const panels = [
      // Strips behind the camera: these sweep across the front faces as the mark turns.
      { color: "#ffffff", intensity: 3.2, size: [30, 1.6], position: [0, 1.4, 10] },
      { color: "#ffffff", intensity: 1.6, size: [30, 0.6], position: [0, -2.4, 10] },
      { color: "#ffffff", intensity: 3.2, size: [10, 3], position: [0, 7, 6] },
      { color: "#ffffff", intensity: 2.4, size: [1.4, 14], position: [-8, 0, 4] },
      { color: "#ffffff", intensity: 1.6, size: [1, 14], position: [8, 1, 3] },
      { color: "#ffffff", intensity: 1.6, size: [8, 3], position: [-6, -4, 7] },
      { color: "#ffffff", intensity: 1.2, size: [7, 5], position: [7, -3, -6] },
      { color: "#ffffff", intensity: 0.8, size: [16, 6], position: [0, 3, -10] },
    ];

    for (const p of panels) {
      const geometry = new THREE.PlaneGeometry(...p.size);
      const material = new THREE.MeshBasicMaterial({
        color: new THREE.Color(p.color).multiplyScalar(p.intensity),
        side: THREE.DoubleSide,
        toneMapped: false,
      });
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(...p.position);
      mesh.lookAt(0, 0, 0);
      studio.add(mesh);
      disposables.push(geometry, material);
    }

    const pmrem = new THREE.PMREMGenerator(gl);
    const target = pmrem.fromScene(studio, 0.03);
    scene.environment = target.texture;

    return () => {
      scene.environment = null;
      target.dispose();
      pmrem.dispose();
      disposables.forEach((d) => d.dispose());
    };
  }, [gl, scene]);

  return null;
};

const Monogram3D = ({ reducedMotion, pointer }) => {
  const group = useRef();
  const geometry = useMemo(buildMonogramGeometry, []);
  const start = useRef(null);

  useEffect(() => () => geometry.dispose(), [geometry]);

  useFrame((state, delta) => {
    const g = group.current;
    if (!g) return;
    const t = state.clock.elapsedTime;
    if (start.current === null) start.current = t;

    // Page-load moment: the mark swings in from behind and settles.
    const p = reducedMotion ? 1 : Math.min(Math.max((t - start.current - 0.15) / 1.6, 0), 1);
    const eased = 1 - Math.pow(1 - p, 3);
    const intro = (1 - eased) * -Math.PI * 1.15;

    const idle = reducedMotion ? 0 : Math.sin(t * 0.45) * 0.22;
    const targetY = pointer.current.x * 0.5 + idle;
    const targetX = pointer.current.y * 0.32;

    g.rotation.y = THREE.MathUtils.damp(g.rotation.y, targetY, 3.5, delta);
    g.rotation.x = THREE.MathUtils.damp(g.rotation.x, targetX, 3.5, delta);
    g.rotation.z = reducedMotion ? 0 : Math.sin(t * 0.5) * 0.025;
    g.position.y = reducedMotion ? 0 : Math.sin(t * 0.9) * 0.07;

    const s = 0.024 * (0.82 + 0.18 * eased);
    g.scale.setScalar(s);
    g.children[0].rotation.y = intro;
  });

  return (
    <group ref={group} scale={0.024}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#e6eaf1"
          metalness={1}
          roughness={0.2}
          clearcoat={1}
          clearcoatRoughness={0.08}
          envMapIntensity={1.35}
        />
      </mesh>
    </group>
  );
};

const MonogramScene = ({ active, reducedMotion }) => {
  // Normalized pointer position over the whole window, not just the canvas.
  const pointer = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const onMove = (e) => {
      pointer.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      pointer.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <Canvas
      className="hero-canvas"
      frameloop={active ? "always" : "never"}
      dpr={[1, 2]}
      camera={{ position: [0, 0, 6], fov: 35 }}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      aria-hidden="true"
    >
      <StudioEnvironment />
      <Monogram3D reducedMotion={reducedMotion} pointer={pointer} />
    </Canvas>
  );
};

export default MonogramScene;
