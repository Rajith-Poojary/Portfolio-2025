import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    institution: "St Aloysius Institute of Management & Information Technology (AIMIT)",
    degree: "Master's Of Computer Application",
    duration: "2022 - 2024",
    achievements: ["Successfully completed Master's with a CGPA of 7.3", "Presented a research paper at a college-level academic event"],
    // Corrected path using process.env.PUBLIC_URL
    image: process.env.PUBLIC_URL + "/images/College_Aimit.png",
  },
  {
    institution: "Bhandarkars' Arts & Science College Kundapura",
    degree: "Bachelor of Computer Applications",
    duration: "2019 - 2022",
achievements:
  [ "Graduated with 70% from Mangalore University",
  "Self-motivated learner passionate about full stack development and building impactful web applications"]
    // Corrected path using process.env.PUBLIC_URL
    image: process.env.PUBLIC_URL + "/images/Bck.png",
  },
  // {
  //   institution: "SVERI's College of Engineering, Pandharpur",
  //   degree: "Bachelors of Technology, Mechanical Engineering",
  //   duration: "2018 - 2022",
  //   achievements: ["Member, Institute Innovation Council", "Member, MESA", "9.5 CGPA"],
  //   // If you uncomment this, also correct its path:
  //   // image: process.env.PUBLIC_URL + "/images/sveri.jpeg",
  // },
];

const Education = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 px-6 py-16">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-8"
      >
        My Education Journey
      </motion.h1>

      <div className="max-w-3xl mx-auto relative border-l border-gray-300 dark:border-gray-700">
        {educationData.map((edu, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="mb-8 pl-6 flex flex-col sm:flex-row items-start"
          >
            <div className="flex-shrink-0 w-24 h-24 mr-4">
              <motion.img
                src={edu.image} // This will now use the correct path
                alt={`${edu.institution} image`}
                className="w-full h-full object-cover rounded-lg shadow-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <div className="flex-1">
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2.5"></div>
              <h2 className="text-xl font-semibold">{edu.institution}</h2>
              <p className="text-gray-600 dark:text-gray-400">{edu.degree}</p>
              <p className="text-sm italic">{edu.duration}</p>
              <ul className="list-disc list-inside mt-2">
                {edu.achievements.map((ach, i) => (
                  <li key={i}>{ach}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
