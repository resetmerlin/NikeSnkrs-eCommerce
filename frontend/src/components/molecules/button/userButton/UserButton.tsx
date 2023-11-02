import { AtomicButton, SvgUserCircle } from '../../../atoms';

export default function UserButton() {
  return (
    <AtomicButton shape="round" color="primary" size="s">
      <SvgUserCircle size="1.8rem" color="white" />
    </AtomicButton>
  );
}
