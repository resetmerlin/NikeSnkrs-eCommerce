import { PropsWithChildren } from 'react';
import { Header } from '../../organisms';

export default function LayoutHeader({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main id="container">{children}</main>
    </>
  );
}
