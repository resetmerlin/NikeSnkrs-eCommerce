import { Layout } from '../../components/layouts';
import { CardLists } from '../../components/organisms';

import {
  IntroLeft,
  IntroMiddle,
  IntroRight,
} from '../../components/molecules/intro/Intro';
import Parent from '../../components/template/Parent';
import { ChildBig, ChildSmall } from '../../components/template/Child';

function HomePage() {
  return (
    <>
      <Layout>
        <Parent>
          <ChildBig>
            <IntroLeft />
            <IntroMiddle />
            <IntroRight />
          </ChildBig>
          <ChildSmall>
            <CardLists />
          </ChildSmall>
        </Parent>
      </Layout>
    </>
  );
}

export default HomePage;
