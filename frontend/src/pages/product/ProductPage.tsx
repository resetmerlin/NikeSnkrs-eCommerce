import React, { useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AtomicItemImage,
  ChildTemplate,
  HeaderLayout,
  ItemInfoEvents,
  ItemNav,
  ParentTemplate,
} from '../../components';
import {
  useAddToCart,
  useFetchProducts,
  useGoNextPage,
  useProductObserver,
  useUserActionHandler,
} from './ProductPageHook';

export type ItemColRef = HTMLAnchorElement;

export default function ProductPage() {
  const navigate = useNavigate();

  const { id: productId } = useParams();
  const [product, products, currentIndex] = useFetchProducts(productId);

  const [userInfo, logOutHandler, goPrevPage] = useUserActionHandler();

  /** Go next product page */
  const goNextProductPage = () =>
    useGoNextPage(navigate, currentIndex, products);

  /** go cart page with quantity */
  const addToCart = (e: React.FormEvent<HTMLFormElement>) =>
    useAddToCart(e, navigate, product);

  const columnRef = useRef<ItemColRef | null>(null);

  /** Observer Product */
  useProductObserver(columnRef, goNextProductPage);

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
