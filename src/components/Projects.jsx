import React, { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Animated Background Element
const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2.5}>
      <MeshDistortMaterial
        color="#4f46e5"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.7}
      />
    </Sphere>
  );
};

// Sample project images (replace with your actual imports)
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
    accentColor: "from-blue-500 to-cyan-500"
  },
  {
    id: 2,
    name: "Food App",
    description: "A full-featured food blog application with user authentication and rich text editing.",
    technologies: ["MERN Stack", "Full Stack"],
    image: FoodImage,
    github: "https://github.com/satishmadhunala1/Food-app.git",
    live: "https://food-app-frontend-jzem.onrender.com",
    accentColor: "from-purple-500 to-pink-500"
  },
  {
    id: 3,
    name: "Turf Cricket App",
    description: "A full-featured cricket management application with user authentication and real-time updates.",
    technologies: ["MERN Stack", "Full Stack"],
    image: CricketImg,
    github: "https://github.com/satishmadhunala1/Turf_cricket.git",
    live: "https://turf-cricket-frontend.onrender.com",
    accentColor: "from-green-500 to-teal-500"
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
    <motion.div
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 min-h-screen relative overflow-hidden"
      id="project"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      {/* 3D Background Element */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <Canvas camera={{ position: [0, 0, 5] }} className="opacity-10">
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwSDBWNk0wIDBINjBWNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden z-0">
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
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="inline-block relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 rounded-full"></div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold">
              My <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Projects</span>
            </h2>
          </div>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group relative"
              whileHover={{ 
                y: -15,
                transition: { duration: 0.3 }
              }}
            >
              {/* Glow effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r ${project.accentColor} rounded-2xl blur opacity-30 group-hover:opacity-70 transition duration-300`}></div>
              
              <div className="relative bg-gradient-to-b from-gray-800/50 to-gray-900/80 backdrop-blur-md p-6 rounded-2xl h-full flex flex-col border border-gray-700 shadow-2xl">
                {/* Image container with 3D effect */}
                <div className="relative overflow-hidden rounded-xl mb-6 group-hover:shadow-xl transition duration-300">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <motion.div
                    className="w-full h-48 object-cover transform transition duration-700 group-hover:scale-110"
                    style={{ 
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                    whileHover={{ 
                      rotateY: 5,
                    }}
                  >
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        <motion.a
                          href={project.github}
                          className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center border border-gray-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </motion.a>
                        <motion.a
                          href={project.live}
                          className="w-12 h-12 rounded-full bg-black/70 flex items-center justify-center border border-gray-600"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  {project.name}
                </h3>

                <div className="mb-4">
                  <span className={`px-3 py-1 text-sm bg-gradient-to-r ${project.accentColor} rounded-full text-white font-medium`}>
                    {project.technologies.join(" • ")}
                  </span>
                </div>

                <p className="text-gray-300 mb-6 flex-grow">{project.description}</p>

                <div className="flex gap-4 mt-auto">
                  <motion.a
                    href={project.github}
                    className="flex-1 bg-gradient-to-r from-gray-800 to-gray-900 text-white px-4 py-3 rounded-xl text-center font-medium shadow-lg border border-gray-700 hover:shadow-blue-500/10 transition-all"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    GitHub
                  </motion.a>
                  <motion.a
                    href={project.live}
                    className={`flex-1 bg-gradient-to-r ${project.accentColor} text-white px-4 py-3 rounded-xl text-center font-medium shadow-lg hover:shadow-purple-500/20 transition-all`}
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