import { useCallback } from 'react';
import { selectUser, useGetProductsQuery } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

export const useProductsPage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const { data: products } = useGetProductsQuery();

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [logOut, dispatch]);

  return [userInfo, products, logOutHandler];
};
