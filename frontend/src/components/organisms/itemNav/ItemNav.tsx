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

/**
 * Responsible for taking a list of 'products' and rendering them as 'ItemColumn's
 *
 * - Responsible for components begin to have the final shape
 * - Responsible for combination of molecules that work together or atoms that compose more elaborate interfaces
 */
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
