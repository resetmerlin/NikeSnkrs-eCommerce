import {
  CardLists,
  CardListsSkeleton,
  ChildTemplate,
  Intro,
  ParentTemplate,
} from '../../components';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
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
    <LayoutHeader userInfo={userInfo} logOut={logOutHandler}>
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
    </LayoutHeader>
  );
}

export default HomePage;
