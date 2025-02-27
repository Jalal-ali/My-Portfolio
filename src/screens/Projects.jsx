import BlurText from '../components/BlurText'
import ShinyText from '../components/ShinyText'
import Weather from "../assets/projects/weather.png"
import Github from "../assets/github.svg"
import Demo from "../assets/demo.svg"

const Projects = () => {
    return (

        <>
            <section className="max-w-full w-full bg-[#123128] bg-opacity-60 text-white">
                <div className="max-w-full w-full px-6 py-7 sm:px-10 lg:px-26 overflow-hidden">
                    {/* heading  */}
                    <div className="w-full my-6 mb-10 md:mb-0 text-center">
                        <h1>
                            <BlurText
                                text={
                                    <>
                                        Professional <span className="text-[#00debf]"> Skillset </span>
                                    </>
                                }
                                delay={30}
                                animateBy="words"
                                direction="top"
                                className="mb-2 text-3xl sm:text-4xl font-bold"
                            />
                        </h1>
                        <p className="mt- text-center text-base sm:text-lg text-gray-300 leading-relaxed">
                            <ShinyText text="Just some shiny text!" disabled={false} speed={3} className='custom-class' />
                        </p>
                    </div>
                    {/* projs  */}
                    <div className="flex flex-wrap justify-center items-center gap-7 mt-8 space-y-2 min-h-screen">
                        {/* card  */}
                        <div className="bg-transparent rounded-lg border-[#00dec02a] border-2 shadow-md hover:shadow-lg hover:shadow-[#00dec027] shadow-[#00dec027] transform transition-transform duration-500 hover:scale-105 overflow-hidden max-w-xs w-auto">
                            {/* Top Bar */}
                            <div className="w-auto p-2 mx-auto object-cover">
                                <div className="w-full h-9 rounded-t-lg bg-gray-950 flex justify-start items-center space-x-1 px-3">
                                    <span className="w-2.5 h-2.5 rounded-full bg-red-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500"></span>
                                    <span className="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                                </div>
                                {/* Image*/}
                                <div className="bg-gray-700 border-t-0 w-full h-48 overflow-hidden rounded-b-lg">
                                    <img
                                        src={Weather}
                                        alt="weather-app"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                            {/* Bottom Bar */}
                            <div className="p-4">
                                <h2 className="text-xl font-semibold text-center text-slate-200 mb-2">Beautiful Mountain View</h2>
                                <p className="text-white text-sm text-center leading-tight mb-3">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam eu sapien porttitor, blandit velit ac, vehicula elit.
                                </p>
                                <div className="flex mt-6 justify-around mx-4 items-center">
                                    {/* btns  */}
                                    <a href="https://github.com/Jalal-ali/weather-app"
                                     target="_blank">
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-transparent duration-100 bg-gradient-to-br from-[#00dec0b2] to-[#2d6e6582] hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-[#00dec08e]">
                                        <span className="flex gap-2 items-center  relative px-3 py-2 transition-all ease-in duration-75  bg-[#123128] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                            <img className='w-6 h-6' src={Github} alt="" />
                                            GitHub
                                        </span>
                                    </button>
                                    </a>
                                    <a href="https://weather-app-rho-dusky.vercel.app/"
                                    target="_blank">
                                    <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-transparent duration-100 bg-gradient-to-bl from-[#00dec0b2] to-[#2d6e659b] hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-[#00dec08e]">
                                        <span className="flex gap-1 items-center relative px-4 py-2 transition-all ease-in duration-75 bg-[#123128] rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        <img className='w-6 h-6' src={Demo} alt="" />
                                            Demo
                                        </span>
                                    </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects