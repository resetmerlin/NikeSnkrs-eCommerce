import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { CardLists, Intro } from '../../components/organisms';
import CardListsSkeleton from '../../components/organisms/cardLists/CardListsSkeleton';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { logOut } from '../../hooks';
import { selectUser } from '../../features/user/userInfoSlice';

function HomePage() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetProductsQuery();

  /** 3 products */
  const cardProducts = data && [...data]?.slice(0, 3);

  const userInfo = useAppSelector(selectUser);

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
            <CardLists products={cardProducts} />
          )}
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}

export default HomePage;
