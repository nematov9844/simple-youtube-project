import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Reports from './pages/reports';
import Settings from './pages/settings';
import NotFound from './pages/notFound';
import Home from './pages/home';
import Login from './pages/login';

import PrivateRoute from './components/privateRoute'
import Register from './pages/register';
import VideoDetails from './components/vedioDeatails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      {
        path: '/reports',
        element: <PrivateRoute element={<Reports />} />,
      },
      {
        path: '/settings',
        element: <PrivateRoute element={<Settings />} />, 
      },
    ],
  },
  { path: '/login', element: <Login /> }, 
  { path: '/register', element: <Register /> }, 
  { path: '/video-details/:id', element: <VideoDetails /> }, 
  { path: '*', element: <NotFound /> }, 
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
