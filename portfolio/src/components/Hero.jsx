import React from 'react';
import Image from '../assets/image.png';
import About from './About';
import Service from './Service';
import Projects from './Projects';
import Contact from './Contact';

function Hero() {
  return (
    <div className="py-16 text-center text-white bg-black animate-fade-in">
      
      
      <img 
        src={Image} 
        alt="Profile" 
        className="object-cover w-1/2 mx-auto mt-4 transition-transform duration-300 transform rounded-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6 mb:-8 hover:scale-105"
      />

     
      <h1 className="mt-5 text-4xl font-bold">
        I'm{" "}
        <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text animate-gradient">
          Dhanshri Pawade
        </span>
        , Front-End Developer
      </h1>

      {/* Subtitle with Fade Animation */}
      <p className="mt-5 text-lg text-gray-400 animate-fade-in-delay">
        I specialize in building modern and responsive applications.
      </p>

      {/* Buttons with Slide-in Animation */}
      <div className="mt-8 space-x-4 ">
        <a className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-110 animate-slide-in" href='/contact'>
          Contact Me
        </a>
        <button className="hidden px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 md:inline hover:scale-110 animate-slide-in-delay">
          Resume
        </button>
      </div>
      <About/>
      <Service/>
      <Projects/>
      <Contact/>
    </div>
    
    
  );
}

export default Hero;
