import React from 'react';
import { Outlet } from 'react-router-dom';

import { Header, Footer } from '../components/simple';

const Layout: React.FC = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
