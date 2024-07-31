import Login from '../views/pages/login';
import About from '../views/pages/about';
import Galery from '../views/pages/galery';
import User from '../views/pages/user-dashboard';

const routes = {
  '/': Login,
  '/login': Login,
  '/about': About,
  '/galery': Galery,
  '/user-dashboard': User,
};

export default routes;