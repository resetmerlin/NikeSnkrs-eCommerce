import React, { useEffect, useState } from 'react';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { ItemColRef } from './ProductPage';
import { selectUser, useGetProductsQuery } from '../../features';
import { IProduct, IUser } from '../../types';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

/** Product Observing hook */
export const useProductObserver = (
  columnRef: React.RefObject<ItemColRef>,
  goNextProductPage: () => void
) => {
  const [isObserving, setIsObserving] = useState(false);

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
};

/** Get Products related hook */
export const useFetchProducts = (
  productId: string | undefined
): [IProduct | undefined, IProduct[] | undefined, number] => {
  const { data: products } = useGetProductsQuery();

  /** Current product */
  const product =
    products &&
    [...products].filter(
      (product): product is IProduct => product?._id == productId
    )[0];

  /** Current product index  */
  const currentIndex = product ? products?.indexOf(product) : -1;

  return [product, products, currentIndex];
};

/** Go next product page hook */
export const useGoNextPage = (
  navigate: NavigateFunction,
  currentIndex: number,
  products: IProduct[] | undefined
): void => {
  if (currentIndex + 1 !== products?.length && products) {
    navigate(`${products[currentIndex + 1]?._id}`);
  }
  // Go first if reaches last index
  else if (products) {
    navigate(`${products[0]?._id}`);
  }
};

/** go cart page with qty hook */
export const useAddToCart = (
  e: React.FormEvent<HTMLFormElement>,
  navigate: NavigateFunction,
  product: IProduct | undefined
) => {
  e.preventDefault();
  const qty = e.currentTarget?.productSelect.value;

  if (product?.countInStock === 0) {
    alert('Out of Stock');
  } else {
    navigate(`/cart/${product?._id}?qty=${qty}`);
  }
};

/** User action hook */
export const useUserActionHandler = (): [
  userInfo: IUser,
  logOutHandler: () => void,
  goPrevPage: () => void,
] => {
  const userInfo: IUser = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const logOutHandler = () => {
    logOut(dispatch);
  };

  const goPrevPage = () => {
    navigate(-1);
  };

  return [userInfo, logOutHandler, goPrevPage];
};
