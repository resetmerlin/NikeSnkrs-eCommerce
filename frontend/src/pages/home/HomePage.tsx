import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import {
  IntroCenter,
  IntroLeft,
  IntroRight,
} from '../../components/molecules/intro';
import { CardLists, Intro } from '../../components/organisms';
import CardListsSkeleton from '../../components/organisms/cardLists/CardListsSkeleton';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { userInfoDeleted } from '../../features/user/userReducers';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

function HomePage() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetProductsQuery();
  const cardProducts = data && [...data]?.slice(0, 3);
  const userInfo = useAppSelector((state) => state.userInfo);

  const deleteUserInfo = () => {
    dispatch(userInfoDeleted());
  };
  return (
    <LayoutHeader userInfo={userInfo} deleteUserInfo={deleteUserInfo}>
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
