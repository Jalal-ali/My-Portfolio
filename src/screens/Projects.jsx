import BlurText from '../components/BlurText'
import ShinyText from '../components/ShinyText'
import Weather from "../assets/projects/weather.png"
import Meme from "../assets/projects/meme.png"
import Todo from "../assets/projects/todo.png"
import Watch from "../assets/projects/watch.png"
import Counter from "../assets/projects/counter.png"
import Ockom from "../assets/projects/ockoms.png"
import Salt from "../assets/projects/salt.png"
import Ecommerce from "../assets/projects/ecommerce.png"
import Shopping from "../assets/projects/shopping.png"
import Card from '../components/Card'

const Projects = () => {
    const projects = [
        { title: "Weather App", description: "Designed and developed a cutting-edge weather application utilizing React JS and Tailwind CSS, harnessing the power of API calls to fetch real-time weather data. This innovative solution provides users with accurate and reliable weather information, delivering a seamless and engaging user experience.", image: Weather, githubLink: "https://github.com/Jalal-ali/weather-app", demoLink: "https://weather-app-rho-dusky.vercel.app/" },
        { title: "Meme Generator", description: "Meme Generator Web Application using Next.js and Tailwind CSS, featuring dynamic query parameters for efficient single page routing. In this meme app users can select any meme template, create multiple memes effortlessly, and download their creations to their devices as well.", image: Meme, githubLink: "https://github.com/Jalal-ali/meme-app", demoLink: "https://meme-generator-beta-self.vercel.app/"  },
        { title: "Ockom's Site Clone", description: "Visually engaging clone website built using Next.js, TypeScript, Tailwind CSS, and Three.js. It features smooth and interactive 3D Animation to enhance user experience, delivering a fast and modern UI.", image: Ockom, githubLink: "https://github.com/Jalal-ali/ockom-clone", demoLink: "https://ockom-clone.vercel.app/"  },
        { title: "Salt'n Pepper", description: "A creatively designed clone website developed using HTML and custom CSS, featuring responsive design through media queries. It includes smooth and interactive to elevate the user experience, delivering a fast, clean, and modern interface", image: Salt , githubLink: "https://github.com/Jalal-ali/resp-salt-n-pepper", demoLink: "https://jalal-ali.github.io/resp-salt-n-pepper/"  },
        { title: "e-Commerce", description: "Robust e-Commerce website by using (React)'s efficient single-page routing and (Tailwind CSS)'s design framework, resulting in a fast, intuitive, and mobile-friendly online shopping platform that drives customer engagement and sales.", image: Ecommerce , githubLink: "https://github.com/Jalal-ali/React-eCommerce", demoLink: "https://react-e-commerce-liard.vercel.app/"  },
        { title: "Online marketplace", description: "Developed the front end of an online marketplace using WordPress tools like Elementor, focusing on responsive design, user-friendly layout, and a smooth browsing experience.", image: Shopping , githubLink: null , demoLink: "https://shoppingway.pk/"  },
        { title: "To-Do App", description: "I developed and designed an interactive, responsive To-Do App using HTML, JavaScript (JS), and Tailwind CSS for a stunning design. This project showcases and highlights my front-end skills, UI expertise, and proficiency in web development.", image: Todo, githubLink: "https://github.com/Jalal-ali/FullStack-Todo-App", demoLink: "https://full-stack-todo-app-phi.vercel.app/"  },
        { title: "Stop Watch", description: "Developed a stopwatch using HTML , JavaScript and i used TailwindCSS for enchanting UI which showcases my skills in front-end development, UI expertise, and JavaScript functionality. The stopwatch features accurate timekeeping, user-friendly interface, and intuitive controls.", image: Watch, githubLink: "https://github.com/Jalal-ali/StopWatch", demoLink: "https://stop-watch-theta-ruby.vercel.app/"  },
        { title: "Counter", description: "Developed a responsive counter web app using React and Tailwind CSS, featuring real-time state updates and a clean, modern UI. Implemented interactive buttons with smooth styling and ensured optimal performance across devices.", image: Counter, githubLink: "https://github.com/Jalal-ali/react-counter", demoLink: "https://react-counter-eta-liart.vercel.app/"  },
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