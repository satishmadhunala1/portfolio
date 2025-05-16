import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import employeeMSImage from "../assets/e-commerce.png";

// import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "E-Commerce App",
    description: "A full-featured e-commerce platform with modern UI and seamless shopping experience.",
    technologies: ["React", ],
    image: employeeMSImage,
    github: "https://github.com/satishmadhunala1/e-zone-react-app.git",
    vercel: "https://e-commerce-five-phi-52.vercel.app/",
  },
  // Uncomment and modify other projects as needed
  // {
  //   id: 2,
  //   name: "Blog App",
  //   technologies: "MERN Stack",
  //   image: bookMSImage,
  //   github: "https://github.com/YouafKhan1",
  // },
  // {
  //   id: 3,
  //   name: "Book MS",
  //   technologies: "MERN Stack",
  //   image: employeeMSImage,
  //   github: "https://github.com/YouafKhan1",
  // },
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
    <motion.div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 min-h-screen relative overflow-hidden"
      id="project"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-30 group-hover:opacity-100 transition duration-300"></div>
              <div className="relative bg-gray-900 p-6 rounded-lg h-full flex flex-col">
                <div className="relative overflow-hidden rounded-lg mb-6 group-hover:shadow-lg transition duration-300">
                  <motion.img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-48 object-cover transform transition duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-300"></div>
                </div>

                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {project.name}
                </h3>

                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gray-800 rounded-full text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-center font-medium shadow-lg hover:shadow-blue-500/20"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.vercel}
                    className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-center font-medium shadow-lg hover:shadow-purple-500/20"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Live Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Projects;
