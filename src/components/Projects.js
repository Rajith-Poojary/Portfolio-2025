import React from "react";

const projects = [
  {
    name: "Music Player",
    image: "images/music_thumb.svg",
    summary: "A sleek and modern music player with playlist support.",
  },
  {
    name: "E-commerce Store",
    image: "/images/ecommerce_thumb.png",
    summary: "An online store featuring cart, payment integration, and more.",
  },
  {
    name: "BookMyMovie",
    image: "/images/movie_thumb.png",
    summary: "A platform to book movie tickets and view show timings.",
  },
  {
    name: "Food Delivery App",
    image: "/images/food_thumb.png",
    summary: "Order your favorite meals from nearby restaurants.",
  },
  {
    name: "AI Chatbot",
    image: "/images/aiChat_thumb.png",
    summary: "Engage in interactive conversations with an AI assistant.",
  },
  {
    name: "To Do App",
    image: "/images/todo_thumb.webp",
    summary: "A simple and effective task management application.",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 py-10">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-gray-200">
        Upcoming Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="w-72 h-96">
            <div className="relative w-full h-full group [perspective:1000px]">
              <div className="absolute w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front */}
                <div className="absolute w-full h-full">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
                
                {/* Back */}
                <div className="absolute w-full h-full [transform:rotateY(180deg)] [backface-visibility:hidden] bg-white dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center p-8 space-y-4">
                  <div className="w-full space-y-6">
                    <h2 className="text-gray-800 dark:text-gray-200 text-3xl font-bold text-center">
                      {project.name}
                    </h2>
                    <div className="w-16 h-1 bg-purple-600 mx-auto rounded-full"></div>
                    <p className="text-gray-700 dark:text-gray-300 text-lg text-center leading-relaxed">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;