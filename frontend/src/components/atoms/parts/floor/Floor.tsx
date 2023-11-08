/**
 * Responsible for making Basic Atoms floor for 3d
 *
 */
export default function Floor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]} receiveShadow>
      <planeGeometry attach="geometry" args={[100, 100]} />
      <shadowMaterial attach="material" opacity={0.5} />
    </mesh>
  );
}
