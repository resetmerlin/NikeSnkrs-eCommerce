import Card from '../../components/molecules/card/Card';
import {
  IntroLeft,
  IntroMiddle,
  IntroRight,
} from '../../components/molecules/intro/Intro';
import CardLists from '../../components/organisms/card/CardLists';

function HomePage() {
  return (
    <>
      <CardLists />
      <IntroLeft />
      <IntroMiddle />
      <IntroRight />
    </>
  );
}

export default HomePage;
