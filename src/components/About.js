import React from "react";
import { motion } from "framer-motion";

const About = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen px-6 sm:px-10 py-12 bg-gray-100 dark:bg-gray-900 transition-colors">
      {/* Header Section */}
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        About Me
      </h1>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto text-lg text-gray-700 dark:text-gray-300 space-y-10">
        {/* Full Name */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            My Name
          </h2>
          <p>Rajitha Poojary, 23</p>
        </motion.div>

        {/* Native Place */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Hometown
          </h2>
          <p>"Born and raised in the coastal town of Udupi, Karnataka."</p>
        </motion.div>

        {/* Bio */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            A Little About Me
          </h2>
          <p align ="justify">
            I am a passionate Full Stack Developer specializing in building
            scalable and user-friendly web applications.I thrive on solving
            challenges and creating seamless digital experiences.
          </p>
        </motion.div>
        {/* where am I */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Current Location
          </h2>
          <p>"I'm a freelance Full Stack Developer based in Bangalore, India."</p>
        </motion.div>

        {/* Hobbies */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            Hobbies
          </h2>
          <p>Games, Sports, Coding, Music!</p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
