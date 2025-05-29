import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Contact
            </h3>
            <p className="text-sm">Email: rj367762@gmail.com</p>
            <p className="text-sm">Phone: +91 9019868283</p>
            <p className="text-sm">Location: Bangalore, India</p>
          </div>

          {/* Services/Technologies */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Expertise
            </h3>
            <ul className="space-y-2 text-sm">
              <li>Full Stack Development</li>
              <li>Frontend: React, css, Tailwind</li>
              <li>Backend: Node.js, Flask</li>
              <li>Database: SQL Server, MongoDB</li>
              <li>Cloud: Azure</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Follow Me
            </h3>
            <p className="mb-4 text-sm">
              You can connect with me on my social channels:
            </p>
            <div className="flex space-x-4">
              <motion.a
                href="https://www.instagram.com/rajitha_poojary_22"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 text-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fab fa-instagram"></i>
              </motion.a>
              <motion.a
                href="https://wa.me/919019868283?text=Hello!" target="_blank" rel="noopener noreferrer"
                className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 text-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fab fa-whatsapp"></i>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/rajitha-poojary-b1966a337/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-xl"
                variants={iconVariants}
                whileHover="hover"
              >
                <i className="fab fa-linkedin"></i>
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-4 text-center text-sm">
          <p className="text-gray-500 dark:text-gray-400">
            &copy; {new Date().getFullYear()} Rajitha Poojary. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
