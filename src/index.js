import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Translation framework
import './i18n';

// Pages
import Home from './Pages/Home.js';
import Design from './Pages/Work/Design.js';
import Rights from './Pages/Work/Rights.js';
import Marketing from './Pages/Work/Marketing.js';
import Web from './Pages/Work/Web.js';


// Sytle Files
import './Styles/all.min.css'; // For Icons from (https://fontawesome.com/)
import './Styles/Global-Rules/global-rules.css';
import './Styles/HomePage/home.css';
import './Styles/Work-Pages/work.css'


// For Routering
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />,},
  { path: "Design", element: <Design />,},
  { path: "Rights", element: <Rights />,},
  { path: "Marketing", element: <Marketing />,},
  { path: "Web", element: <Web />,},
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
