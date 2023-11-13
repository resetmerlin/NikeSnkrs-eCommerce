import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemColRef } from './ProductPage';
import { selectUser, useGetProductsQuery } from '../../features';
import { IProduct, IUser } from '../../types';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

/** Product Observing hook */
const useProductObserver = (
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
const useFetchProducts = (
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

export const useProductPage = (): [
  addToCart: (e: React.FormEvent<HTMLFormElement>) => void,
  goNextProductPage: () => void,
  columnRef: React.RefObject<ItemColRef>,
  logOutHandler: () => void,
  goPrevPage: () => void,
  userInfo: IUser,
  product: IProduct | undefined,
  products: IProduct[] | undefined,
  productId: string | undefined,
] => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id: productId } = useParams();
  const columnRef = useRef<ItemColRef | null>(null);

  const userInfo: IUser = useAppSelector(selectUser);
  const [product, products, currentIndex] = useFetchProducts(productId);

  const goPrevPage = () => {
    navigate(-1);
  };

  const logOutHandler = () => {
    logOut(dispatch);
  };

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

  /** Observer Product */
  useProductObserver(columnRef, goNextProductPage);

  return [
    addToCart,
    goNextProductPage,
    columnRef,
    logOutHandler,
    goPrevPage,
    userInfo,
    product,
    products,
    productId,
  ];
};
