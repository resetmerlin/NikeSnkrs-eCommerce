import { forwardRef } from 'react';
import { IProduct, IProducts } from '../../../types/dto';
import { DownButton, ItemColumn } from '../../molecules';
import './ItemNav.scss';
import { ItemColRef } from '../../../pages/product/ProductPage';

type IProps = {
  goNextProductPage: () => void;
  productId?: string;
  products?: IProducts;
};

export default forwardRef<ItemColRef, IProps>(function ItemNav(
  { products, productId, goNextProductPage },
  ref
) {
  return (
    <div className="itemNav">
      <div className="itemNav__column">
        {products?.map((product: IProduct) => {
          if (product?._id === productId) {
            return (
              <ItemColumn
                ref={ref}
                key={product?._id}
                product={product}
                productId={productId}
              />
            );
          } else {
            return (
              <ItemColumn
                key={product?._id}
                product={product}
                productId={productId}
              />
            );
          }
        })}
      </div>

      <DownButton goNextProductPage={goNextProductPage} />
    </div>
  );
});
