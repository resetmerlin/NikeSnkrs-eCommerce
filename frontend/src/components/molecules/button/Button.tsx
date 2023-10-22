import AtomicButton from '../../atoms/button/AtomicButton';
import SvgCartAlt from '../../atoms/icons/SvgCartAlt';
import SvgLogIn from '../../atoms/icons/SvgLogIn';

export function CartButton() {
  return (
    <AtomicButton shape="round" color="secondary">
      <SvgCartAlt size="1.8rem" color="black" />
    </AtomicButton>
  );
}
export function LoginButton() {
  return (
    <AtomicButton shape="round" color="primary">
      <SvgLogIn size="1.8rem" color="white" />
    </AtomicButton>
  );
}
