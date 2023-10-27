import { DownButton, ItemColumn } from '../../molecules';
import './ItemNav.scss';

export default function ItemNav({
  products,
  productId,
  goNextProductPage = { goNextProductPage },
}) {
  return (
    <div className="itemNav">
      <div className="itemNav__column">
        {products?.map((product) => {
          return (
            <ItemColumn
              key={product?._id}
              product={product}
              productId={productId}
            />
          );
        })}
      </div>

      <DownButton goNextProductPage={goNextProductPage} />
    </div>
  );
}
