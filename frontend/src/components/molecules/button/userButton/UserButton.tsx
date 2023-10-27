import { AtomicButton, AtomicSubtitle, SvgUserCircle } from '../../../atoms';

export default function UserButton() {
  return (
    <AtomicButton shape="rect" size="l">
      <SvgUserCircle size="6rem" color="white" />
      <AtomicSubtitle size="m" color="tertiary" strength="600">
        User Name
      </AtomicSubtitle>
    </AtomicButton>
  );
}
