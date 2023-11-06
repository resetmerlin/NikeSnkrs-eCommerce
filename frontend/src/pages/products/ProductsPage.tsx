import {
  AtomicTitle,
  ChildTemplate,
  ParentTemplate,
} from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ItemLists } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { selectUser } from '../../features/user/userInfoSlice';
import { logOut } from '../../hooks';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const { data: products } = useGetProductsQuery();

  const logOutHandler = () => {
    logOut(dispatch);
  };

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="topLeft" size="s">
          <AtomicTitle size="xs">Latest Products</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="bottomCenter" size="s">
          <ItemLists products={products} />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
