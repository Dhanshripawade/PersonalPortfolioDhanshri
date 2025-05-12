import React from 'react';
import { motion } from 'framer-motion';

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
};

const Education = () => {
  const educationData = [
    {
      title: 'Master of Computer Application',
      institution: 'Amravati University, 2022 - 2024',
      result: 'CGPA: 9.14/10',
    },
    {
      title: 'Bachelor of Computer Application',
      institution: 'RTMNU, 2019 - 2022',
      result: 'CGPA: 8.19/10',
    },
    {
      title: 'Higher Secondary Education',
      institution: 'Sarswati Kisan Junior College, 2018 - 2019',
      result: 'Percentage: 63.69%',
    },
    {
      title: 'Secondary Education',
      institution: 'Sarswati Kisan Vidyalaya, 2016 - 2017',
      result: 'Percentage: 79.60%',
    },
  ];

  return (
    <motion.div
      className="py-16 text-center text-white bg-black"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      <h2 className="mb-12 text-4xl font-bold text-center text-white">
        Education
      </h2>

      <div className="grid max-w-6xl grid-cols-1 gap-8 px-8 mx-auto text-left md:grid-cols-2">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            className="p-12 transition duration-300 transform bg-gray-800 rounded-lg min-h-[200px] hover:shadow-lg-transfrom hover:scale-105"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            custom={index}
            viewport={{ once: false, amount: 0.3 }}
          >
            <h3 className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">{edu.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-gray-400">{edu.institution}</p>
            <p className="mt-4 text-base leading-relaxed">{edu.result}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Education;
