import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Home from '@/pages/Home';
const Layout = () => {
  return (
    <div>
      <Header />
      <Home />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
