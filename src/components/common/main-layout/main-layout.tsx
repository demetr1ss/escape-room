import { Header, Footer } from 'components/common/common';
import { PropsWithChildren } from 'react';

export default function MainLayout({ children }: PropsWithChildren): JSX.Element {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
