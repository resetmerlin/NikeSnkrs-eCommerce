import { AtomicButton, SvgLogIn } from '../../../atoms';

/**
 * Responsible for making login button molecules
 *
 * - Responsible for creating functionalities by using atoms
 */
export default function LoginButton() {
  return (
    <AtomicButton shape="round" color="primary" size="s">
      <SvgLogIn size="1.8rem" color="white" />
    </AtomicButton>
  );
}
