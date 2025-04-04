import React from 'react'
import { FaPhone, FaMapMarkedAlt, FaEnvelope } from "react-icons/fa";


function Contact() {
  return (
    <div className='py-20 text-white bg-black' id='about'>
      <div className='container px-8 mx-auto md:px-16 lg:px-24'>
        <h2 className='mb-12 text-4xl font-bold text-center'> Contact Me</h2>
        <div className='flex flex-col items-center md:flex-row md:space-x-12'>
         <div className='flex-1 text-start'>
         <h3 className='mb-4 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Let's Talk</h3>
            <p> I'm open to discussing web development projects or partnership opportunities.</p>
            <div className='mt-8 mb-4'>
            <FaEnvelope className="inline-block mr-2 text-green-400"></FaEnvelope>
            <a href="mailto:youremail@example.com" className='hover:underline'>dhanshripawade2002@gmail.com</a>
            </div>
            <div className='mb-4 '>
              <FaPhone className="inline-block mr-2 text-green-400"></FaPhone>
              <span >8806402897</span>
            </div>
            <div className='mb-4 '>
              <FaMapMarkedAlt className="inline-block mr-2 text-green-400"></FaMapMarkedAlt>
              <span>At Satgaon (Ridhora), Butibori</span>
            </div>
          </div>
          <div className='flex-1 w-full text-start'>
            <form className='space-y-4'>
              <div>
                <label htmlFor="name" className='block mb-2'>Your Name</label>
                <input type="text" className='w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Name' />
              </div>
              <div>
                <label htmlFor="email" className='block mb-2'>Email</label>
                <input type="text" className='w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400'
                  placeholder='Enter Your Email' />
              </div>
              <div>
                <label htmlFor="message" className='block mb-2'>Message</label>
                <textarea type="text" className='w-full p-2 bg-gray-800 border border-gray-600 rounded focus:outline-none focus:border-green-400'
                  rows="5"
                  placeholder='Enter Your Email' />
              </div>
              <button className='hidden px-8 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-110'>Send</button>
            </form>
          </div>
        </div>
      </div>


    </div >
  )
}

export default Contact