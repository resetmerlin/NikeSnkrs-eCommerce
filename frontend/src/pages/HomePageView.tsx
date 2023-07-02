const HomePageBackgroundView = () => {
  return (
    <div className="homePage__background">
      <span className="homePage__background__logo">NIKE</span>
    </div>
  );
};

const HomePageWrapView = () => {
  return (
    <div className="homePage__wrap">
      <HomePageLeftView />
      <HomePageCenterView />
      <HomePageRightView />
    </div>
  );
};

const HomePageLeftView = () => {
  return (
    <div className="homePage__left">
      <span className="homePage__left__big-text">JUST</span>
      <span className="homePage__left__big-text">DO</span>
      <span className="homePage__left__big-text">IT</span>

      <span className="homePage__left__small-text">
        You will experience outstanding
      </span>
      <span className="homePage__left__small-text">Nike Resell shop ever </span>
      <span className="homePage__left__small-text">seen before.</span>
    </div>
  );
};
const HomePageCenterView = () => {
  return <div className="homePage__center"></div>;
};
const HomePageRightView = () => {
  return (
    <div className="homePage__right">
      <span className="homePage__right__product-name">NIKE ZOOM AIR</span>
      <span className="homePage__right__product-price">$260</span>
      <span className="homePage__right__product-description">GET IT NOW</span>
    </div>
  );
};

const HomePageView = () => {
  return (
    <>
      <HomePageBackgroundView />
      <HomePageWrapView />
    </>
  );
};
export default HomePageView;
