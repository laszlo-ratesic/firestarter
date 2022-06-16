import { Outlet } from 'react-router-dom';
import { Header } from '../sections/Header';

const Layout = () => {
  return (
    <div>
      <nav>
        <Header />
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
