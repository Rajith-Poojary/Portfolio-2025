import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../context/ThemeContext';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  const menuVariants = {
    closed: {
      x: "100%",
      transition: { type: "spring", stiffness: 400, damping: 40 }
    },
    open: {
      x: 0,
      transition: { type: "spring", stiffness: 400, damping: 40 }
    }
  };

  const itemVariants = {
    closed: { x: 50, opacity: 0 },
    open: { 
      x: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 300 }
    }
  };
  const scrollToSection = (id) => {
    const navbarHeight = document.getElementById('nav').offsetHeight;
    const section = document.getElementById(id);
    if (section) {
      const topPosition = section.offsetTop - navbarHeight;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
    setIsOpen(false)
  };

  return (
    <header className="fixed w-full top-0 p-6 z-50  bg-gray-100 dark:bg-gray-900">
      <div className="w-full flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold text-gray-900 dark:text-white"
        >
          <motion.div
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{
      duration: 1.5,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "mirror",
    }}
    className="text-center text-indigo-600 dark:text-indigo-400"
  >
    Welcome 😊
  </motion.div>
        </motion.div>

        <div id='nav' className="flex items-center gap-6">
          <button 
            onClick={toggleTheme}
            className="text-gray-900 dark:text-white hover:scale-110 transition-transform"
          >
            {isDarkMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="relative z-50 group"
          >
            <div className="flex flex-col justify-center items-center w-8 h-8">
              <motion.span
                animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-900 dark:bg-white block mb-1.5"
              />
              <motion.span
                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                className="w-6 h-0.5 bg-gray-900 dark:bg-white block mb-1.5"
              />
              <motion.span
                animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                className="w-6 h-0.5 bg-gray-900 dark:bg-white block"
              />
            </div>
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.nav
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="fixed top-0 right-0 bottom-0 w-80 bg-slate-200 dark:bg-gray-800 p-8 shadow-lg"
            >
              <div className="mt-16 space-y-8">
                {['Home', 'About', 'Education', 'Skills', 'Projects', 'Resume', 'Contact'].map((item) => (
                  <motion.button
                    key={item}
                    variants={itemVariants}
                    // href={`${item.toLowerCase()}`}
                    onClick={() => scrollToSection(item)}
                    className="block text-xl font-medium text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400"
                  >
                    {item}
                  </motion.button>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;