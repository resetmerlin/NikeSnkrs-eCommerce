/**
 * Responsible for making Basic Atoms light for 3d
 *
 */
export default function Light({ ...props }) {
  return (
    <>
      <ambientLight intensity={1} />
      <directionalLight
        {...props}
        position={[-5, 1, 1.3]}
        intensity={5}
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-far={50}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
      />
    </>
  );
}
