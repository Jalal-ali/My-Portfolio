import codeLogo from "./assets/codeLogo.png"
import Navbar from "./components/navbar"
import Type from "./components/type.jsx"
import Logo2 from './assets/logo2.svg'
import Animation from "./components/Animation.tsx"
const App = () => {
  

  return (
    <>
    <div>
    <Navbar />
      {/* Background animation */}
      <Animation />
      
      
        <section  className="max-w-full w-full bg-[#123128] bg-opacity-60 text-white" id="home">
  <div className="max-w-full w-full px-6 sm:px-10 lg:px-28 py-10 overflow-hidden">
        

    {/* 1st Main Section */}
    <div className="flex flex-wrap items-center justify-between">
       
      {/* Left Column */}
      <div className="w-full md:w-7/12 mb-8 md:mb-0">
        <h1 className="text-4xl sm:text-5xl font-poppins mb-4">
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>

        <h1 className="text-3xl sm:text-4xl font-semibold leading-snug">
          I am
          <strong className="text-[#00debf] font-poppins ml-2">JALAL ALI</strong>
        </h1>

        {/* Typewriter Effect */}
        <div className="mt-8">
          <Type />
        </div>
      </div>

      {/* Right Column logo */}
      <div className="w-full md:w-5/12 flex justify-center">
        <img
          className="h-auto my-10 max-w-xs sm:max-w-sm lg:max-w-md"
          src={codeLogo}
          alt="Code Logo"
        />
      </div>
    </div>
     {/* 1st section ended */}

    {/* Second Section */}
    <div className="mt-16 px-6 sm:px-10 lg:px-0">
      <div className="flex flex-wrap text-center md:text-left items-center">
        {/* Description Section */}
        <div className="w-full md:w-8/12 mb-10 md:mb-0 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold">
            LET ME <span className="text-[#00debf]"> INTRODUCE </span> MYSELF
          </h1>
          <p className="mt-6 text-base sm:text-lg text-gray-300 leading-relaxed">
            I fell in love with programming and I have at least learnt
            something, I think… 🤷‍♂️
            <br />
            <br />
            I am fluent in classics like{" "}
            <i>
              <b className="text-[#00debf]">JavaScript, React.js, and React Native.</b>
            </i>
            <br />
            <br />
            My field of interest includes building new{" "}
            <i>
              <b className="text-[#00debf]">Web Technologies and Products</b>
            </i>{" "}
            and exploring areas related to{" "}
            <i>
              <b className="text-[#00debf]">
                Deep Learning and Natural Language Processing.
              </b>
            </i>
            <br />
            <br />
            Whenever possible, I apply my passion for developing products with{" "}
            <i>
              <b className="text-[#00debf]">Modern JavaScript Libraries and Frameworks</b>
            </i>{" "}
            like{" "}
            <i>
              <b className="text-[#00debf]">React.js</b>
            </i>.
          </p>
        </div>

        {/* Avatar Section */}
        <div className="w-full md:w-4/12 flex justify-center">
          <img
            className="h-auto my-10 max-w-xs sm:max-w-sm lg:max-w-md"
            src={Logo2}
            alt="Avatar Logo"
          />
        </div>
      </div>
    </div>
    {/* Second Section ended*/}

    {/* third section started  */}
    <div className="min-h-screen flex items-center text-center justify-center bg-cover bg-center">
  <div className="w-full sm:w-3/4 md:w-2/3 lg:w-1/2 max-w-4xl rounded bg-emerald-900 bg-opacity-30 backdrop-blur-sm p-6 md:p-8 lg:p-10">
<h1 className='text-4xl lg:text-3xl xl:text-4xl mt-5 mb-5 font-poppins leading-tight text-white'>
 FIND ME ON
</h1>
<p className="mt-6 text-base sm:text-sm font-poppins font-light text-white leading-relaxed">FEEL FREE TO <span className="text-[#62f0dd]">CONNECT</span> WITH ME</p>
  {/* social media icons  */}
  <ul className="flex justify-center mt-8 space-x-5">
  <li className="rounded-full duration-300 p-1.5 hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
    <a
      href="#"
      className="text-[#4aeede]"
    >
      <svg
        className="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </li>
  <li className="rounded-full duration-200 p-1.5 hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
    <a
      href="#"
      className="text-[#4aeede]"
    >
      <svg
        className="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </li>
  <li className="rounded-full duration-200 p-1.5 hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
    <a
      href="#"
      className="text-[#4aeede]"
    >
      <svg className="h-10 w-10 p-1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
    width="800px" height="800px" viewBox="0 -28.5 256 256" version="1.1" preserveAspectRatio="xMidYMid">
    <g>
        <path
            d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
            fill="#4aeede" fillRule="nonzero">
        </path>
    </g>
</svg>

    </a>
  </li>
  <li className="rounded-full duration-200 p-1.5 hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
    <a
      href="#"
      className="text-[#4aeede]"
    >
      <svg
        className="w-10 h-10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    </a>
  </li>
  <li className="rounded-full duration-200 p-1.5 hover:shadow-inner hover:shadow-[#4aeede] bg-emerald-900">
  <a
    href="https://www.linkedin.com"
    aria-label="Find us on LinkedIn"
    target="_blank"
    rel="noopener"
    className="text-[#4aeede]"
  >
    <svg
      className="w-10 h-10 p-1.5"
      fill="currentColor"
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path
        d="M44.45 0H3.55A3.5 3.5 0 0 0 0 3.46v41.07A3.5 3.5 0 0 0 3.54 48h40.9A3.51 3.51 0 0 0 48 44.54V3.46A3.5 3.5 0 0 0 44.45 0Zm-30.2 40.9H7.11V18h7.12v22.9Zm-3.57-26.03a4.13 4.13 0 1 1-.02-8.26 4.13 4.13 0 0 1 .02 8.26ZM40.9 40.9H33.8V29.77c0-2.66-.05-6.08-3.7-6.08-3.7 0-4.27 2.9-4.27 5.89V40.9h-7.1V18h6.82v3.12h.1c.94-1.8 3.26-3.7 6.72-3.7 7.21 0 8.54 4.74 8.54 10.91V40.9Z"
        fill="currentColor"
      ></path>
    </svg>
  </a>
</li>

</ul>

  {/* .....  */}
  </div>
</div>
    {/* third Section ended*/}

  </div>
</section>

    
      
    </div>

    </>

  )
}

export default App