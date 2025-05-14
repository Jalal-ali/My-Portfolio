import PropTypes from "prop-types";
import Github from "../assets/github.svg"
import Demo from "../assets/demo.svg"
const Card = ({ image, title, description, githubLink, demoLink }) => {
    return (
        <>
           {/* card */}
<div className="bg-transparent rounded-lg border-[#00dec02a] group border-2 shadow-md hover:shadow-lg hover:shadow-[#00dec027] shadow-[#00dec027] transform transition-transform duration-500 hover:scale-105 overflow-hidden max-w-xs w-auto group">
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
                src={image}
                alt="img"
                className="w-full h-full object-cover"
            />
        </div>
    </div>
    {/* Bottom Bar */}
    <div className="p-4">
        <h2 className="text-xl font-semibold text-center text-slate-200 mb-2">{title}</h2>
        {/* Description */}
          <p className="text-white text-sm text-center leading-tight mb-3 line-clamp-3 group-hover:line-clamp-none group-hover:transition-all group-hover:duration-75">
      {description}
    </p>

         <div className="flex mt-6 justify-around mx-4 items-center">
                        {/* btns  */}
                        {githubLink && (
                            <a href={githubLink} target="_blank" rel="noopener noreferrer">
                                <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-transparent duration-100 bg-gradient-to-br from-[#00dec0b2] to-[#2d6e6582] hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-[#00dec08e]">
          <span className="flex gap-2 items-center px-3 py-2 bg-[#123128] rounded-md hover:bg-transparent">
            <img className="w-6 h-6" src={Github} alt="GitHub" />
            GitHub
          </span>
        </button>
                            </a>
                        )}
                        <a href={demoLink}
                            target="_blank">
                             <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg bg-transparent duration-100 bg-gradient-to-bl from-[#00dec0b2] to-[#2d6e659b] hover:text-white dark:text-white focus:ring-2 focus:outline-none focus:ring-[#00dec08e]">
        <span className="flex gap-1 items-center px-4 py-2 bg-[#123128] rounded-md hover:bg-transparent">
          <img className="w-6 h-6" src={Demo} alt="" />
          Demo
        </span>
      </button>
                        </a>
                    </div>

    </div>
</div>


        </>
    )
}
Card.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    githubLink: PropTypes.string.isRequired,
    demoLink: PropTypes.string.isRequired,
};

export default Card