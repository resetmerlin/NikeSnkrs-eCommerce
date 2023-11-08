import { useGLTF } from '@react-three/drei';

type IProps = {
  model: string;
};
/**
 * Responsible for making Basic 3d model
 *
 * - Responsible for change the 3d model based on the props
 */
export default function Model({ model }: IProps) {
  const dracoUrl = '../decoder/';
  const { scene } = useGLTF(`../3d/${model}/${model}-processed.gltf`, dracoUrl);

  return <primitive object={scene} />;
}
