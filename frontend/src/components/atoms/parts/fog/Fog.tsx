export default function Fog({ args = ['black', 0, 0], ...props }) {
  return <fog {...props} attach="fog" args={args} />;
}
