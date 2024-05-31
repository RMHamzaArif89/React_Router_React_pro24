import { useState } from 'react'
import './App.css'
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import Root from './pages/Root';
import Contact from './pages/Contact'
import About from './pages/About'
import Home1 from './pages/Home1';
import Home2 from './pages/Home2';
import AboutAll from './pages/AboutAll';
import AboutNew from './pages/AboutNew';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
        children:[
          {
            path: "home1",
            element: <Home1 />,
          },
          {
            path: "home2",
            element: <Home2 />,
          },
        ]

      },
      {
        path: "about",
        element: <About />,
        children:[
          {
            path: "Aboutall",
            element: <AboutAll />,
          },
          {
            path: "AboutNew",
            element: <AboutNew />,
          },
        ]
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);
function App() {


  return (
 <RouterProvider router={router} />
  )
}

export default App
