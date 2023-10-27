import { PropsWithChildren } from 'react';
import { Canvas as Container } from '@react-three/fiber';

export default function Canvas({ children }: PropsWithChildren) {
  return (
    <Container
      colormangement="true"
      shadowmap="true "
      performance={{ debounce: 200 }}
      camera={{ position: [-5, 4, 4], fov: 60 }}
    >
      {children}
    </Container>
  );
}
