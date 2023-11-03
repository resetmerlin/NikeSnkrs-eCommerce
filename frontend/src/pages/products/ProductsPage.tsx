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
import { useAppSelector } from '../../hooks/hooks';

export default function ProductsPage() {
  const { data } = useGetProductsQuery();

  const userInfo = useAppSelector(selectUser);

  return (
    <LayoutHeader userInfo={userInfo} logOut={logOut}>
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
