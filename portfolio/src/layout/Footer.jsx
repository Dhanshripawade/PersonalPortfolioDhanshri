import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaTwitter, FaLinkedin, FaMedium } from "react-icons/fa";

function Footer() {
    return (
        <motion.footer
            className='py-8 text-white bg-black'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
        >
            {/* <div className='container px-8 mx-auto md:px-16 lg:px-24'> */}
               <div className='container flex flex-col items-center justify-between px-8 pt-4 mx-auto border-t border-gray-600 md:flex-row md:px-16 lg:px-24'>
                    <p className='text-gray-400'>
                        &copy; {new Date().getFullYear()} Dhanshri. 
                    </p>
                    <div className='flex my-4 space-x-4 md:my-0'>
                        <a href="/" className='text-gray-400 hover:text-white'>
                            <FaFacebook />
                        </a>
                        <a href="/" className='text-gray-400 hover:text-white'>
                            <FaTwitter />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/dhanshri-pawade-3953a3328"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-white'
                        >
                            <FaLinkedin />
                        </a>
                        <a href="/" className='text-gray-400 hover:text-white'>
                            <FaMedium />
                        </a>
                        <a
                            href="https://github.com/Dhanshripawade"
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-gray-400 hover:text-white'
                        >
                            
                            <FaGithub />
                        </a>
                    </div>
                    <div className='flex space-x-4'>
                        <a href="/" className='text-gray-400 hover:text-white'>
                            Privacy
                        </a>
                        <a href="/" className='text-gray-400 hover:text-white'>
                            Terms of Services
                        </a>
                    </div>
                </div>
            {/* </div> */}
        </motion.footer>
    );
}

export default Footer;
