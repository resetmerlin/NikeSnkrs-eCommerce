import { IProduct } from '../../../types/dto';
import { Card } from '../../molecules';
import './CardLists.scss';

interface IProps extends IProduct {}

export default function CardLists({ products }: IProps) {
  return (
    <div className="card-lists">
      {products?.map((product) => {
        return <Card product={product} key={product._id} />;
      })}
    </div>
  );
}
