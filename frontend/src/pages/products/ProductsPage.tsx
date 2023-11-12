import {
  AtomicTitle,
  ChildTemplate,
  HeaderLayout,
  ItemLists,
  ParentTemplate,
} from '../../components';
import { useProductsPage } from './ProductsPageHook';

export default function ProductsPage() {
  const [userInfo, products, logOutHandler] = useProductsPage();

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
