import { AtomicButton, SvgDownArrow } from '../../../atoms';

type IProps = {
  goNextProductPage: () => void;
};

/**
 * Responsible for making down button molecules
 *
 * - Responsible for creating functionalities by using atoms
 * - Responsible for creating functionalities via pure functions props
 */
export default function DownButton({ goNextProductPage }: IProps) {
  return (
    <AtomicButton shape="rect" size="l" onClick={goNextProductPage}>
      <SvgDownArrow size="2.5rem" color="white" />
    </AtomicButton>
  );
}
