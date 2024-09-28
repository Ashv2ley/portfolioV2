import listifyLandingPage from "@/assets/images/listify-landing-page.png";
import soundcrateLandingPage from "@/assets/images/soundcrate-landing-page.png";
import tunesLandingPage from "@/assets/images/tunes-landing-page.png";
import Image from "next/image";
import { CircleCheck, MoveUpRight } from "lucide-react"
import grainImage from '@/assets/images/grain.jpg'


const portfolioProjects = [
  {
    company: "Ashley Anyanwu",
    year: "2023",
    title: "Listify",
    results: [
      { title: "To-do list web applications" },
      { title: "Boosts user productivity" },
      { title: "Track short-term/long-term goals" },
    ],
    link: "https://glistening-macaron-80db2c.netlify.app/",
    image: listifyLandingPage,
  },
  {
    company: "Ashley Anyanwu",
    year: "2024",
    title: "Tunes",
    results: [
      { title: "Discover new arsists & sounds" },
      { title: "Explore new genres" },
      { title: "Stay updated on popular music" },
    ],
    link: "https://mellifluous-bonbon-ea93e4.netlify.app/",
    image: tunesLandingPage,
  },
  {
    company: "Ashley Anyanwu and Peers",
    year: "2024",
    title: "SoundCrate",
    results: [
      { title: "Music review web application" },
      { title: "Rate and review songs from favorite artists" },
      { title: "Follow friends and other audiophiles" },
    ],
    link: "https://soundcrate-adi2p07bp-soundcrate.vercel.app/",
    image: soundcrateLandingPage,
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 py-28 md:py-32 lg:py-24">
      <div className="container max-w-2xl mx-auto">
        <div className="flex justify-center">
          <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Real-world Projects</p>
        </div>
        <h2 className="font-calistoga text-3xl md:text-4xl text-center mt-5">Featured Projects</h2>
        <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 mx-w-md mx-auto">See how I solve problems through engaging digital experiences</p>
        <div className="mt-10 md:mt-15 flex flex-col gap-10">
          {portfolioProjects.map((project, projectIndex) => (
            <div 
            key={project.title} 
            className="bg-gray-800 overflow-hidden z-0 after:z-10 rounded-3xl after:content-[''] after:absolute after:inset-0 after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/20 px-6 pt-6 md:pt-8 md:px-8 lg:pt-10 lg:px-12 after:pointer-events-none sticky"
            style={{
              top: `calc(64px + ${projectIndex * 40}px)`
            }}
            > 
              <div className="absolute inset-0 -z-10 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
              <div className="lg:grid lg:grid-cols-2 lg:gap-10">
                <div className="lg:pb-10"> 
                  <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                    <span>{project.company}</span>
                    <span>•</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-calistoga text-2xl mt-2 md:text-4xl md:mt-4">{project.title}</h3>
                  <hr className="border-t-2 border-white/5 mt-3 md:mt-4"/> 
                  <ul className="flef flex-col gap-3 mt-3 md:mt-4">
                    {project.results.map(result => (
                      <li key={result.title} className="flex gap-2 text-sm md:text-base text-white/50 mt-2"> 
                        <CircleCheck className="size-5 md:size-6"/>
                        <span>{result.title}</span>
                      </li>
                    ))}
                  </ul>
                  <a href={project.link}>
                    <button className="inline-flex items-center justify-center gap-2 mt-6 bg-white text-gray-950 h-12 w-full md:w-auto px-6 md:px-20 rounded-xl font-semibold cursor-pointer"> {/* Reduced margin and padding */}
                      <span>Visit Live Site</span>
                      <MoveUpRight className="size-4"/>
                    </button>
                  </a>
                </div>
                <div className="relative">
                  <Image 
                  src={project.image} 
                  alt={project.title} 
                  className="mt-6 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none"
                  /> 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

