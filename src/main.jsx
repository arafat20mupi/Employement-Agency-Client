import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
      <Toaster />
    </HelmetProvider>
  </StrictMode>,
)
