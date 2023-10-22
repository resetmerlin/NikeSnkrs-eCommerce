import { AtomicTitle } from '../../components/atoms';
import { Layout } from '../../components/layouts';
import { ItemLists } from '../../components/organisms';
import { ChildCenter, ChildTopLeft } from '../../components/template/Child';
import Parent from '../../components/template/Parent';

export default function ProductsPage() {
  return (
    <Layout>
      <Parent>
        <ChildTopLeft>
          <AtomicTitle size="xs">Latest Products</AtomicTitle>
        </ChildTopLeft>
        <ChildCenter>
          <ItemLists />
        </ChildCenter>
      </Parent>
    </Layout>
  );
}
