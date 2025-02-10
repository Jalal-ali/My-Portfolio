import Navbar from "./components/Navbar.jsx"
import { Outlet } from 'react-router-dom'
import Animation from './components/Animation.tsx'
const Layout = () => {
  return (
    <>
      <Animation />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout