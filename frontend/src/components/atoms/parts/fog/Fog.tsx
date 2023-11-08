import { ColorRepresentation } from 'three';

/**
 * Responsible for making Basic Atoms fog for 3d
 *
 */
export default function Fog({
  args = ['black', 0, 0] as [ColorRepresentation, number?, number?],
  ...props
}) {
  return <fog {...props} attach="fog" args={args} />;
}
