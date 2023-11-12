import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  HeaderLayout,
  Intro,
  ParentTemplate,
} from '../../components';
import { selectUser, useGetProductsQuery } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

function HomePage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);

  const { data: products, isLoading } = useGetProductsQuery();

  /** 3 products */
  const threeProducts = products && [...products]?.slice(0, 3);

  const logOutHandler = () => {
    logOut(dispatch);
  };

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
