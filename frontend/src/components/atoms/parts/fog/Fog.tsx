import { ColorRepresentation } from 'three';

export default function Fog({
  args = ['black', 0, 0] as [ColorRepresentation, number?, number?],
  ...props
}) {
  return <fog {...props} attach="fog" args={args} />;
}
