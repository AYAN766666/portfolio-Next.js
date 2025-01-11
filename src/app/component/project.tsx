import Link from "next/link";
import Image from "next/image"; 
import resume from '../../../public/project.jpg' 
import port from '../../../public/fort.jpg' 
import skill from '../../../public/skills.jpg'
export default function Project (){
    return(
        <div   id="project"    >
<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
        My project
      </h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
       
      "I have developed a project using Next.js, Tailwindcss, CSS, HTML, Javascript, and TypeScript. As a frontend web developer, I have utilized
       my skills in frontend development to create this project. With my expertise in Next.js, Tailwindcss, CSS, HTML, Javascript, and TypeScript
      , I am confident in my ability to develop high-quality frontend projects."
      </p>
    </div>
    <div className="flex flex-wrap -m-5   -mt-9   "> 
        {/*project*/}
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer    "      >
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={resume}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Hachathon project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              resume builder
            </h1>
            <p className="leading-relaxed line-clamp-2">
              
            "Hello, I want to share my resume with you. I am a frontend web developer 
            
            </p> 
            <Link target="_blank" href='https://milestone-4-hackathon.netlify.app/'    >
            <p className="leading-relaxed  text-blue-500 hover:underline     ">View Project..</p> 
            </Link> 

          </div>
        </div>
      
      
        
        
      </div> 
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer    "      >
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={port}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Hachathon project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              resume builder
            </h1>
            <p className="leading-relaxed line-clamp-2">
              
            "Hello, I want to share my resume with you. I am a frontend web developer 
            
            </p> 
            <Link target="_blank" href='https://milestone-4-hackathon.netlify.app/'    >
            <p className="leading-relaxed  text-blue-500 hover:underline     ">View Project..</p> 
            </Link> 

          </div>
        </div>
      
      
        
        
      </div> 
      <div className="lg:w-1/3 sm:w-1/2 p-4 cursor-pointer    "      >
        <div className="flex relative">
          <Image
            alt="gallery"
            className="absolute inset-0 w-full h-full object-cover object-center"
            src={skill}
          />
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
              Personal infomation Project
            </h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
              Personal Infomation
            </h1>
            <p className="leading-relaxed   line-clamp-2">
              
            "Hello, I want to share my personal information with you. I am a frontend web developer 
            
            </p> 
            <Link target="_blank" href='https://hackathon-milestone-1-project.netlify.app/'    >
            <p className="leading-relaxed  text-blue-500 hover:underline     ">View Project..</p> 
            </Link> 
            
          </div>
      
      
        
        
      
        </div>
      
      
        
        
      </div>
    </div>
  </div>
</section>




        </div>
    )
}