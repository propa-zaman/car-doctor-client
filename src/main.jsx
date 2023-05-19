import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import router from './Routes/Routes.jsx';
import AuthProvider from './Pages/Providers/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
 <div className='max-w-7xl mx-auto'>
   <React.StrictMode>
       <AuthProvider> <RouterProvider router={router} /></AuthProvider>

  </React.StrictMode>
 </div>
)
