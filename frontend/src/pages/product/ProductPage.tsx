import { useNavigate, useParams } from 'react-router-dom';
import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { ItemInfoEvents, ItemNav } from '../../components/organisms';
import {
  useGetProductQuery,
  useGetProductsQuery,
} from '../../features/api/apiSlice';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';

export default function ProductPage() {
  const navigate = useNavigate();
  const productId = useParams();
  const { data: products } = useGetProductsQuery();
  const { data: singleProduct } = useGetProductQuery(productId?.id);

  /** 전 페이지로 이동 */
  const goPrevPage = () => navigate(-1);

  /** 현재 상품 */
  const product =
    products &&
    [...products].filter((product) => product?._id == productId?.id)[0];

  /** 전체 상품 속 현재 인덱스 */
  const currentIndex = products?.indexOf(product);

  /** 다음 상품으로 이동 */
  const goNextProductPage = () => {
    // 마지막 인덱스까지 도달할시
    if (currentIndex + 1 !== products.length) {
      navigate(`${products[currentIndex + 1]?._id}`);
    }
    // 마지막 인덱스가 아닐시
    else {
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
