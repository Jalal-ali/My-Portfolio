import BlurText from '../components/BlurText'
import ShinyText from '../components/ShinyText'
import Weather from "../assets/projects/weather.png"
import Card from '../components/Card'

const Projects = () => {
    const projects = [
        { title: "Weather App", description: "Description 1", image: Weather, githubLink: "https://github.com/Jalal-ali/weather-app", demoLink: "https://weather-app-rho-dusky.vercel.app/" },
        { title: "Meme Generator", description: "Description 2", image: "", githubLink: "https://github.com/Jalal-ali/meme-app", demoLink: "https://meme-generator-beta-self.vercel.app/"  },
        { title: "To-Do App", description: "Description 3", image: "", githubLink: "https://github.com/Jalal-ali/FullStack-Todo-App", demoLink: "https://full-stack-todo-app-phi.vercel.app/"  },
        { title: "Stop Watch", description: "Description 3", image: "", githubLink: "https://github.com/Jalal-ali/StopWatch", demoLink: "https://stop-watch-theta-ruby.vercel.app/"  },
        { title: "Counter", description: "Description 3", image: "", githubLink: "https://github.com/Jalal-ali/react-counter", demoLink: "https://react-counter-eta-liart.vercel.app/"  },
        { title: "Salt'n Pepper", description: "Description 3", image: "", githubLink: "https://github.com/Jalal-ali/resp-salt-n-pepper", demoLink: "https://jalal-ali.github.io/resp-salt-n-pepper/"  },
        { title: "Ockom's Site Clone", description: "Description 3", image: "", githubLink: "https://github.com/Jalal-ali/ockom-clone", demoLink: "https://ockom-clone.vercel.app/"  },
    ];
    
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
                    <div className="flex flex-wrap justify-center items-center gap-7 mt-1 space-y-2 min-h-screen">
                   { projects.map((projects, index) => (
                    <div key={index}>
                        <Card title={projects.title} description={projects.description} image={projects.image} githubLink={projects.githubLink} demoLink={projects.demoLink} />
                    </div>
))}
                        {/* card  */}
                        
                    </div>
                </div>
            </section>
        </>
    )
}

export default Projects