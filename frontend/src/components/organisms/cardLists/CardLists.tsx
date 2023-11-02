import { IProduct, IProducts } from '../../../types/dto';
import { Card } from '../../molecules';
import './CardLists.scss';

type IProps = {
  products: IProducts | undefined;
};

export default function CardLists({ products }: IProps) {
  return (
    <div className="card-lists">
      {products?.map((product: IProduct) => {
        return <Card product={product} key={product._id} />;
      })}
    </div>
  );
}
