import { Canvas, Floor, Fog, Light, Model } from '../../atoms';
import { OrbitControls } from '@react-three/drei';

export default function Object({ model }) {
  return (
    <Canvas>
      <Light />
      <Fog args={['black', 30]} />
      <Model model={model} scale={6} />

      <Floor />
      <OrbitControls />
    </Canvas>
  );
}
