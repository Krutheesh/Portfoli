import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import netflix from "../assets/images/netflix.png";
import project_person from "../assets/images/project_person1.png";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: netflix,
      name: "NetflixGpt",
      github_link: 'https://github.com/Krutheesh/NetflixGpt',
      live_link: "https://krutheeshnetflixgpt.netlify.app/browse",
      discription:'Built using React, Redux Toolkit, Tailwind CSS and integrated with Firebase for user authentication.  Implemented a unique Chat GPT search using GPT-3.5 Turbo API for intuitive movie searches. Proficiently utilized TMDB API for comprehensive movie data retrieval, showcasing adeptness in seamless integration within React applications.'
      
    },
    {
      img: project1,
      name: "Ecommerce",
      github_link: 'https://github.com/Krutheesh/Ecommerce',
      live_link: "https://ecomreactfrontend.netlify.app/",
      discription:' With a focus on simplicity and clean design, this store prioritize user experience, making it easy for customers to find and purchase the products they need'
      
    },
    {
      img: project2,
      name: "Shopping Cart",
      github_link: "https://github.com/Krutheesh/Shopping_cart",
      live_link: "https://shopping-cart-app-kruth.netlify.app/",
      discription:'Shopping Cart, Where user can view the products add products to cart it has beautiful user interface and for data Fake store api is used '

    },
    {
      img: project3,
      name: "Movie app",
      github_link: "https://github.com/Krutheesh/Movie_App",
      live_link: "https://krutheeshimdb.netlify.app/",
      discription:'It has Beautiful user interface, user can search any movie with movie name, then user can see all information. TMDB API is used '

    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My awesome works</p>
      </div>
      <br />
      <div className="flex max-w-6xl gap-6 px-5 mx-auto items-center relative">
        <div className=" w-full mx-[2rem]">
     
            {projects.map((project_info, i) => (
              
                <div className="md:flex justify-between items-center h-full w-full p-4 space-y-3 my-[4rem] bg-slate-700 rounded-xl">
                  <div className="md:w-[55%]" >
                  <img src={project_info.img} alt="" className="w-full rounded-lg" />
                  </div>
                 
                 <div className="md:w-[40%] text-center">
                  
                 <h3 className="text-xl text-center text-sky-500 mb-[1rem]">{project_info.name}</h3>
                 <p>
                  {
                    project_info.discription
                  }
                  </p>
                  <div className="space-x-3 mt-[1rem]">
                    <span className=" bg-gray-800 text-white px-2 py-1">React</span>
                    <span className=" bg-gray-800 text-white px-2 py-1">Tailwind Css</span>
                  </div>

                  <div className="flex gap-3 justify-around mt-[1rem] ">
                    <a
                      href={project_info.github_link}
                      target="_blank"
                      className="text-sky-500 hover:opacity-50 px-2 py-1 inline-block"
                    >
                      Github
                    </a>
                    <a
                      href={project_info.live_link}
                      target="_blank"
                      className="text-sky-500 hover:opacity-50 px-2 py-1 inline-block"
                    >
                      Live Demo
                    </a>
                  </div>

                 </div>
                </div>
             
            ))}
        
        </div>
        
      </div>
    </section>
  );
};

export default Project;
