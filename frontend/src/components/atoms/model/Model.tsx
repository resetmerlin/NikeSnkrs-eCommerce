import { useGLTF } from '@react-three/drei';

export default function Model({ model, scale }) {
  const dracoUrl = '../decoder/';
  const { scene } = useGLTF(`../3d/${model}/${model}-processed.gltf`, dracoUrl);

  return <primitive object={scene} scale={scale} />;
}
