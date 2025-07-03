import React, { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaGraduationCap, FaTools, FaProjectDiagram, FaEnvelope } from "react-icons/fa";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px)" },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transition: {
        type: "spring",
        duration: 1,
      },
    },
  };

  
  const items = [
    { id: 1, text: "Home", path: "/", icon: <FaHome /> },
    { id: 2, text: "About", path: "/about", icon: <FaUserAlt /> },
    { id: 3, text: "Education", path: "/education", icon: <FaGraduationCap /> },
    { id: 5, text: "Projects", path: "/projects", icon: <FaProjectDiagram /> },
    
    { id: 4, text: "Services", path: "/services", icon: <FaTools /> },
    { id: 6, text: "Experience", path: "/experience", icon: <FaEnvelope /> },
  ];

  return (
    <div className="px-2 bg-black">
      {/* Desktop Navbar */}
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container items-center justify-between hidden py-6 mx-auto md:flex"
      >
        <Link to="/">
          <div className="flex items-center gap-1 text-xl font-bold lg:text-2xl">
            <span className="text-white">Dhanshri</span>
          </div>
        </Link>
        <div>
          <ul className="items-center hidden space-x-6 text-white list-none md:flex lg:text-lg md:text-base">
            {items.map(({ id, text, path }) => (
              <li key={id}>
                <Link to={path} className="duration-200 hover:text-green-500">
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <a
          className="px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-110 animate-slide-in"
          href="/contact"
        >
          Contact Me
        </a>
      </motion.div>

      {/* Mobile Navbar */}
      <div className="flex justify-between md:hidden">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            onClick={() => setMenu((prev) => !prev)}
            className={`fixed z-10 h-screen ${
              menu ? "bg-gray-900 text-white" : "bg-black text-white"
            }`}
            style={{ width: "12rem" }}
          >
            <div className="px-4 py-6 mx-7">
              {menu ? <RxCross2 size={30} /> : <IoMenu size={30} />}
            </div>

            {menu && (
              <div className="flex flex-col items-center justify-center">
                <ul className="space-y-6 text-lg text-white">
                  {items.map(({ id, text, path, icon }) => (
                    <li
                      key={id}
                      className="flex items-center gap-3 duration-200 cursor-pointer hover:text-green-500"
                    >
                      <Link
                        to={path}
                        onClick={() => setMenu(false)}
                        className="flex items-center gap-2"
                      >
                        <span>{icon}</span>
                        <span>{text}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
                <a
                         href="https://drive.google.com/uc?export=download&id=1z70ke3ti4lhRkrKJ1g52uO7xGI_ddv5r"
                         className="px-6 py-2 mt-5 mr-3 text-white rounded-full bg-gradient-to-r from-pink-500 to-yellow-500 hover:scale-110"
                    
                       >
                         Resume
                       </a>
              </div>
            )}
          </motion.div>
        </motion.div>

        <Link to="/">
          <motion.div
            initial={{ opacity: 0, x: 100, y: -100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 px-4 py-6 text-xl font-bold"
          >
            <span className="text-white">Dhanshri</span>
          </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
