import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import { Layout } from '../../components/layouts';
import {
  IntroCenter,
  IntroLeft,
  IntroRight,
} from '../../components/molecules/intro';
import { CardLists } from '../../components/organisms';
import CardListsSkeleton from '../../components/organisms/cardLists/CardListsSkeleton';
import { useGetProductsQuery } from '../../features/api/apiSlice';

function HomePage() {
  const { data, isLoading } = useGetProductsQuery();
  const cardProducts = data && [...data]?.slice(0, 3);

  return (
    <Layout>
      <ParentTemplate size="s">
        <ChildTemplate position="center">
          <IntroLeft />
          <IntroCenter />
          <IntroRight />
        </ChildTemplate>
        <ChildTemplate position="bottomRight">
          {isLoading ? (
            <CardListsSkeleton />
          ) : (
            <CardLists products={cardProducts} />
          )}
        </ChildTemplate>
      </ParentTemplate>
    </Layout>
  );
}

export default HomePage;
