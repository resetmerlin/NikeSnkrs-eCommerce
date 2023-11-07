import { AtomicButton, SvgDownArrow } from '../../../atoms';

type IProps = {
  goNextProductPage: () => void;
};

export default function DownButton({ goNextProductPage }: IProps) {
  return (
    <AtomicButton shape="rect" size="l" onClick={goNextProductPage}>
      <SvgDownArrow size="2.5rem" color="white" />
    </AtomicButton>
  );
}
