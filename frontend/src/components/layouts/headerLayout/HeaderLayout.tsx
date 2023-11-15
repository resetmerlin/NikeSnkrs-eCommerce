import { PropsWithChildren } from 'react';
import { Header } from '../../organisms';
import { IUser } from '../../../types/dto';

interface IProps extends PropsWithChildren {
  userInfo: IUser;
  logOut: () => void;
}

export default function HeaderLayout({ children, userInfo, logOut }: IProps) {
  return (
    <>
      <Header userInfo={userInfo} logOut={logOut} />
      <main id="container">{children}</main>
    </>
  );
}
