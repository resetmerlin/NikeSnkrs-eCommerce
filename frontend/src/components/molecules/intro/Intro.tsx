import { AtomicSubtitle, AtomicTitle } from '../../atoms';
import './Intro.scss';

export function IntroLeft() {
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
        You will experience outstanding Nike Resell shop ever seen before
      </AtomicSubtitle>
    </div>
  );
}

export function IntroRight() {
  return (
    <div className="intro-right">
      <AtomicTitle size="xs" strength="500">
        NIKE ZOOM AIR
      </AtomicTitle>
      <AtomicTitle size="s" strength="600">
        $260
      </AtomicTitle>

      <AtomicSubtitle color="primary" size="m">
        GET IT NOW
      </AtomicSubtitle>
    </div>
  );
}

export function IntroMiddle() {
  return (
    <div className="intro-middle">
      <AtomicTitle size="max" color="secondary" strength="500">
        NIKE
      </AtomicTitle>
    </div>
  );
}
