import { useNavigate, useParams } from 'react-router-dom';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Layout } from '../../components/layouts';
import { ItemInfoEvents, ItemNav } from '../../components/organisms';
import { useGetProductsQuery } from '../../features/api/apiSlice';

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
    <Layout>
      <ParentTemplate size="full">
        <ChildTemplate position="left" size="full">
          <ItemInfoEvents product={product} goPrevPage={goPrevPage} />
        </ChildTemplate>
        <ChildTemplate position="center" size="full">
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
    </Layout>
  );
}
