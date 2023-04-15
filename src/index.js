import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { Header } from './components/header/header';
import { Landing } from './components/landing/landing';
import { AboutMe } from './components/pages/aboutme';
import { Media } from './components/pages/media';
import { Interactive } from './components/pages/interactive/interactive';
import { Data } from './components/pages/data/data';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { WordleContainer } from './components/wordleClone/wordleContainer';
import { PepperSearch } from './components/jwpepper/jwpepper/JWPepper';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: '/about',
        element: <AboutMe />
      },
      {
        path: '/media',
        element: <Media />
      },
      {
        path: '/interactive',
        element: <Interactive />
      },
      {
        path: '/data',
        element: <Data />
      },
      {
        path: 'wordle',
        element: <WordleContainer />
      },
      {
        path: '/pieces',
        element: <PepperSearch />
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
