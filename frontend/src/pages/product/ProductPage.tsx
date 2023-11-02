import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { ItemInfoEvents, ItemNav } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
import { IProduct, IUser } from '../../types/dto';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { userInfoDeleted } from '../../features/user/userReducers';

export type ItemColRef = HTMLAnchorElement;

export default function ProductPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const userInfo: IUser[] = useAppSelector((state) => state.userInfo);
  const { id: paramId } = useParams();
  const { data: products } = useGetProductsQuery();
  const columnRef = useRef<ItemColRef | null>(null);
  const [isObserving, setIsObserving] = useState(false);

  const goPrevPage = () => {
    navigate(-1);
  };

  const deleteUserInfo = () => {
    dispatch(userInfoDeleted());
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
    // if reaches last index
    if (currentIndex + 1 !== products?.length && products) {
      navigate(`${products[currentIndex + 1]?._id}`);
    } else if (products) {
      navigate(`${products[0]?._id}`);
    }
  };

  /** Add selected quantity and go cart page */
  const addToCart = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const qty = e.currentTarget?.productSelect.value;

    if (product?.countInStock === 0) {
      alert('Out of Stock');
    } else {
      navigate(`/cart/${product?._id}?qty=${qty}`);
    }
  };

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
    <LayoutHeader deleteUserInfo={deleteUserInfo} userInfo={userInfo}>
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
            ref={columnRef}
          />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
