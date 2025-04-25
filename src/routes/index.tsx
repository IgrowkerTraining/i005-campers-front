import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import Questions from '@/pages/Questions';
import Contact from '@/pages/Contact';
import Camping from '@/pages/Camping';
import Login from '@/pages/Login';
import Register from '@/pages/Register';
import SearchView from '@/pages/SearchView';
import CampingForm from '@/components/CampingForm';
import Successlogin from '@/pages/Successlogin';
import { BookingGuest } from '@/components/BookingGuest/BookingGuest.tsx';
import BookingGuestPage from '@/pages/BookingGuestPage.tsx';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/sobre-nosotros',
    element: <About />,
  },
  {
    path: '/preguntas-frecuentes',
    element: <Questions />,
  },
  {
    path: '/contacto',
    element: <Contact />,
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
    path: '/registro-camping',
    element: <CampingForm/>,
  },
  {
    path: '/exito',
    element: <Successlogin/>,
  },
  {
    path: '/BookingGuest',
    element: <BookingGuest
    campingName="Camping Ejemplo"
    pricePerNight={5000}
  />
},
{
  path: '/booking/:campingId',
  element: <BookingGuestPage/>
}
]);

