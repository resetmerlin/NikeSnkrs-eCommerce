import { CartButton, LoginButton } from '../../molecules/button/Button';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import './Header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="header" id="header">
      <div className="header__left">
        <Link to="/">
          <AtomicLogo size="l" />
        </Link>
      </div>

      <div className="header__center">
        <AtomicSubtitle size="l" strength="600">
          MEN
        </AtomicSubtitle>
        <AtomicSubtitle size="l" strength="600">
          WOMEN
        </AtomicSubtitle>
        <Link to="/products">
          <AtomicSubtitle size="l" strength="600">
            ALL
          </AtomicSubtitle>
        </Link>
      </div>

      <div className="header__right">
        <CartButton />
        <LoginButton />
      </div>
    </div>
  );
}
