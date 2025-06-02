import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Browse from './components/Browse';

const App = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/browse',
          element: <Browse />,
        },
      ],
    },
    {
      path: '/login',
      element: <Login />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default App;
