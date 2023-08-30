import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import SignIn from './Pages/SignInPage';
import UserInput from './Pages/UserInputPage';
import InputReviewPage from './Pages/InputReviewPage';
import OutputPage from './Pages/OutputPage';


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
  {
    path: "/review",
    element: <InputReviewPage />,
  },
  {
    path: "output",
    element: <OutputPage />,
  }
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);