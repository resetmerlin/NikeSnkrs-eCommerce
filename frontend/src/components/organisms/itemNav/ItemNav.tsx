import { IProduct, IProducts } from '../../../types/dto';
import { DownButton, ItemColumn } from '../../molecules';
import './ItemNav.scss';

type IProps = {
  goNextProductPage: () => void;
  productId: string;
  products: IProducts;
};

export default function ItemNav({
  products,
  productId,
  goNextProductPage,
}: IProps) {
  return (
    <div className="itemNav">
      <div className="itemNav__column">
        {products?.map((product: IProduct) => {
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

ItemNav.defaultProps = {
  products: [],
  productId: '',
};
