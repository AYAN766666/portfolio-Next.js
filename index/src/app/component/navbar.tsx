
import Image from "next/image"; 
import image from '../../../public/lobo.jpg'
import Link from "next/link";
import { BiCloudDownload } from "react-icons/bi";
import { client } from "@/sanity/lib/client";

  

 export default async function Navbar(){ 

  const data = await client.fetch(`*[_type == "homePage"][0] {
    button1 { text, link },
    button2 { text, link },
    button3 { text, link },
    button4 { text, link }
  }`)
  

    return(
        <div className="bg-white z-50 sticky top-0"  >
<header className="text-gray-600 body-font">
  <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      
      <Image className="rounded-full w-[45px]  " src={image} alt="No image"   height={100}  width={100}    ></Image>
      <span className="ml-3 text-xl">LOVE CODING</span>
    </a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
      <Link href={"/"} className="mr-5 hover:text-blue-600">  {data.button1?.text}      </Link>
      <Link href={'#about'} className="mr-5 hover:text-blue-600">   {data.button2?.text}    </Link>
      <Link href={"#skills"} className="mr-5 hover:text-blue-600">   {data.button3?.text}      </Link>
      <Link href={"#project"} className="mr-5 hover:text-blue-600">    {data.button4?.text}     </Link> 
      <Link href={"#contact      "} className="mr-5 hover:text-blue-600">Contact</Link>

    </nav> 
    <a href="">
    <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
       
       Coming Soon
      <BiCloudDownload className="text-xl ml-2" />
       
    </button> 
    </a>
  </div>
</header>









        </div>
    )
 }