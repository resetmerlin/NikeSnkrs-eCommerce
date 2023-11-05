import './ProductImage.scss';

export default function ProductImage({ productId }) {
  return (
    <img
      src={`../products/${productId}.png`}
      className="productPage__image"
      alt="product"
    />
  );
}
