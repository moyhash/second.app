import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
//import App from "./App";
import Home from './pages/home';
import HTML from './pages/html'
///////////React Router //////////////////////
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // Index page
    //element: <div>Hello world!</div>,
    element: <Home />, // Home Page
    errorElement: <h3>Ooops Page not Found!!!!</h3> // eroor page
  },

  {
    path: "/html", // Html path
    element: <HTML />, // Html Page
  },
]);

/*const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);*/
const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
