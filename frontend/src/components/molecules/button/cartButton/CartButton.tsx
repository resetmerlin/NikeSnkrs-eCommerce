import { AtomicButton, SvgCartAlt } from '../../../atoms';

/**
 * Responsible for making cart button molecules
 *
 * - Responsible for creating functionalities by using atoms
 */
export default function CartButton() {
  return (
    <AtomicButton shape="round" color="secondary" size="s">
      <SvgCartAlt size="1.8rem" color="black" />
    </AtomicButton>
  );
}
