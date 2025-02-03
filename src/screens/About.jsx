import Logo from '../assets/Code-typing.svg'
import Html from '../assets/html.svg'
import CSS from '../assets/css.svg'
import JS from '../assets/javascript.svg'
import TS from '../assets/typescript.svg'
import Tailwind from '../assets/tailwind.svg'
import Bootstrap from '../assets/bootstrap.svg'
import ReactJS from '../assets/reactjs.svg'
import Node from '../assets/node.svg'
import Next from '../assets/next.svg'
import Express from '../assets/express.svg'
import MongoDB from '../assets/mongodb.svg'
import GIT from '../assets/git.svg'
import PY from '../assets/python.svg'
import Expo from '../assets/expo.svg'
const About = () => {
  return (
    <>
      <section className="max-w-full w-full bg-[#123128] bg-opacity-60 text-white">
        <div className="max-w-full w-full px-6 sm:px-10 lg:px-26 py-6 overflow-hidden">

          {/* 1st section  */}
          <div className="mt-16 px-6 sm:px-10 lg:px-0">
                <div className="flex flex-wrap text-center md:text-left items-center">
                  {/* Description Section */}
                  <div className="w-full md:w-8/12 mb-10 md:mb-0 text-center">
                    <h1 className="text-3xl sm:text-4xl font-bold">
                      Who <span className="text-[#00debf]"> I AM ? </span> 
                    </h1>
                    <p className="mt-6 text-start text-base sm:text-lg text-gray-300 leading-relaxed">
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
                    <p className="mt-6 text-start font-semibold sm:text-lg text-gray-300 leading-relaxed">
                    Beyond coding, I enjoy activities that foster personal growth!

                    </p>
                  </div>
          
                  {/* Avatar Section */}
                  <div className="w-full md:w-4/12 flex justify-center">
                    <img
                      className="h-auto my-10 max-w-xs sm:max-w-sm lg:max-w-md"
                      src={Logo}
                      alt="Avatar Logo"
                    />
                  </div>
                </div>
              </div>
              {/* 1st sect ended  */}

              {/* 2nd section  */}
              <div className="mt-16 text-center items-center px-6 sm:px-10 lg:px-0">
                {/* heading  */}
                <div className="w-full mb-10 md:mb-0 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold">
                      Professional <span className="text-[#00debf]"> Skillset </span> 
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-5 my-8">
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={Html} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={CSS} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={JS} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={TS} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={Tailwind} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={Bootstrap} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={ReactJS} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={Node} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={Next} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={Express} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={MongoDB} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={GIT} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={PY} alt="logo" className='lg:w-32 w-24' /></div>
                  <div className="rounded border-[#00debf] border shadow-md shadow-[#00dec027] lg:py-4 py-4 lg:px-10 px-4"><img src={Expo} alt="logo" className='lg:w-32 w-24' /></div>
                </div>
              </div>
        </div>
      </section>
    </>
  )
}

export default About