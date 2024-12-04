import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './screens/About.jsx'
import Contact from './screens/Contact.jsx'
import Projects from './screens/Projects.jsx'
import Skills from './screens/Skills.jsx'

const router = createBrowserRouter([
  {
    path : "/" ,
    element : <Layout/>,
    children : [
      {
        path : "" ,
        element : <App/>
      },
      {
        path : "/about",
        element : <About/>
      },
      {
        path : "/contact",
        element : <Contact/>
      },
      {
        path : "/projects",
        element : <Projects/>
      },
      {
        path : "/skills",
        element : <Skills/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <App/>
    </RouterProvider>
)
