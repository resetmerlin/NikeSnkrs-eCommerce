import { useCallback, useMemo } from 'react';
import { selectUser, useGetProductsQuery } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

/**
 * ### Responsible for Conducting Business Logic of Home Page
 *
 * - Responsible for fetching products and slice into 3 items
 * - Responsible for handling a feature; logout
 */
export const useHomePage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);

  const { data: products, isLoading } = useGetProductsQuery();

  // 3 products
  const threeProducts = useMemo(
    () => products && [...products]?.slice(0, 3),
    [products]
  );

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [dispatch, logOut]);

  return [userInfo, threeProducts, isLoading, logOutHandler];
};
