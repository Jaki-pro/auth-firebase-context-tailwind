import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import Authproviders from './providers/Authproviders.jsx';
import Home from './components/Home.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: 'login',
        element: <Login></Login>

      },
      {
        path: 'register',
        element: <Register></Register>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Authproviders>
      <RouterProvider router={router} />
    </Authproviders>
  </React.StrictMode>,
)
