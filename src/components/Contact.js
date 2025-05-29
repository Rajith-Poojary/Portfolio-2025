import React, { useState, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import emailjs from 'emailjs-com';

const GetInTouch = () => {
  const [snackbar, setSnackbar] = useState({ show: false, message: "", success: true });
  const form = useRef();

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const iconVariants = {
    hover: {
      scale: 1.2,
      transition: { duration: 0.3 },
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_83786ho', 'template_jh3j6xj', form.current, 'H9edBElBHZEGanNtu',
    ).then(
      () => {
        setSnackbar({
          show: true,
          message: "Thank you for your message, I'll get back to you soon!",
          success: true
        });
        e.target.reset();
      },
      (error) => {
        console.error("EmailJS Error:", error); // 👈 for debugging
        setSnackbar({
          show: true,
          message: "There was an error sending your message.",
          success: false
        });
      }
    );
  };

  return (
    <div className="min-h-screen px-8 py-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <motion.div
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-bold mb-2">Get in Touch</h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          I'd love to hear from you! Feel free to reach out.
        </p>
      </motion.div>

      <motion.form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto bg-gray-100 dark:bg-gray-800 rounded-lg p-8 shadow-lg"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 1 }}
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name" // ✅ Matches EmailJS template
            required
            className="mt-1 p-3 w-full rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            placeholder="Enter your name"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email" // ✅ Matches EmailJS template
            required
            className="mt-1 p-3 w-full rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
            Message
          </label>
          <textarea
            id="message"
            name="message" // ✅ Matches EmailJS template
            rows="4"
            required
            className="mt-1 p-3 w-full rounded-md bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-200 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400"
            placeholder="Write your message"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 p-3 rounded-md text-white font-semibold shadow-md transition duration-300"
        >
          Send Message
        </button>
      </motion.form>

      {/* Snackbar Notification */}
      <AnimatePresence>
        {snackbar.show && (
          <motion.div
            className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-lg shadow-lg ${
              snackbar.success ? "bg-green-500 text-white" : "bg-red-500 text-white"
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            {snackbar.message}
            <button
              onClick={() => setSnackbar({ show: false, message: "", success: true })}
              className="ml-4 underline"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Social Media Section */}
      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 1.2 }}
      >
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
          Or you can directly reach me over:
        </p>
        <div className="flex justify-center space-x-6">
          <motion.a
            href="https://www.instagram.com/rajitha_poojary_22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 dark:text-gray-400 dark:hover:text-pink-400 text-3xl"
            whileHover="hover"
            variants={iconVariants}
          >
            <i className="fab fa-instagram"></i>
          </motion.a>
          <motion.a
            href="https://wa.me/919019868283?text=Hello!"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-400 text-3xl"
            whileHover="hover"
            variants={iconVariants}
          >
            <i className="fab fa-whatsapp"></i>
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/rajitha-poojary-b1966a337/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400 text-3xl"
            whileHover="hover"
            variants={iconVariants}
          >
            <i className="fab fa-linkedin"></i>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};

export default GetInTouch;