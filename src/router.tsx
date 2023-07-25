import { createBrowserRouter, Outlet } from 'react-router-dom';

// import { NotFound } from '@app/pages';
// import privateRoutes from '@app/routes/private';
import publicRoutes from './routes/public';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Outlet />,
    errorElement: '',
    children: [...publicRoutes],
  },
]);

export default router;
