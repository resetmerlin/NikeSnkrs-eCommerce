import { useCallback } from 'react';
import { selectUser, useGetProductsQuery } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

export const useHomePage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);

  const { data: products, isLoading } = useGetProductsQuery();

  /** 3 products */
  const threeProducts = products && [...products]?.slice(0, 3);

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [dispatch, logOut]);

  return [userInfo, threeProducts, isLoading, logOutHandler];
};
