import { AtomicTitle } from '../../../atoms';
import './IntroBackground.scss';

/**
 * Responsible for making intro background molecules
 *
 * - Responsible for creating functionalities by using atoms
 */
export default function IntroBackground() {
  return (
    <div className="intro-background">
      <AtomicTitle size="max" color="secondary" strength="500">
        NIKE
      </AtomicTitle>
    </div>
  );
}
