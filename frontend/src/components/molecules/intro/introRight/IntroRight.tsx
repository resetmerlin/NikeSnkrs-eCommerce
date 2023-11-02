import { AtomicSubtitle, AtomicTitle } from '../../../atoms';

export default function IntroRight() {
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
