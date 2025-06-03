import React from "react";
import Project1 from "../assets/project1.jpg";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";

const projects = [
  {
    id: 1,
    name: "Admin Panel",
    description: "Dashboard with CRUD, charts, and responsive layout.",
    technologies: "React, Bootstrap",
    image: Project1,
    github: "https://github.com/Dhanshripawade/AdminPanel",
    liveDemo: "https://adminpanel-2mwu.onrender.com/",
  },
  {
    id: 2,
    name: "Portfolio Website",
    description: "My personal responsive portfolio site built with React.",
    technologies: "React, Tailwind CSS",
    image: Project2,
    github: "https://github.com/Dhanshripawade/PersonalPortfolioDhanshri",
    liveDemo: "",
  },
  {
    id: 3,
    name: "Simple Web Template",
    description: "Multi-page template site with clean Bootstrap UI.",
    technologies: "React, Bootstrap",
    image: Project3,
    github: "https://github.com/Dhanshripawade/SimaplWebSite-/tree/main/web",
    liveDemo: "",
  },
];

const Projects = () => {
  return (
    <section className="py-20 text-white bg-black" id="projects">
      <div className="max-w-6xl px-4 mx-auto">
        <h2 className="mb-12 text-4xl font-bold text-center">My Projects</h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="overflow-hidden bg-gray-900 border border-gray-800 shadow-xl rounded-xl"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.name}
                className="object-cover w-full h-60"
              />

              {/* Content Below Image */}
              <div className="p-4 text-center">
                <h3 className="mb-2 text-xl font-bold text-white">
                  {project.name}
                </h3>
                <p className="mb-2 text-sm text-gray-300">
                  {project.description}
                </p>
                <p className="mb-4 text-xs text-gray-400">
                  {project.technologies}
                </p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.github}
                    className="px-4 py-1 text-sm text-white bg-green-600 rounded-full hover:bg-green-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      className="px-4 py-1 text-sm text-white bg-blue-500 rounded-full hover:bg-blue-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
