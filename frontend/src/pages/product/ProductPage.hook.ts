import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemColRef } from './ProductPage';
import { selectUser, useGetProductsQuery } from '../../features';
import { IProduct, IUser } from '../../types';
import { logOut, useAppDispatch, useAppSelector } from '../../hooks';

/**
 * ### Responsible for Conducting Business Logic of Product Page
 *
 * - Manages navigation between products.
 * - Handles user actions like adding to cart and logging out.
 * - Observes the product column for UI updates.
 *
 *  @returns A tuple containing handlers and stateful values for the product page.
 */
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

  const goPrevPage = useCallback(() => {
    navigate(-1);
  }, [navigate]);

  const logOutHandler = useCallback(() => {
    logOut(dispatch);
  }, [dispatch, logOut]);

  /** Go next product page */
  const goNextProductPage = useCallback(() => {
    if (currentIndex + 1 !== products?.length && products) {
      navigate(`${products[currentIndex + 1]?._id}`);
    }
    // Go first if reaches last index
    else if (products) {
      navigate(`${products[0]?._id}`);
    }
  }, [navigate, currentIndex, products]);

  /** go cart page with quantity */
  const addToCart = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const qty = e.currentTarget?.productSelect.value;

      if (product?.countInStock === 0) {
        alert('Out of Stock');
      } else {
        navigate(`/cart/${product?._id}?qty=${qty}`);
      }
    },
    [navigate, product]
  );

  // Observer Product
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

/**
 * Hook to observe a product column and trigger navigation to the next product page.
 *
 * @param columnRef - Ref object pointing to the item column.
 * @param goNextProductPage - Function to navigate to the next product page.
 */
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

  // Follow the observed column
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

/**
 * Custom hook to fetch products and determine the current product and its index.
 *
 * @param productId - The ID of the current product.
 * @returns A tuple containing the current product, all products, and the index of the current product.
 */
const useFetchProducts = (
  productId: string | undefined
): [IProduct | undefined, IProduct[] | undefined, number] => {
  const { data: products } = useGetProductsQuery();

  /** Current product */
  const product = useMemo(() => {
    return (
      products &&
      [...products].filter(
        (product): product is IProduct => product?._id == productId
      )[0]
    );
  }, [products, productId]);

  /** Current product index  */
  const currentIndex = useMemo(() => {
    return product && products ? products?.indexOf(product) : -1;
  }, [product, products]);

  return [product, products, currentIndex];
};
