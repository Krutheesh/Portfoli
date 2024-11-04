import React from "react";
import {MdEmail} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import {MdLocationOn} from 'react-icons/md'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
const Contact = () => {

  return (
   <div id="contact" className="pb-10 w-full px-4">
     <h3 className="text-4xl font-semibold text-center pb-10">
       My <span className="text-sky-500">Contact</span>
        </h3>
        <div className="flex flex-col justify-center items-center ">
        <div className="flex w-[100%] md:w-[65%] flex-col md:flex-row justify-center md:space-x-5 items-center">
        
        <a className="p-5 w-[90%] md:w-full border-2 text-sky-500 my-2 border-sky-900 rounded-md" href="mailto:krutheeshsiripuram@gmail.com">Email : krutheeshsirpuram@gmail.com</a>

        <a className="p-5 w-[90%] md:w-full border-2 text-sky-500 my-2 border-sky-900 rounded-md"  href="tel:+918688191130">Mobile Number : 8688191130</a>

        

       
        
      </div>
      <div className="mt-8 text-3xl flex items-center md:justify-start md:pl-[0.3rem] justify-center gap-5">
          
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
          <div
            
            className="text-gray-600 hover:text-green-600 cursor-pointer "
          >
           <a href="https://api.whatsapp.com/send?phone=8688191130" target='_blank'>
           <ImWhatsapp />
           </a>
          
          </div>
            
          
        </div>
        </div>
       
   </div>
  );
};

export default Contact;
