import React from 'react'
import Project1 from "../assets/project1.jpg"
import Project2 from "../assets/project2.jpg"
import Project3 from "../assets/project3.jpg"


const projects =[
    {
        id:1,
        name:"Employee MS",
        technologies :"MERN Stack",
        image : Project1,
        github: "https://github.com/Dhanshripawade/PersonalPortfolioDhanshri",
    },
    {
        id:2,
        name:"Blog App",
        technologies :"MERN Stack",
        image : Project2,
        github: "https://github.com/Dhanshripawade/PersonalPortfolioDhanshri",
    },
    {
        id:3,
        name:"Book MS",
        technologies :"MERN Stack",
        image : Project3,
        github: "https://github.com/Dhanshripawade/PersonalPortfolioDhanshri",
    },
]
const Projects = () => {
    return (
        <div className='py-20 text-white bg-black' id='about'>
            <div className='container px-8 mx-auto md:px-16 lg:px-24'>
                <h2 className='mb-12 text-4xl font-bold text-center'>
                    My Projects
                </h2>
                <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                    {projects.map(projects => (
                        <div key={projects.id}
                            className='px-6 pb-6 transition duration-300 transform bg-gray-800 rounded-lg hover:shadow-lg-transfrom hover:scale-105'> 
                            <img src={projects.image} alt={projects.name} className='object-cover w-full h-48 mb-4 rounded-lg' /> 
                            <h3 className='mb-2 text-2xl font-bold'> {projects.name}</h3>
                            <p className='mb-4 text-gray-400'> {projects.technologies}</p>
                            <a href={projects.github} className='inline-block px-4 py-2 text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500' target='_blank'
                            rel='noopener noreferrer'>GitHub</a>
                            </div>
                    ))}
                </div>

            </div>
        </div>

    )
}

export default Projects