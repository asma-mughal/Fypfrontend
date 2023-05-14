import React,{useRef} from 'react'
import styles from '../style';
import { facebook, linkedin, twitter,contact } from '../assets';
import {Button, InputField} from '../components';
const ContactUs = () => {
  const videoRef = useRef();
  return (
    <section class="z-10 overflow-hidden  bg-white   "name="contact" id="contact"  >
    <div class="container  items-center p-10">
      <div class="-mx-3 flex flex-wrap lg:justify-between">
        <div class="w-full px-4 lg:w-1/2 xl:w-6/12">
          <div class="mb-12 max-w-[570px] lg:mb-0">
         <img src={contact} className="flex h-96" />
          </div>
        </div>
        <div class="w-full px-4 lg:w-1/2 xl:w-5/12">
          <div class="relative rounded-lg bg-white p-8 shadow-lg sm:p-12">
           
          <h2
              class="text-dark
              
              mb-6 uppercase font-bold text-xl font-poppins"
            >
              GET IN TOUCH WITH ME<span className='text-secondary'>.</span>
            </h2>
            <form > 
            
              <div class="mb-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your Name"
                  class="text-body-color border-[f0f0f0]
                  font-poppins
                   focus:border-primary w-full rounded border py-3 px-[14px]
                    text-base outline-none focus-visible:shadow-none"
                />
              </div>
              <div class="mb-6">
                <input
                  type="email"
                  
                  name="user_email"
                  placeholder="Your Email"
                  class="text-body-color border-[f0f0f0] 
                  focus:border-primary w-full rounded border 
                  font-poppins
                  py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                />
              </div>
             
              <div class="mb-6">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  class="text-body-color border-[f0f0f0] 
                  focus:border-primary w-full resize-none  font-poppins
                  rounded border py-3 px-[14px] text-base outline-none focus-visible:shadow-none"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  class="bg-secondary border-secondary w-full font-poppins rounded-3xl border p-2
                   text-white transition hover:bg-opacity-90 "
                >
                  Send Message
                </button>
              </div>
            </form>
          
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default ContactUs
