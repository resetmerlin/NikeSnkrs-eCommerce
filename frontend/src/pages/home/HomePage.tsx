import { useEffect } from 'react';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { CardLists, Intro } from '../../components/organisms';
import CardListsSkeleton from '../../components/organisms/cardLists/CardListsSkeleton';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import {
  userInfoAdded,
  userInfoDeleted,
} from '../../features/user/userReducers';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

function HomePage() {
  const dispatch = useAppDispatch();
  const { data, isLoading } = useGetProductsQuery();

  /** 3 products */
  const cardProducts = data && [...data]?.slice(0, 3);

  const userInfo = useAppSelector((state) => state.userInfo);

  const logOut = () => {
    dispatch(userInfoDeleted());
  };

  /**  Put into cart if no product in cart but in localStorage, */
  useEffect(() => {
    if (userInfo.length == 0 && localStorage.getItem('userInfo')) {
      const user = localStorage.getItem('userInfo');

      if (user) {
        const parsedItems = JSON.parse(user);
        console.log(parsedItems);
        if (parsedItems[0]) {
          dispatch(userInfoAdded(parsedItems[0]));
        }
      }
    }
  }, [userInfo]);

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOut}>
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
