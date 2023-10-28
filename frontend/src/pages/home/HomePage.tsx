import { ChildTemplate, ParentTemplate } from '../../components/atoms';
import LayoutHeader from '../../components/layouts/layoutHeader/LayoutHeader';
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
    <LayoutHeader>
      <ParentTemplate size="s">
        <ChildTemplate position="center" size="s">
          <IntroLeft />
          <IntroCenter />
          <IntroRight />
        </ChildTemplate>
        <ChildTemplate position="bottomRight" size="s">
          {isLoading ? (
            <CardListsSkeleton />
          ) : (
            <CardLists products={cardProducts} />
          )}
        </ChildTemplate>
      </ParentTemplate>
    </LayoutHeader>
  );
}

export default HomePage;
