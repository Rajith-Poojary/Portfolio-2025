import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Hero = () => {
  const name = "Rajitha Poojary";
  const title = "Full Stack Web Developer";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const [showScrollIndicator, setShowScrollIndicator] = useState(false); // Initially hidden
  const [hideOnScroll, setHideOnScroll] = useState(false); // Tracks scroll event to hide indicator

  useEffect(() => {
    // Show the scroll indicator after 2 seconds
    const timer = setTimeout(() => {
      setShowScrollIndicator(true);
    }, 2000);

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setHideOnScroll(true); // Hide indicator on scroll
      } else {
        setHideOnScroll(false); // Show indicator when back to top
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener and timer on component unmount
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen text-center overflow-hidden bg-gray-100 dark:bg-gray-900">
      {/* Background Animation */}
      <div className="absolute inset-0 z-[-1] bg-gradient-to-r from-blue-500 to-purple-600 animate-gradient" />

      {/* Greeting */}
      <motion.h1
        className="text-2xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white"
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        initial={{ opacity: 0, y: -20 }}
      >
        Hey, I am
      </motion.h1>

      {/* Name Animation */}
      <motion.div
        className="text-4xl sm:text-6xl font-extrabold text-blue-500 dark:text-blue-300 flex space-x-2"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {name.split("").map((letter, index) => (
          <motion.span key={index} variants={letterVariants}>
            {letter}
          </motion.span>
        ))}
      </motion.div>

      {/* Title */}
      <motion.h2
        className="text-2xl font-medium mt-4 text-gray-600 dark:text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        {title}
      </motion.h2>

      {/* Intro Section */}
      <motion.p align="justify"
        className="mt-2 sm:mt-4 text-sm sm:text-lg text-gray-600 dark:text-gray-400 max-w-xl px-4"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        I specialize in building modern and responsive web applications that
        combine creativity and functionality to solve real-world problems.
      </motion.p>

      {/* Social Media Icons */}
      <div className="flex space-x-4 mt-6">
        <a
          href="https://github.com/Rajith-Poojary"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg"
          >
            <i className="fab fa-github text-2xl text-gray-800 dark:text-white"></i>
          </motion.div>
        </a>
        <a
          href="https://www.linkedin.com/in/rajitha-poojary-b1966a337/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg"
          >
            <i className="fab fa-linkedin text-2xl text-blue-600"></i>
          </motion.div>
        </a>
        <a
          href="https://www.instagram.com/rajitha_poojary_22"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white dark:bg-gray-700 rounded-full shadow-lg"
          >
            <i className="fab fa-instagram text-2xl text-pink-600"></i>
          </motion.div>
        </a>
      </div>
        {/* scrolling animation */}
        {showScrollIndicator && !hideOnScroll && (
        <motion.div
          className="absolute bottom-8 flex flex-col items-center justify-center text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-sm font-medium">Scroll Down</p>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 mt-1 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.div>
      )}

    </section>
  );
};

export default Hero;

