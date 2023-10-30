import { useNavigate, useParams } from 'react-router-dom';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { ItemInfoEvents, ItemNav } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { IProduct } from '../../types/dto';
import React from 'react';

export default function ProductPage() {
  const navigate = useNavigate();
  const { id: paramId } = useParams();
  const { data: products } = useGetProductsQuery();

  const goPrevPage = () => {
    navigate(-1);
  };

  /** Current product */
  const product =
    products &&
    [...products].filter(
      (product): product is IProduct => product?._id == paramId
    )[0];

  /** Current index in total products */
  const currentIndex = product ? products?.indexOf(product) : -1;

  /** Go next product */
  const goNextProductPage = () => {
    if (products) {
      // if reaches last index
      if (currentIndex + 1 !== products?.length) {
        navigate(`${products[currentIndex + 1]?._id}`);
      } else {
        navigate(`${products[0]?._id}`);
      }
    }
  };

  /** Add selected quantity and go cart page */
  const addToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const qty = e.currentTarget?.productSelect.value;

    if (product) {
      if (product.countInStock === 0) {
        alert('Out of Stock');
      } else {
        navigate(`/cart/${product?._id}?qty=${qty}`);
      }
    }
  };

  return (
    <LayoutHeader>
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
        </ChildTemplate>
        <ChildTemplate position="right" size="full">
          <ItemNav
            products={products}
            productId={paramId}
            goNextProductPage={goNextProductPage}
          />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
