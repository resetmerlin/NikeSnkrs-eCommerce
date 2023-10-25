import { Layout } from '../../components/layouts';
import {
  IntroCenter,
  IntroLeft,
  IntroRight,
} from '../../components/molecules/intro';
import { CardLists } from '../../components/organisms';
import CardListsSkeleton from '../../components/organisms/cardLists/CardListsSkeleton';
import { Template } from '../../components/template';
import { useGetProductsQuery } from '../../features/api/apiSlice';

function HomePage() {
  const { data, isLoading } = useGetProductsQuery();
  const cardProducts = data && [...data]?.slice(0, 3);

  return (
    <Layout>
      <Template.Default>
        <Template.Center>
          <IntroLeft />
          <IntroCenter />
          <IntroRight />
        </Template.Center>
        <Template.BottomRight>
          {isLoading ? (
            <CardListsSkeleton />
          ) : (
            <CardLists products={cardProducts} />
          )}
        </Template.BottomRight>
      </Template.Default>
    </Layout>
  );
}

export default HomePage;
