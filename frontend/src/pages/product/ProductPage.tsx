import { useNavigate, useParams } from 'react-router-dom';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { ItemInfoEvents, ItemNav } from '../../components/organisms';
import {
  useGetProductQuery,
  useGetProductsQuery,
} from '../../features/api/apiSlice';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';

interface FormElements extends HTMLFormControlsCollection {
  productSelect: HTMLInputElement;
}
interface UsernameFormElement extends FormElements {
  readonly elements: FormElements;
}

export default function ProductPage() {
  const navigate = useNavigate();
  const productId = useParams();
  const { data: products } = useGetProductsQuery();

  const goPrevPage = () => {
    navigate(-1);
  };

  /** Current product */
  const product =
    products &&
    [...products].filter((product) => product?._id == productId?.id)[0];

  /** Current index in total products */
  const currentIndex = products?.indexOf(product);

  /** Go next product */
  const goNextProductPage = () => {
    // if reaches last index
    if (currentIndex + 1 !== products.length) {
      navigate(`${products[currentIndex + 1]?._id}`);
    } else {
      navigate(`${products[0]?._id}`);
    }
  };

  /** Add selected quantity and go cart page */
  const addToCart = (e: React.FormEvent<UsernameFormElement>) => {
    e.preventDefault();
    const qty = e?.currentTarget?.elements?.productSelect?.value;

    if (product.countInStock == 0) {
      alert('Out of Stock');
    } else {
      navigate(`/cart/${product?._id}?qty=${qty}`);
    }
  };

  return (
    <LayoutHeader>
      <ParentTemplate size="full">
        <ChildTemplate position="left" size="full">
          <ItemInfoEvents
            product={product}
            goPrevPage={goPrevPage}
            addToCart={addToCart}
          />
        </ChildTemplate>
        <ChildTemplate position="centerRight" size="full">
          {/* <Object model={productId?.id} /> */}
        </ChildTemplate>
        <ChildTemplate position="right" size="full">
          <ItemNav
            products={products}
            productId={productId?.id}
            goNextProductPage={goNextProductPage}
          />
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}
