import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import project1 from "../assets/images/project-1.png";
import project2 from "../assets/images/project-2.png";
import project3 from "../assets/images/project-3.png";
import project4 from "../assets/images/project4.png";
import project5 from "../assets/images/project5.png";
import netflix from "../assets/images/netflix.png";
import Ecommerce from "../assets/images/Ecommerce.png";
import DevTinder from "../assets/images/DevTinder.png";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper";

const Project = () => {
  const projects = [
    {
      img: Ecommerce,
      name: "YOURKART Ecommerce",
      github_link: 'https://github.com/Krutheesh/YOURKART_CLIENT',
      live_link: "https://yourkart-client.vercel.app/",
      discription:'YOURKART Ecommerce application is a user-friendly platform that allows customers to browse, shop, and manage orders effortlessly. Built with the MERN stack, it features a sleek, responsive design and secure payment processing. Users can create accounts, track their orders, and receive personalized product recommendations, enhancing the shopping experience while ensuring data security.'
      
    },
    {
      img: netflix,
      name: "NetflixGpt",
      github_link: 'https://github.com/Krutheesh/NetflixGpt',
      live_link: "https://krutheeshnetflixgpt.netlify.app/browse",
      discription:'Netflix GPT is a streaming platform that provides movie and show recommendations. Built with React, Redux Toolkit, and Tailwind CSS, it features an AI-driven search using the GPT-3.5 Turbo API. User authentication is handled via Firebase, while comprehensive movie data is sourced from the TMDB API.'
      
    },
    {
      img: DevTinder,
      name: "DevTinder",
      github_link: 'https://github.com/Krutheesh/DEV_TINDER_FRONTEND.git',
      live_link: "https://dev-tinder-frontend-chi.vercel.app",
      discription:'DevTinder is a web application for developers to connect and collaborate within the tech community. Built with the MERN stack, it allows users to create profiles and find like-minded individuals based on shared skills and interests. With a sleek, responsive design and secure user authentication, DevTinder provides a safe and seamless networking experience for developers.'
      
    },
    {
      img: project5,
      name: "Vote Application",
      github_link: 'https://github.com/Krutheesh/Voting',
      live_link: "https://voting-hu7e.onrender.com/",
      discription:'Developed a MERN stack voting application that facilitates user registration and party voting, complete with an intuitive admin panel for managing candidates. The application features a sleek, responsive user interface crafted using Tailwind CSS, ensuring a seamless user experience. Additionally, I implemented efficient admin controls for streamlined candidate management, enhancing both the scalability and efficiency of the voting process.'
      
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
      discription:'This movie search application features a beautiful user interface that allows users to search for any movie by name and view detailed information. Built using the TMDB API, it provides an engaging experience for movie enthusiasts to explore titles, ratings, and summaries in a seamless manner.'

    },
  ];
  return (
    <section id="projects" className="py-10 text-white">
      <div className="text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-cyan-600">Projects</span>
        </h3>
        
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
