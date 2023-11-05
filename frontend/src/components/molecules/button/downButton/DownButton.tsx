import { AtomicButton, SvgDownArrow } from '../../../atoms';

export default function DownButton({ goNextProductPage }) {
  return (
    <AtomicButton shape="rect" size="l" onClick={goNextProductPage}>
      <SvgDownArrow size="2.5rem" color="white" />
    </AtomicButton>
  );
}
