import React from "react";
import {MdEmail} from 'react-icons/md'
import {ImWhatsapp} from 'react-icons/im'
import {MdLocationOn} from 'react-icons/md'

const Contact = () => {

  return (
    <section id="contact" className="py-10 px-3 text-white mx-[2rem] md:mx-[1rem]">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contact <span className="text-sky-500">Me</span>
        </h3>
        <p className="text-gray-400 mt-3 text-lg">Get in touch</p>

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
          <form className="flex flex-col flex-1 gap-5">
            <input type="text" placeholder="Your Name" />
            <input type="Email" placeholder="Your Email Address" />
            <textarea placeholder="Your Message" rows={10}></textarea>
            <button className="btn-primary w-fit">Send Message</button>
          </form>
          <div className="flex flex-col  gap-7 ">
            
              <div
                
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-sky-500 rounded-full">
                  <MdEmail/>
                </div>
                <p className="md:text-base text-sm  break-words">
                  krutheeshsiripuram@gmail.com
                </p>
              </div>

              <div
                
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-sky-500 rounded-full">
                  <ImWhatsapp/>
                </div>
                <p className="md:text-base text-sm  break-words">
                  8688191130
                </p>
              </div>

              <div
                
                className="flex flex-row  
                  text-left gap-4 flex-wrap items-center"
              >
                <div className="min-w-[3.5rem]  text-3xl min-h-[3.5rem] flex items-center justify-center text-white bg-sky-500 rounded-full">
                  <MdLocationOn/>
                </div>
                <p className="md:text-base text-sm  break-words">
                  Location
                </p>
              </div>
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
