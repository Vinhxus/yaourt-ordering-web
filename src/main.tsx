import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './features/Aboutus.tsx'
import { Outlet } from 'react-router-dom'
import Privacy from './features/Privacy.tsx'
import Terms from './features/Terms.tsx'
import Contact from './features/Contact.tsx'
import Footer from './components/Footer.tsx'
import { NavBar } from './components/navBar.tsx'

export function Layout() {
  return (
    <>
      <NavBar/>  
      <Outlet/>
      <Footer/>
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      { path: "/", element: <App/> },
      { path: "/about", element: <About/> },
      { path: "/privacy", element: <Privacy/> },
      { path: "/terms", element: <Terms/> },
      { path: "/contact", element: <Contact/> },
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
