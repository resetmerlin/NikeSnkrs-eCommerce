import {
  AtomicTitle,
  ChildTemplate,
  ParentTemplate,
} from '../../components/atoms';
import { Layout } from '../../components/layouts';
import { ItemLists } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';

export default function ProductsPage() {
  const { data } = useGetProductsQuery();

  return (
    <Layout>
      <ParentTemplate size="s">
        <ChildTemplate position="topLeft">
          <AtomicTitle size="xs">Latest Products</AtomicTitle>
        </ChildTemplate>
        <ChildTemplate position="bottomCenter">
          <ItemLists products={data} />
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}
