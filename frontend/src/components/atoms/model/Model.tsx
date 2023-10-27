import { useGLTF } from '@react-three/drei';

export default function Model({ model, scale }) {
  const { scene } = useGLTF(`../3d/${model}/${model}-processed.gltf`);

  return <primitive object={scene} scale={scale} />;
}
