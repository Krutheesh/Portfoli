import React from "react";
import hero from "../assets/images/hero.png";
import {BsLinkedin, BsGithub} from 'react-icons/bs'
const Hero = () => {
 
  return (
    <section
      id="home"
      className="min-h-screen flex  py-[8rem] md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">
        <img src={hero} alt="" className=" hidden md:block md:w-[60%] h-[100%] p-3 object-cover bg-sky-500 rounded-xl" />
      </div>
      <div className="flex-1">
        <div className="md:text-left text-center">
          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">
            <span className="text-sky-500 md:text-6xl text-5xl">
              Hello!
              <br />
            </span>
            My Name is <span>Krutheesh</span>
          </h1>
          <div className="w-max p-2">
          <p className="  animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-3  md:text-2xl text-lg md:leading-normal leading-5 mt-4 font-bold text-sky-400">
            Frontend Developer 
          </p>

          </div>
          
          <button className="btn-primary mt-8">Contact Me</button>
          <div className="mt-8 text-3xl flex items-center md:justify-start md:pl-[1.8rem] justify-center gap-5">
            
              <div
              
                className="text-gray-600 hover:text-white cursor-pointer "
              >
                 <a href="https://www.linkedin.com/in/krutheesh-siripuram-791086215/">
               <BsLinkedin/>
               </a>
              </div>
              <div
              
              className="text-gray-600 hover:text-white cursor-pointer "
            >
             <a href="https://github.com/Krutheesh">
             <BsGithub/>
             </a>
            
            </div>
              
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
