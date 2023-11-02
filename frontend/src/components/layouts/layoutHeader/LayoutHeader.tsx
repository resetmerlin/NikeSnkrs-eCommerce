import { PropsWithChildren } from 'react';
import { Header } from '../../organisms';

export default function LayoutHeader({
  children,
  userInfo,
  deleteUserInfo,
}: PropsWithChildren) {
  return (
    <>
      <Header userInfo={userInfo} deleteUserInfo={deleteUserInfo} />
      <main id="container">{children}</main>
    </>
  );
}
