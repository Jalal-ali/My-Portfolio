import Navbar from "./components/Navbar.jsx"
import { Outlet } from 'react-router-dom'
import Animation from './components/Animation.tsx'
import { useEffect, useState } from "react"
const Layout = () => {

 const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) {
    return <div className="flex justify-center items-center h-screen bg-[#0b1d18] ">
      <div className="h-36 w-40 flex items-center justify-center">
                <div className="h-12 flex rotate-180 items-center ">
                  <div className="bg-[#00debf] h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite] m-0.5"></div>
                  <div
                    className="bg-[#00debf] h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite]  m-0.5"
                    style={{
                      animationDelay: "0.3s",
                    }}
                  ></div>
                  <div
                    className="bg-[#00debf] h-full w-2 ml-0.5 animate-[bars_1.2s_ease-in-out_infinite]  m-0.5"
                    style={{
                      animationDelay: "0.6s",
                    }}
                  ></div>
                </div>
              </div>
    </div>
  }
  return (
    <>
      <Animation />
      <Navbar />
      <Outlet />
    </>
  )
}

export default Layout