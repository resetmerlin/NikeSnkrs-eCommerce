import { useNavigate, useParams } from 'react-router-dom';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { ItemInfoEvents, ItemNav } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';

export default function ProductPage() {
  const navigate = useNavigate();
  const productId = useParams();
  const { data: products } = useGetProductsQuery();

  const goPrevPage = () => navigate(-1);

  const product =
    products &&
    [...products].filter((product) => product?._id == productId?.id)[0];
  const currentIndex = products?.indexOf(product);

  const goNextProductPage = () => {
    if (currentIndex + 1 !== products.length) {
      navigate(`${products[currentIndex + 1]?._id}`);
    } else {
      navigate(`${products[0]?._id}`);
    }
  };
  return (
    <LayoutHeader>
      <ParentTemplate size="full">
        <ChildTemplate position="left" size="full">
          <ItemInfoEvents product={product} goPrevPage={goPrevPage} />
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
