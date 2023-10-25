import { Layout } from '../../components/layouts';
import ItemInfo from '../../components/molecules/itemInfo/ItemInfo';
import { Template } from '../../components/template';

export default function ProductPage() {
  return (
    <Layout>
      <Template.Default>
        <ItemInfo />
      </Template.Default>
    </Layout>
  );
}
