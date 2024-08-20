import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './component/router/Router.jsx'
import AuthProvider from './component/provider/AuthProvider.jsx'
import { HelmetProvider } from 'react-helmet-async'


createRoot(document.getElementById('root')).render(
  <StrictMode>

 <HelmetProvider>
 <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
 </HelmetProvider>
 
  </StrictMode>,
)
