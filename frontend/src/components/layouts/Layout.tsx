import { PropsWithChildren } from 'react';
import { Header } from '../organisms';

export default function Layout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main id="container">{children}</main>
    </>
  );
}
