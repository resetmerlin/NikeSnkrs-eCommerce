import { AtomicButton, SvgCartAlt } from '../../../atoms';

export default function CartButton() {
  return (
    <AtomicButton shape="round" color="secondary" size="s">
      <SvgCartAlt size="1.8rem" color="black" />
    </AtomicButton>
  );
}
