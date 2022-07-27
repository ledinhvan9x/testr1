import { Outlet } from 'react-router-dom';
import { memo } from 'react';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default memo(Layout);
