import React from 'react'

const services = [
{
    id:1,
    title:"Web-Design",
    description : "Creating visually appealing and user-friendly web designs.",
},
{
id: 2,
title: "FrontEnd Development",
description : "Building responsive and interactive user interface.",
},
{
    id: 3,
    title: "BackEnd Development",
    description : "Developing robust server-side logic and database.",
    },
    {
        id: 4,
        title: "FullStack Development",
        description : "Combining both frontend backend development skills.",
        },
        {
            id: 5,
            title: "Content Writing",
            description : "Writing Content for your business and companies.",
            },
            {
                id: 6,
                title:"Digital Marketing",
                description : "Promote your business with our digital marketing team.",
                },
]

const Service = () => {
  return (
    <div className='py-20 text-white bg-black' id='about'>
            <div className='container px-8 mx-auto md:px-16 lg:px-24'>
                <h2 className='mb-12 text-4xl font-bold text-center'>
                    My Services
                </h2>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {services.map(services => (
                        <div
                            key={services.id}
                            className='px-6 pb-6 transition duration-300 transform bg-gray-800 rounded-lg hover:shadow-lg-transfrom hover:scale-105'>
                                <div className='text-2xl font-bold text-right text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400'>
                                    {services.id}
                                    
                                </div>
                                <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
                                    {services.title}
                                </h3>
                                <p className='mt-2 text-gray-300'>
                                    {services.description}
                                </p>
                                <a href="/" className='inline-block mt-4 text-green-400 hover:text-blue-500'>Read More</a>
                            </div>
                    ))}
                </div>
                </div>
                    
                </div>
  );
};

export default Service