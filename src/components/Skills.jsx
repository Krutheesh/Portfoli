import React from "react";
import HTML from '../assets/skills_img/html.png';
import CSS from '../assets/skills_img/css.png';
import JavaScript from '../assets/skills_img/javascript.png';
import ReactImg from '../assets/skills_img/react.png';
import Node from '../assets/skills_img/node.png';
import FireBase from '../assets/skills_img/firebase.png';
import GitHub from '../assets/skills_img/github.png';
import Tailwind from '../assets/skills_img/tailwind.png';
import Mongo from '../assets/skills_img/mongo.png';


const Skills = () => {
  const skills = [HTML,CSS,JavaScript,ReactImg,Node,FireBase,GitHub,Tailwind,Mongo];
  return (
    <section id="skills" className="py-10 bg-gray-800 relative">
      <div className="mt-8 text-gray-100 text-center">
        <h3 className="text-4xl font-semibold">
          My <span className="text-sky-500">Skills</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">My knowledge</p>
        <div className="flex items-center justify-center gap-10 p-[2rem] px-[2rem] flex-wrap">
          {skills?.map((skill, i) => (
            <div
              key={i}
              className="border-2 group border-sky-500 relative min-w-[8rem] max-w-[7rem] md:min-w-[9rem]  bg-gray-900 p-5 rounded-xl"
            >
              <div
               
                className="w-30 h-30 flex items-center justify-center rounded-full"
              >
                <div className="text-6xl w-25 h-25 bg-gray-900 rounded-full flex items-center justify-center group-hover:text-sky-500">
                  <img src={skill} alt="" />
                </div>
              </div>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
