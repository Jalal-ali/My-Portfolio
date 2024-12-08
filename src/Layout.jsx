import Navbar from "./components/navbar"
import { Outlet } from 'react-router-dom'
import Animation from './components/Animation'
const Layout = () => {
  return (
    <>
    
    <Animation/>
    <Navbar/>
    <Outlet/>
    </>
  )
}

export default Layout