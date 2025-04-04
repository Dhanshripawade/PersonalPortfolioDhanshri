import React from 'react';
import Image1 from '../assets/hero-image.png';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      when: "beforeChildren",
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};

function About() {
  return (
    <motion.div
      className="py-20 text-white bg-black"
      id="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <div className="container px-6 mx-auto md:px-16 lg:px-24">
        <motion.h2
          className="mb-12 text-3xl font-bold text-center md:text-4xl"
          variants={itemVariants}
        >
          About Me
        </motion.h2>

        <div className="flex flex-col items-center md:flex-row md:space-x-12">
          <motion.img
            src={Image1}
            alt="profile"
            className="object-cover mb-8 rounded w-60 h-72 md:w-72 md:h-80 md:mb-0"
            variants={itemVariants}
          />

          <div className="flex-1 text-center md:text-left">
            <motion.p className="mb-6 text-base md:text-lg" variants={itemVariants}>
              I am a passionate front-end developer with a focus on building modern and responsive web applications.
              With a strong foundation in front-end technologies, I strive to create seamless and efficient user experiences.
            </motion.p>

            {/* Skills Section */}
            <motion.div className="space-y-4" variants={itemVariants}>
              {[
                { label: "HTML & CSS", width: "w-10/12" },
                { label: "React Js", width: "w-11/12" },
                { label: "JavaScript", width: "w-8/12" }
              ].map((skill, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center md:flex-row"
                  variants={itemVariants}
                >
                  <label className="mb-2 md:mb-0 md:w-2/12">{skill.label}</label>
                  <div className="w-full bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-transform duration-300 hover:scale-105 ${skill.width}`}
                    ></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Section */}
            <motion.div className="grid grid-cols-3 gap-4 mt-12 text-center" variants={itemVariants}>
              {[
                { value: "3+", label: "Months Of Experience" },
                { value: "2+", label: "Projects Completed" },
                { value: "1+", label: "Happy Clients" }
              ].map((stat, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                    {stat.value}
                  </h3>
                  <p>{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
