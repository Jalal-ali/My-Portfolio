import { useState } from "react";

const Navbar = () => {
  const [hambrgr, setHambrgr] = useState(true);

  const show = () => {
    setHambrgr(!hambrgr);
  };

  return (
    <nav className="w-full shadow-lg sticky top-0 z-10 bg-emerald-950/60 backdrop-filter backdrop-blur-lg bg-opacity-70">
      <div className="flex flex-wrap items-center justify-between mx-auto p-5 max-w-full w-full">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse"></a>
        <button
          onClick={show}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#00a78e] rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
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
    <a
      href="#"
      className="block py-2 px-3 bg-[#ff1313] rounded md:bg-transparent md:text-[#ffffff] md:p-0 text-white md:dark:text-[#ff1313] hover:bg-[#ff1313] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#ff1313] focus:ring-opacity-50"
      aria-current="page"
    >
      PRODUCTS +
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff1313] md:p-0 dark:text-white dark:hover:text-[#ff1313] focus:outline-none focus:ring-2 focus:ring-[#ff1313] focus:ring-opacity-50"
    >
      SOLUTIONS +
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff1313] md:p-0 dark:text-white dark:hover:text-[#ff1313] focus:outline-none focus:ring-2 focus:ring-[#ff1313] focus:ring-opacity-50"
    >
      ABOUT
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff1313] md:p-0 dark:text-white dark:hover:text-[#ff1313] focus:outline-none focus:ring-2 focus:ring-[#ff1313] focus:ring-opacity-50"
    >
      BLOG
    </a>
  </li>
  <li>
    <a
      href="#"
      className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#ff1313] md:p-0 dark:text-white dark:hover:text-[#ff1313] focus:outline-none focus:ring-2 focus:ring-[#ff1313] focus:ring-opacity-50"
    >
      CONTACT
    </a>
  </li>
</ul>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
