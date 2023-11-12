import {
  AtomicTitle,
  ChildTemplate,
  HeaderLayout,
  ItemLists,
  ParentTemplate,
} from '../../components';
import { selectUser, useGetProductsQuery } from '../../features';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector(selectUser);
  const { data: products } = useGetProductsQuery();

  const logOutHandler = () => {
    logOut(dispatch);
  };

  return (
    <HeaderLayout userInfo={userInfo} logOut={logOutHandler}>
      <ParentTemplate size="s">
        <ChildTemplate position="topLeft" size="s">
          <AtomicTitle size="xs">Latest Products</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="bottomCenter" size="s">
          <ItemLists products={products} />
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}
