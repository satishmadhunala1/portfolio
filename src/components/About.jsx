import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.2,
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

  const skills = [
    { label: "HTML & CSS", width: 85 },
    { label: "React JS", width: 90 },
    { label: "Node JS", width: 80 },
    { label: "MongoDB", width: 75 },
    { label: "Tailwind CSS", width: 85 },
  ];

  return (
    <motion.div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-20 min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      id="about"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      {/* Background Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '10%', left: '5%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '10%', right: '5%' }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.h2
          className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-16"
          variants={itemVariants}
        >
          About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="relative group"
            variants={itemVariants}
          >
            <motion.div
              className="absolute -inset-1 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-30 group-hover:opacity-50 transition duration-300"
            />
            {/* <motion.img
              src={AboutImage}
              alt="About Me"
              className="relative w-full h-auto rounded-lg shadow-2xl transform transition duration-300 group-hover:scale-[1.02]"
              whileHover={{ scale: 1.02 }}
            /> */}
          </motion.div>

          <div className="space-y-8">
            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences that make a difference.
            </motion.p>

            <motion.div
              className="space-y-6"
              variants={itemVariants}
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="space-y-2"
                  variants={itemVariants}
                  custom={index}
                >
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium text-gray-300">{skill.label}</span>
                    <span className="text-sm font-medium text-gray-400">{skill.width}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${skill.width}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
