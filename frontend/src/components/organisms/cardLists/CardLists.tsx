import { Card } from '../../molecules';
import './CardLists.scss';

export default function CardLists({ products }) {
  return (
    <div className="card-lists">
      <Card />
      <Card />
      <Card />
    </div>
  );
}
