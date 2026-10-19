import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Sponsors from './pages/Sponsors.jsx'
import Speakers from './pages/Speakers.jsx'
import CompaniesHiring from './pages/CompaniesHiring.jsx'
import Recruiters from './pages/Recruiters.jsx'
import Contact from './pages/Contact.jsx'
import NotFound from './pages/NotFound.jsx'
import Academy from './pages/Academy.jsx'
import CareerFair2025 from './pages/CareerFair2025.jsx'



const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/academy',
    element: <Academy />,
    errorElement: <NotFound />,
  },
  {
    path: '/career-fair-2025',
    element: <CareerFair2025 />,
    errorElement: <NotFound />,
  },
  {
    path: '/about',
    element: <About />,
    errorElement: <NotFound />,
  },
  {
    path: '/sponsors',
    element: <Sponsors />,
    errorElement: <NotFound />,
  },
  {
    path: '/speakers',
    element: <Speakers />,
    errorElement: <NotFound />,
  },
  {
    path: '/companies',
    element: <CompaniesHiring />,
    errorElement: <NotFound />,
  },
  {
    path: '/recruiters',
    element: <Recruiters />,
    errorElement: <NotFound />,
  },
  {
    path: '/contact',
    element: <Contact />,
    errorElement: <NotFound />,
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
