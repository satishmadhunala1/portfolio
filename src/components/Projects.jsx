import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Sample project images
const EcommerceImage = "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";
const FoodImage = "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1081&q=80";
const CricketImg = "https://images.unsplash.com/photo-1531415074968-036ba1b575da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80";

const projects = [
  {
    id: 1,
    name: "E-Commerce App",
    description: "A full-featured e-commerce platform with modern UI and seamless shopping experience.",
    technologies: ["React", "Front-End"],
    image: EcommerceImage,
    github: "https://github.com/satishmadhunala1/e-zone-react-app.git",
    live: "https://e-commerce-five-phi-52.vercel.app/",
    color: "border-blue-200",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    id: 2,
    name: "Food App",
    description: "A full-featured food blog application with user authentication and rich text editing.",
    technologies: ["MERN Stack", "Full Stack"],
    image: FoodImage,
    github: "https://github.com/satishmadhunala1/Food-app.git",
    live: "https://food-app-frontend-jzem.onrender.com",
    color: "border-green-200",
    bgColor: "bg-green-50",
    textColor: "text-green-600"
  },
  {
    id: 3,
    name: "Turf Cricket App",
    description: "A full-featured cricket management application with user authentication and real-time updates.",
    technologies: ["MERN Stack", "Full Stack"],
    image: CricketImg,
    github: "https://github.com/satishmadhunala1/Turf_cricket.git",
    live: "https://turf-cricket-frontend.onrender.com",
    color: "border-purple-200",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600"
  },
];

const Projects = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div
      className="bg-white dark:bg-gray-900 py-20"
      id="project"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={itemVariants}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Showcasing my recent work and development projects
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group"
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`bg-white dark:bg-gray-800 rounded-xl overflow-hidden border ${project.color} dark:border-gray-700 shadow-sm`}>
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.name}
                  </h3>

                  {/* Technologies */}
                  <div className="mb-4">
                    <div className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${project.bgColor} dark:bg-gray-700 ${project.textColor} dark:text-white`}>
                      {project.technologies.join(" • ")}
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      className="flex-1 py-2 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded-lg text-center font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                      Code
                    </a>
                    <a
                      href={project.live}
                      className={`flex-1 py-2 ${project.bgColor} hover:opacity-90 text-black rounded-lg text-center font-medium transition-colors duration-300 flex items-center justify-center gap-2`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaExternalLinkAlt />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;