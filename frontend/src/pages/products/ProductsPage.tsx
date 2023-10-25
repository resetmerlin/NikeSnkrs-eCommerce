import { useEffect } from 'react';
import { AtomicTitle } from '../../components/atoms';
import { Layout } from '../../components/layouts';
import { ItemLists } from '../../components/organisms';
import { Template } from '../../components/template';
import { useGetProductsQuery } from '../../features/api/apiSlice';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { productsAdded } from '../../features/product/productReducers';

export default function ProductsPage() {
  const dispatch = useAppDispatch();
  const { data } = useGetProductsQuery();
  const selectProducts = useAppSelector((state) => state.products);

  useEffect(() => {
    if (data) dispatch(productsAdded(data));
  }, [data]);
  return (
    <Layout>
      <Template.Default>
        <Template.TopLeft>
          <AtomicTitle size="xs">Latest Products</AtomicTitle>
        </Template.TopLeft>
        <Template.BottomCenter>
          <ItemLists products={selectProducts[0]} />
        </Template.BottomCenter>
      </Template.Default>
    </Layout>
  );
}
