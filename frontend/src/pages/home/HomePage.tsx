import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  HeaderLayout,
  Intro,
  ParentTemplate,
} from '../../components';
import { useHomePage } from './HomePage.hook';

function HomePage() {
  const [userInfo, threeProducts, isLoading, logOutHandler] = useHomePage();

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="center" size="s">
          <Intro />
        </ChildTemplate>
        <ChildTemplate position="bottomRight" size="s">
          {isLoading ? (
            <CardListsSkeleton />
          ) : (
            <CardLists products={threeProducts} />
          )}
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}

export default HomePage;
