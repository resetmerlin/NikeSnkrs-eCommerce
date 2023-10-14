import { Link } from 'react-router-dom';
import SvgCartAlt from '../atoms/icons/SvgCartAlt';
import SvgLogIn from '../atoms/icons/SvgLogIn';
import './Header.scss';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <Link to="/">
          <img
            src="./nike-logo-black.png"
            className="header__logo"
            alt="header-logo"
          />
        </Link>
      </div>

      <div className="header__center">
        <span className="header__center__category">MEN</span>
        <span className="header__center__category">FEMALE</span>
        <Link to="/snkrs" className="header__center__category">
          ALL
        </Link>
      </div>
      <div className="header__right">
        <input
          type="checkbox"
          className="navigation__checkbox"
          id="navi-toggle"
        />
        <Link to="/users/login" className="a__login">
          <SvgLogIn size={32} color="black" />
        </Link>

        <Link to="/cart" className="header__right__cart">
          <SvgCartAlt size={32} color="black" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
