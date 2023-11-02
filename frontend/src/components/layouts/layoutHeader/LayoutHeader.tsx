import { PropsWithChildren } from 'react';
import { Header } from '../../organisms';
import { IUser } from '../../../types/dto';

interface IProps extends PropsWithChildren {
  userInfo: IUser[];
  deleteUserInfo: () => void;
}

export default function LayoutHeader({
  children,
  userInfo,
  deleteUserInfo,
}: IProps) {
  return (
    <>
      <Header userInfo={userInfo} deleteUserInfo={deleteUserInfo} />
      <main id="container">{children}</main>
    </>
  );
}
