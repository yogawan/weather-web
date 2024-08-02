import React from 'react'
import ReactDOM from 'react-dom/client'
import './sass/main.scss'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePages from './components/pages/HomePages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePages></HomePages>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);