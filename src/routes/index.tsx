import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Camping from '@/pages/Camping';
import { SearchResults } from '@/pages/SearchResults';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/about',
    element: <About />,
  },
  {
    path: '/camping',
    element: <Camping />,
  },
  {
    path: '/search',
    element: <SearchResults />,
  },
]);

