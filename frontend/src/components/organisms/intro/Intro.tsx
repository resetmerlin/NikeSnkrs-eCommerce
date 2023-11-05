import './Intro.scss';
import {
  IntroBackground,
  IntroCenter,
  IntroLeft,
  IntroRight,
} from '../../molecules/intro';

export default function Intro() {
  return (
    <div className="intro">
      <IntroLeft />
      <IntroCenter />
      <IntroBackground />
      <IntroRight />
    </div>
  );
}
