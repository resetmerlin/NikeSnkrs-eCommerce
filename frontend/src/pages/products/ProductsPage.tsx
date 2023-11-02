import {
  AtomicTitle,
  ChildTemplate,
  ParentTemplate,
} from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { ItemLists } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { userInfoDeleted } from '../../features/user/userReducers';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { data } = useGetProductsQuery();

  const userInfo = useAppSelector((state) => state.userInfo);

  const deleteUserInfo = () => {
    dispatch(userInfoDeleted());
  };

  return (
    <LayoutHeader userInfo={userInfo} deleteUserInfo={deleteUserInfo}>
      <ParentTemplate size="s">
        <ChildTemplate position="topLeft" size="s">
          <AtomicTitle size="xs">Latest Products</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="bottomCenter" size="s">
          <ItemLists products={data} />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
