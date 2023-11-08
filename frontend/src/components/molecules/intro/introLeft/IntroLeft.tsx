import { AtomicSubtitle, AtomicTitle } from '../../../atoms';
import './IntroLeft.scss';

/**
 * Responsible for making intro left  molecules
 *
 * - Responsible for creating functionalities by using atoms
 */
export default function IntroLeft() {
  return (
    <div className="intro-left">
      <AtomicTitle size="m" strength="600">
        JUST
      </AtomicTitle>
      <AtomicTitle size="m" strength="600">
        DO
      </AtomicTitle>
      <AtomicTitle size="m" strength="600">
        IT
      </AtomicTitle>

      <AtomicSubtitle color="secondary" size="m">
        You will experience outstanding <br /> Nike Resell shop ever <br /> seen
        before
      </AtomicSubtitle>
    </div>
  );
}
