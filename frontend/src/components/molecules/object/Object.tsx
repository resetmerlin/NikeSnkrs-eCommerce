import { Suspense } from 'react';
import { Canvas, Floor, Fog, Light, Model } from '../../atoms';
import { OrbitControls } from '@react-three/drei';

type IProps = {
  model: string;
};

export default function Object({ model }: IProps) {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Light />
        <Fog args={['black', 30]} />
        <Model model={model} />

        <Floor />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
}
