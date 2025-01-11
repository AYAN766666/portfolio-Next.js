import Image from "next/image" 
import abp from '.././../../public/ayan.jpg'
export default  function About (){ 

return(

    <div id="about">

<section className="text-gray-600 body-font      ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0 ">
      <Image
        className="object-cover object-center rounded mx-auto  w-[300px] h-[400px]     "
        alt="hero"
        src={abp} 
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

      As a seasoned web developer with a passion for building fast, secure, and scalable websites, I help businesses and individuals create stunning online presence. With expertise in Next.js HTML and Tailwindcss, I deliver high-performance web applications that exceed expectations. With over [number] years of experience in web development, I have honed my skills in Next.js HTML and Tailwindcss to provide top-notch solutions for my clients. My expertise includes:
 - Building fast and secure websites that load in seconds
 Creating responsive and mobile-friendly designs that adapt to any screen size
 Developing high-performance web applications that scale with ease
 Ensuring website security and compliance with industry standards
 Providing ongoing support and maintenance to ensure website longevity
My approach is centered around delivering exceptional results, exceeding client expectations, and building long-term relationships. I take the time to understand my clients unique needs and goals, and work closely with them to bring their vision to life. Whether you are looking to build a new website, revamp an existing one, or simply need expert advice, I am here to help. Lets connect and discuss your project today!
What I Offer:
 Free consultation to discuss your project goals and requirements
- Personalized solutions tailored to your specific needs and budget
 Ongoing support and maintenance for continuous improvement
- Collaborative approach to ensure your vision is brought to life
Lets Connect:
If you are looking for a reliable and skilled web developer to bring your web project to life, lets connect! I am excited to discuss your ideas and help you achieve your online goals.
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
