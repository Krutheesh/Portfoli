import React from "react";
import aboutImg from "../assets/images/about.png";
const About = () => {
 
  return (
    <section id="about" className="py-10 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          About <span className="text-cyan-600">Me</span>
        </h3>
        <h4 className="text-[1.5rem] p-1 px-[2rem]">A dedicated MERN Stack Developer </h4>
        <div className="flex md:flex-row flex-col-reverse mt-[3rem] items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-3 md:pr-[3rem]">
            <div className="text-gray-300 my-3">
              <p className="text-justify leading-7 w-10/10  mx-auto">
                As an experienced MERN Stack and WordPress Developer, I specialize in building scalable, responsive, and user-friendly web applications and websites. With expertise in React, Redux Toolkit, Node.js, Express.js, MongoDB, and WordPress, I deliver end-to-end solutions ranging from dynamic web apps to custom CMS-driven platforms. I excel at writing clean, optimized code, integrating modern tools and APIs, and designing intuitive user experiences with Tailwind CSS and SCSS. A strong collaborator, I thrive in cross-functional teams, driving projects from concept to deployment with a focus on performance and scalability.
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
      <div className="px-[6.5rem] py-[2rem]">
      
              <a href="https://drive.google.com/file/d/1Gi1qOlgxmAbWXooR4ZhrjCYINzS4DwFy/view" >
                <button className="btn-primary">Resume</button>
              </a>
      </div>
    </section>
  );
};

export default About;
