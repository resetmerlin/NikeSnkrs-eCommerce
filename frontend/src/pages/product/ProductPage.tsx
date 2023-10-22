import { AtomicSubtitle, AtomicTitle } from '../../components/atoms';
import { Layout } from '../../components/layouts';
import ItemInfo from '../../components/molecules/itemInfo/ItemInfo';
import Parent from '../../components/template/Parent';

export default function ProductPage() {
  return (
    <Layout>
      <Parent>
        <ItemInfo />
      </Parent>
    </Layout>
  );
}
