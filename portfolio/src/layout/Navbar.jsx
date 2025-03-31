import React from "react";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const variants = {
    open: { clipPath: "circle(1200px at 43px 43px" },
    transition: {
      type: "spring",
    },
    closed: {
      clipPath: "circle(25px at 43px 37px)",
      transiton: {
        type: "spring",
        duration: 1,
      },
    },
  };

  const items = [
    { id: 1, text: "Home", path: "/"},
    { id: 2, text: "About", path: "/about"},
    { id: 3, text: "Services", path: "/services" },
    { id: 4, text: "projects", path: "/projects" },
    { id: 5, text: "Contact", path: "/contact" },
  ];

  return (
    <div className="px-3 bg-black ">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="container items-center justify-between hidden py-6 mx-auto md:flex"
      >
        <Link to="/">
        <div className="flex items-center gap-1 text-xl font-bold lg:text-2xl">
          <span className="text-white">Dhanshri</span>
          {/* <span className="text-purple-500">Saf</span> */}
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
        <a className="px-4 py-2 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-110 animate-slide-in" href="/contact">
          Contact Me
        </a>
      </motion.div>

      <div className="flex justify-between md:hidden">
        <motion.div animate={menu ? "open" : "closed"}>
          <motion.div
            variants={variants}
            onClick={() => setMenu((prev) => !prev)}
            className="fixed z-10 w-2/3 h-screen text-black bg-white"
          >
            <div className='"px-4 mx-7 py-6 '>
              {menu ? <RxCross2 size={30} /> : <IoMenu size={30} />}
            </div>
            {menu && (
              <div className="flex flex-col items-center justify-center ">
               <ul className="space-y-6 text-lg text-black">
                  {items.map(({ id, text, path }) => (
                    <li key={id} className="duration-200 cursor-pointer hover:text-green-500">
                      <Link to={path} onClick={() => setMenu(false)}>{text}</Link>
                    </li>
                  ))}
                </ul>
                <a className="px-4 py-2 mt-5 text-white transition-transform duration-300 transform rounded-full bg-gradient-to-r from-green-400 to-blue-500 md:inline hover:scale-110 animate-slide-in" href="/contact">
                  Contact Me
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
          {/* <span className="text-purple-500">Saf</span> */}
        </motion.div>
        </Link>
      </div>
    </div>
  );
}

export default Navbar;