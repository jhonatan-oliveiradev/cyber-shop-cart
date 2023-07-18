import { RouterProvider } from 'react-router-dom'
import CartProvider from './contexts/CartContext'
import ReactDOM from 'react-dom/client'
import { router } from './App'
import React from 'react'
import './index.css'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <Toaster
        position="bottom-right"
        reverseOrder={false}
      />
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>,
)
