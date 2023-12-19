import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
 
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <h4 className="text-[1.5rem] p-1 px-[2rem]">A dedicated Front-end Developer </h4>
        <div className="flex md:flex-row flex-col-reverse mt-[3rem] items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-3 md:pr-[3rem]">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-10/10  mx-auto">
                As a Junior Front-End Developer, I possess an impressive arsenal
                of skills in HTML, CSS, JavaScript, React, Tailwind, and SCSS. I
                excel in designing and maintaining responsive websites that
                offer a smooth user experience. My expertise lies in crafting
                dynamic, engaging interfaces through writing clean and optimized
                code and utilizing cutting-edge development tools and
                techniques. I am also a team player who thrives in collaborating
                with cross-functional teams to produce outstanding web
                applications.
              </p>
            
              
              
            </div>
          </div>
          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">
              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-sky-500 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[6.5rem] py-[2rem">
      
              <a href="https://drive.google.com/file/d/1UCVLl09xevtKIEi_yglxeM5ylF86Hbem/view?usp=sharing" >
                <button className="btn-primary">Resume</button>
              </a>
      </div>
    </section>
  );
};

export default About;
