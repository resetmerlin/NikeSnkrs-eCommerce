import { IUser } from '../../../types/dto';
import { AtomicLogo, AtomicSubtitle } from '../../atoms';
import { CartButton, LoginButton, UserButton } from '../../molecules';
import './Header.scss';
import { Link } from 'react-router-dom';

type IProps = {
  userInfo: IUser[];
  logOut: () => void;
};

export default function Header({ userInfo, logOut }: IProps) {
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
        <Link to="/cart">
          <CartButton />
        </Link>

        {userInfo && userInfo.length > 0 ? (
          <UserButton logOut={logOut} />
        ) : (
          <Link to="/login">
            <LoginButton />
          </Link>
        )}
      </div>
    </div>
  );
}
