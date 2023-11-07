import { useGLTF } from '@react-three/drei';

type IProps = {
  model: string;
};

export default function Model({ model }: IProps) {
  const dracoUrl = '../decoder/';
  const { scene } = useGLTF(`../3d/${model}/${model}-processed.gltf`, dracoUrl);

  return <primitive object={scene} />;
}
