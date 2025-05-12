import React from 'react';
import { motion } from 'framer-motion';
import Image from '../assets/image.png';
import About from './About';
import Service from './Service';
import Projects from './Projects';
import Contact from './Contact';
import Education from './Education';

function Hero() {
  return (
    <motion.div
      className="relative py-16 text-center text-white bg-black"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3}}
    >
      
      <motion.div
        className="absolute top-0 left-0 w-full h-full -z-10"
        animate={{
          background: [
            'linear-gradient(90deg, #000000, #111111)',
            'linear-gradient(90deg, #111111, #000000)',
          ]
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 10
        }}
      />

      
      <motion.img
        src={Image}
        alt="Profile"
        className="object-cover w-1/2 mx-auto mt-5 rounded-full sm:w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.3 }}
        viewport={{ once: false, amount: 0.3}}
      />

  
      <motion.h1
        className="mt-5 text-4xl font-bold"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        viewport={{ once: false, amount: 0.3}}
      >
        I'm{" "}
        <span className="text-transparent bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text ">
          Dhanshri Pawade
        </span>
        , Front-End Developer
      </motion.h1>

    
      <motion.p
        className="mt-8 tex-gray-400 tex8t-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.7 }}
        viewport={{ once: false, amount: 0.3}}
      >
        I specialize in building modern and responsive applications.
      </motion.p>

      
      <motion.div
        className="mt-8 space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 1 }}
        viewport={{ once: false, amount: 0.3}}
      >
        <motion.a
          className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 hover:scale-110"
          href="/contact"
          whileHover={{ scale: 1.1 }}
        >
          Contact Me
        </motion.a>
        <motion.a
          href="https://drive.google.com/uc?export=download&id=1z70ke3ti4lhRkrKJ1g52uO7xGI_ddv5r"
          className="px-4 py-2 text-white rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110"
          whileHover={{ scale: 1.1 }}
        >
          Resume
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3}}
      >
        <About />
      </motion.div>

      <motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.2}}
  viewport={{ once: false, amount: 0.3 }}
>
  <Education />
</motion.div>

<motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Projects />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once:false, amount: 0.3 }}
      >
        <Service />
      </motion.div>

     

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <Contact />
      </motion.div>
   
    </motion.div>
  );
}

export default Hero;
