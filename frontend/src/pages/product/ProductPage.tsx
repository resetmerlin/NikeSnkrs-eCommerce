import {
  AtomicItemImage,
  ChildTemplate,
  HeaderLayout,
  ItemInfoEvents,
  ItemNav,
  ParentTemplate,
} from '../../components';
import { useProductPage } from './ProductPageHook';

export type ItemColRef = HTMLAnchorElement;

export default function ProductPage() {
  const [
    addToCart,
    goNextProductPage,
    columnRef,
    logOutHandler,
    goPrevPage,
    userInfo,
    product,
    products,
    productId,
  ] = useProductPage();

  return (
    <HeaderLayout logOut={logOutHandler} userInfo={userInfo}>
      <ParentTemplate size="full">
        <ChildTemplate position="left" size="full">
          <ItemInfoEvents
            product={product}
            goPrevPage={goPrevPage}
            addToCart={addToCart}
          />
        </ChildTemplate>
        <ChildTemplate position="centerRight" size="full">
          {/* <Object model={id?.id} /> */}
          <AtomicItemImage path="long" size="xl" productId={product?._id} />
        </ChildTemplate>
        <ChildTemplate position="right" size="full">
          <ItemNav
            products={products}
            productId={productId}
            goNextProductPage={goNextProductPage}
            ref={columnRef}
          />
        </ChildTemplate>
      </ParentTemplate>
    </HeaderLayout>
  );
}
