import { selectUser, useGetProductsQuery } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

export const useProductsPage = () => {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const { data: products } = useGetProductsQuery();

  const logOutHandler = () => {
    logOut(dispatch);
  };

  return [userInfo, products, logOutHandler];
};
