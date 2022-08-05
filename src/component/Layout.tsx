import * as React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

interface IAppProps {
}

const Layout: React.FunctionComponent<IAppProps> = (props) => {
  return(
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
};

export default Layout;
