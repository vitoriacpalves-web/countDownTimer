import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//pages
import Home from './routes/Home.jsx'
import CountDown from './routes/CountDown.jsx'

//CONTEXT
import {CountDownProvider} from "./context/CountDownProvider.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/countdown",
        element: <CountDown />,
      },

    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CountDownProvider>
      <RouterProvider router={router} />
    </CountDownProvider>
  </StrictMode>,
)
