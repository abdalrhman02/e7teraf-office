import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Translation framework
import './i18n';

// Pages
import Home from './Pages/Home.js';
import Work from './Pages/Work.js';

// Sytle Files
import './Styles/all.min.css'; // For Icons from (https://fontawesome.com/)
import './Styles/Global-Rules/global-rules.css';
import './Styles/HomePage/home.css';
import './Styles/WorkGallery/work.css';


// For Routering
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <Home />,},
  { path: 'Work', element: <Work />}
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
