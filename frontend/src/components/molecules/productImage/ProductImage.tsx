import './ProductImage.scss';

type IProps = {
  productId: string | undefined;
};

export default function ProductImage({ productId }: IProps) {
  return (
    <img
      src={`../products/${productId}.png`}
      className="productPage__image"
      alt="product"
    />
  );
}
