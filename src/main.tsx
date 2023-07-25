import { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
// import 'antd/dist/antd.css';

import router from './router';
// import '@app/config/axios';
import './main.scss';
import { SpinLoading } from './components/atoms/SpinLoading/SpinLoading';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Suspense fallback={<SpinLoading />}>
    <RouterProvider router={router} />
  </Suspense>,
);
