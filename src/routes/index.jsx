import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
]);

export default router;