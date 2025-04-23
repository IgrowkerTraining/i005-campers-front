import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Camping from '@/pages/Camping';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import SearchView from '@/pages/SearchView';
import CampingForm from '@/components/CampingForm';
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
    path: '/camping/:id',
    element: <Camping />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/registro',
    element: <Register />
  },
  {
    path: '/search',
    element: <SearchView/>,
  },
  {
    path: '/campingform',
    element: <CampingForm/>,
  },
]);

