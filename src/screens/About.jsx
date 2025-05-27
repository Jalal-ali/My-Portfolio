// import { useState } from 'react'
import Logo from '../assets/Code-typing.svg'
import arrow from '../assets/arrow.svg'
import GitHubCalendar from 'react-github-calendar';
// import ShinyText from '../components/ShinyText.jsx'

const About = () => {
  return (
    <>
      <section className="max-w-full w-full bg-[#123128] bg-opacity-60 text-white">
        <div className="max-w-full w-full px-6 sm:px-10 lg:px-28 overflow-hidden">

          {/* 1st section  */}
          <div className="mt-10 px-6 sm:px-10 lg:px-0">
            <div className="flex flex-wrap text-center md:text-left items-center">
              {/* Description Section */}
              <div className="w-full md:w-8/12 mb-10 md:mb-0 text-center">
                <h1 className="text-3xl sm:text-4xl font-bold">
                  Who <span className="text-[#00debf]"> I AM ? </span>
                </h1>
                <p className="mt-6 text-start text-base font-sans sm:text-lg  ">
                  I enjoy crafting web technologies and{" "}
                  {/* <i>
                    <b className="text-[#00debf]">Web Technologies and Products</b>
                  </i>{" "} */}
                  products, and I’m particularly curious about{" "}
                  <i>
                    <b className="text-[#00debf]">
                      Deep Learning and Machine Language Processing.
                    </b>
                  </i>

                </p>
                <p className="mt-20 text-start font-semibold sm:text-lg text-white leading-relaxed">
                  Beyond coding, I enjoy activities that foster personal growth!

                </p>
                {/* list  */}
                <div className="flex flex-col items-start justify-center w-full mt-2 gap-1">
                  <div className="p-2">
                    <div className="rounded inline-flex gap-2 items-center w-auto">
                      <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />
                      <span className="font-semibold text-lg font-sans mx-1">Traveling</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="rounded inline-flex gap-2 items-center w-auto">
                      <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />
                      <span className="font-semibold text-lg font-sans mx-1">FootBall</span>
                    </div>
                  </div>
                  <div className="p-2">
                    <div className="rounded inline-flex gap-2 items-center w-auto">
                      <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />
                      <span className="font-semibold text-lg font-sans mx-1">Exercise</span>
                    </div>
                  </div>

                </div>
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
            <div className="w-full mb-1 md:mb-0 text-center">
              <h1 className="text-3xl sm:text-4xl font-bold my-4">
                What <span className="text-[#00debf]"> I DO ? </span>
              </h1>
              
              {/* list  */}
              <div className="flex flex-col items-center justify-center w-full gap-1">
                <div className="p-2">
                  <div className="rounded bg-emerald-900 shadow-lg bg-opacity-30 backdrop-blur-sm inline-flex p-4 items-center w-auto">
                    <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />

                    <span className="font-medium text-base mx-5">Custom Web Solutions
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="rounded bg-emerald-900 shadow-lg bg-opacity-30 backdrop-blur-sm inline-flex p-4 items-center w-auto">
                    <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />
                    <span className="font-medium text-base mx-5">Deployment & Hosting
                    </span>

                  </div>
                </div>
                <div className="p-2">
                  <div className="rounded bg-emerald-900 shadow-lg bg-opacity-30 backdrop-blur-sm inline-flex p-4 items-center w-auto">
                    <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />

                    <span className="font-medium mx-5">MERN Stack Development
                    </span>
                  </div>
                </div>
                <div className="p-2">
                  <div className="rounded bg-emerald-900 shadow-lg bg-opacity-30 backdrop-blur-sm inline-flex p-4 items-center w-auto">
                    <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />
                    <span className="font-medium mx-5">Full-Stack Web Development</span>

                  </div>
                </div>
                <div className="p-2">
                  <div className="rounded bg-emerald-900 shadow-lg bg-opacity-30 backdrop-blur-sm inline-flex p-4 items-center w-auto">
                    <img className='w-8 mt-1 h-8' src={arrow} alt="arrow" />
                    <span className="font-medium text-base mx-5">Database Integration & Management
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd section end  */}
          <div className="flex flex-col items-center justify-center my-10">
            <h1 className="text-3xl text-center font-bold mb-6">
              Days I<span className="text-[#00debf]"> Code</span>
            </h1>
            <GitHubCalendar
              username="mabdullahjs"
              blockSize={15}
              blockMargin={4}
              fontSize={16}
              theme={{
                light: ['#ebedf0', '#c6e48b', '#7bc96f', '#239a3b', '#196127'], // Light theme colors
                dark: ['#ebedf0', '#00debf', '#00bfa5', '#00897b', '#004d40']  // Darker custom colors
              }}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default About