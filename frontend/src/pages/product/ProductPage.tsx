import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  AtomicItemImage,
  ChildTemplate,
  HeaderLayout,
  ItemInfoEvents,
  ItemNav,
  ParentTemplate,
} from '../../components';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';
import { selectUser, useGetProductsQuery } from '../../features';
import { IProduct, IUser } from '../../types';

export type ItemColRef = HTMLAnchorElement;

export default function ProductPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo: IUser = useAppSelector(selectUser);

  const { id: productId } = useParams();
  const { data: products } = useGetProductsQuery();
  const columnRef = useRef<ItemColRef | null>(null);
  const [isObserving, setIsObserving] = useState(false);

  const goPrevPage = () => {
    navigate(-1);
  };

  const logOutHandler = () => {
    logOut(dispatch);
  };

  /** Current product */
  const product =
    products &&
    [...products].filter(
      (product): product is IProduct => product?._id == productId
    )[0];

  /** Current product index  */
  const currentIndex = product ? products?.indexOf(product) : -1;

  /** Go next product page */
  const goNextProductPage = () => {
    if (currentIndex + 1 !== products?.length && products) {
      navigate(`${products[currentIndex + 1]?._id}`);
    }
    // Go first if reaches last index
    else if (products) {
      navigate(`${products[0]?._id}`);
    }
  };

  /** go cart page with quantity */
  const addToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const qty = e.currentTarget?.productSelect.value;

    if (product?.countInStock === 0) {
      alert('Out of Stock');
    } else {
      navigate(`/cart/${product?._id}?qty=${qty}`);
    }
  };

  /** Observe product column */
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && columnRef.current) {
        setIsObserving(entry.isIntersecting);
      }
    });
    if (columnRef.current) {
      observer.observe(columnRef.current);
    }

    return () => observer.disconnect();
  }, [goNextProductPage, isObserving]);

  /** Follow the observed column */
  useEffect(() => {
    if (isObserving && columnRef.current) {
      columnRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'start',
      });
    }
  }, [goNextProductPage, isObserving]);

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
