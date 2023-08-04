import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from './Pages/SignIn';
import UserInput from './Pages/UserInput';


import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserInput />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);