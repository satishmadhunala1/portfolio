import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Full-Stack Developer', 'MERN Developer'];

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white text-center py-16 min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ top: '20%', left: '10%' }}
        />
        <motion.div
          className="absolute w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ bottom: '20%', right: '10%' }}
        />
      </div>

      {/* Content */}
      <motion.div className="relative z-10" variants={containerVariants}>
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <motion.img
            src={HeroImage}
            alt="Profile"
            className="mx-auto mb-8 w-48 h-52 rounded-full object-cover shadow-xl ring-4 ring-blue-500/20"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ scale: 1.05 }}
          />
          <motion.div
            className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 blur opacity-30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6"
          variants={itemVariants}
        >
          I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 animate-pulse">
            Satish Madhunala
          </span>
          <br />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={titles[titleIndex]}
          >
            {titles[titleIndex]}
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          I specialize in building modern and responsive web applications with cutting-edge technologies.
        </motion.p>

        <motion.div
          className="mt-8 space-x-4 flex justify-center items-center flex-wrap gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-blue-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact With Me
          </motion.a>
          <motion.a
            href="https://drive.google.com/file/d/10FjNGd9OkFNb5ouT2phUi-EuqrI0IenY/view?usp=sharing"
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-pink-500/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Resume
          </motion.a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
