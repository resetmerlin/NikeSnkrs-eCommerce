import { selectUser, useGetProductsQuery } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

export const useHomePage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);

  const { data: products, isLoading } = useGetProductsQuery();

  /** 3 products */
  const threeProducts = products && [...products]?.slice(0, 3);

  const logOutHandler = () => {
    logOut(dispatch);
  };

  return [userInfo, threeProducts, isLoading, logOutHandler];
};
