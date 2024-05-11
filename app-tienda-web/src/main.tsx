import React from 'react';
import ReactDOM from 'react-dom/client';
import 'material-icons/iconfont/material-icons.css';
import Root from './routes/Root';
import ErrorPage from './ErrorPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Products from './components/Products/Products';
import Reports from './components/Reports/Reports';
import Deals from './components/Deals/Deals';
import Product from './components/Products/Product/Product';
import Comments from './components/Comments/Comments';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: 'productos',
        element: <Products />,
      },
      {
        path: 'productos/:id',
        element: <Product />,
      },
      {
        path: 'reportes',
        element: <Reports />,
      },
      {
        path: 'ofertas',
        element: <Deals />,
      },
      {
        path: 'comentarios',
        element: <Comments />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
