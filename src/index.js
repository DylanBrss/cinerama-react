import React from 'react';
import './style.scss';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import FilmFR from './pages/FilmFR';
import FilmEN from './pages/FilmEN';
import Film2023 from './pages/Film2023';
import Top50 from './pages/Top50';
import Recherche from './pages/Recherche';
import { createHashRouter, RouterProvider } from "react-router-dom";

const router = createHashRouter([
  {
    path: "/*",
    element: <Home />
  },
  {
    path: "/filmfr",
    element: <FilmFR />
  },
  {
    path: "/filmen",
    element: <FilmEN />
  },
  {
    path: "/film2023",
    element: <Film2023 />
  },
  {
    path: "/top50",
    element: <Top50 />
  },
  {
    path: "/recherche",
    element: <Recherche />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
