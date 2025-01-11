import Image from "next/image" 
import about from '.././../../public/ayan.jpg'
export default  function About (){ 

return(

    <div id="about">

<section className="text-gray-600 body-font      ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto  w-[300px] h-[400px]     "
        alt="hero"
        src={about} 
        width={300} 
        height={500}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        About Me
        <br className="hidden lg:inline-block" />
        
      </h1> 
      
      
      <p className="mb-5 leading-relaxed">

      "I'm Ayan, a first-year student with a passion for web development. As a frontend web developer, I specialize in building fast, 
      scalable, and user-friendly web applications using Next.js, Tailwind CSS, HTML, CSS, JavaScript, and TypeScript.
       With a strong foundation in these technologies, I'm excited to continue learning and growing as a developer."
      
      </p> 
      <p className="mb-5 leading-relaxed">
      "In addition to web development, I'm also pursuing a course in Artificial Intelligence, with a goal to become an expert in 
      AI development in the future. I'm fascinated by the potential of AI to transform industries and improve lives, and I'm committed to contributing to this exciting field. My ultimate goal
       is to become a leading AI developer and create innovative solutions that make a positive impact on society."
      </p>
      <div className="flex justify-center"> 
        <a href="w-8ben.pdf"   >
        <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
          View CV
        </button>
        </a>
        
      </div>
    </div>
  </div>
</section>














    </div>
)
} 
