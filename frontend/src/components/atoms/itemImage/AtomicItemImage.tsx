/* eslint-disable react/jsx-props-no-spreading */
import { TNormalElementProps } from '../../../types';
import './AtomicItemImage.scss';

interface IProps extends TNormalElementProps<HTMLImageElement> {
  size: 's' | 'm' | 'l' | 'xl';
  path: 'short' | 'long';
  productId: string | undefined;
}
export default function AtomicItemImage({
  children,
  className = '',
  productId,
  path,
  size,
  ...props
}: IProps) {
  return (
    <img
      {...props}
      src={
        path == 'short'
          ? `./products/${productId}.png`
          : `../products/${productId}.png`
      }
      alt="productId"
      id="nike-product"
      className={`itemImage-${size}  itemImage ${className}`}
    />
  );
}
