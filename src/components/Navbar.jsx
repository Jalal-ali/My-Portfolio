import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faUser } from "@fortawesome/free-solid-svg-icons/faUser";
import { faLayerGroup } from "@fortawesome/free-solid-svg-icons/faLayerGroup";
import { faHexagonNodes } from "@fortawesome/free-solid-svg-icons/faHexagonNodes";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons/faCommentDots";

const Navbar = () => {
  const [hambrgr, setHambrgr] = useState(true);
  const [navColour, setNavColour] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 0.0001) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  };
  window.addEventListener("scroll", changeNav);

  return (
    <nav className={`w-full  sticky top-0 z-10 bg-[#123128]  bg-opacity-60 ${navColour ? "shadow-lg backdrop-filter backdrop-blur-lg" : ""}`}>
      <div className="flex flex-wrap items-center  justify-center mx-auto p-5 max-w-full w-full">
        <a href="#" className="flex items-center text-center space-x-3 mx-auto text-3xl font-noto font-bold text-[#00debf] rtl:space-x-reverse">Jalal Ali</a>
        <button
          onClick={() => setHambrgr(!hambrgr)}
          data-collapse-toggle="navbar-default"
          type="button"
          className="relative group inline-flex items-center md:hidden"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-lg w-[40px] h-[40px] transform transition-all bg-emerald-950 ring-0 ring-emerald-500 hover:ring-2 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">

            {hambrgr ? (
              // Hamburger Icon
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden">
                <div className="bg-[#b3f6ed] h-[2px] w-7 transform transition-all duration-300"></div>
                <div className="bg-[#b3f6ed] h-[2px] w-7 rounded transform transition-all duration-300"></div>
                <div className="bg-[#b3f6ed] h-[2px] w-7 transform transition-all duration-300"></div>
              </div>
            ) : (
              // Cross Icon
              <div className="absolute w-[20px] h-[20px] transition-transform duration-500 ease-in-out origin-center overflow-hidden">
                <div className="absolute flex items-center justify-center w-full h-full">
                  <div className="absolute bg-[#b3f6ed] h-[2px] w-5 transition-transform duration-500 ease-in-out rotate-45"></div>
                  <div className="absolute bg-[#b3f6ed] h-[2px] w-5 transition-transform duration-500 ease-in-out -rotate-45"></div>
                </div>
              </div>
            )}
          </div>
        </button>
        <div
          className={
            hambrgr
              ? "hidden w-full md:block md:w-auto mx-auto"
              : "w-full md:block md:w-auto mx-auto text-center"
          }
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border-b-2 border-t-2 border-opacity-60 border-[#b3f6ed] rounded-lg md:flex-row md:space-x-16 rtl:space-x-reverse md:mt-0 md:border-0 bg-transparent">
            <li>
              <Link className="font-raleway lg:hover-link xl:hover-link block py-2 px-3 text-lg text-white rounded hover:bg-emerald-950 md:hover:bg-transparent md:border-0 md:p-0"
                to="/"><span>
                  <FontAwesomeIcon className='text-white opacity-90 w-4 hover:text-[#26dcc5]' icon={faHouse} />
                </span> Home</Link>
            </li>
            <li>
              <Link className="font-raleway lg:hover-link xl:hover-link block py-2 px-3 text-lg text-white rounded hover:bg-emerald-950 md:hover:bg-transparent md:border-0 md:p-0"
                to="/about"><span>
                  <FontAwesomeIcon className='text-white opacity-90 w-3.5 mr-1 hover:text-[#26dcc5]' icon={faUser} />
                </span> About</Link>
            </li>
            <li>
              <Link className="font-raleway lg:hover-link xl:hover-link block py-2 px-3 text-lg text-white rounded hover:bg-emerald-950 md:hover:bg-transparent md:border-0 md:p-0"
                to="/projects"><span>
                  <FontAwesomeIcon className='text-white opacity-90 w-6 hover:text-[#26dcc5]' icon={faLayerGroup} />
                </span> Projects</Link>
            </li>
            <li>
              <Link className="font-raleway lg:hover-link xl:hover-link block py-2 px-3 text-lg text-white rounded hover:bg-emerald-950 md:hover:bg-transparent md:border-0 md:p-0"
                to="/skills"><span>
                  <FontAwesomeIcon className='text-white opacity-90 w-6 hover:text-[#26dcc5]' icon={faHexagonNodes} />
                </span> Skills</Link>
            </li>
            <li>
              <Link className="font-raleway lg:hover-link xl:hover-link block py-2 px-3 text-lg text-white rounded hover:bg-emerald-950 md:hover:bg-transparent md:border-0 md:p-0"
                to="/contact"><span>
                  <FontAwesomeIcon className='text-white opacity-90 w-6 hover:text-[#26dcc5]' icon={faCommentDots} />
                </span> Contact</Link>
            </li>

          </ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
