import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import AboutImage from '../assets/aboutme-image.png';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const titles = ['Full-Stack Developer', 'MERN Developer'];
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  // Preload the image
  useEffect(() => {
    const img = new Image();
    img.src = AboutImage;
    img.onload = () => setImageLoaded(true);
  }, []);

  useEffect(() => {
    const isDark = document.documentElement.classList.contains('dark');
    setIsDarkMode(isDark);
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

  const socialLinks = [
    { 
      name: 'github', 
      url: 'https://github.com/satishmadhunala1', 
      icon: <FaGithub className="text-xl" />,
      color: "hover:bg-gray-800 hover:text-white"
    },
    { 
      name: 'linkedin', 
      url: 'https://www.linkedin.com/in/satish-madhunala-671305213/', 
      icon: <FaLinkedin className="text-xl" />,
      color: "hover:bg-blue-600 hover:text-white"
    },
    { 
      name: 'twitter', 
      url: 'https://x.com/i/flow/login', 
      icon: <FaTwitter className="text-xl" />,
      color: "hover:bg-sky-500 hover:text-white"
    },
  ];

  return (
    <motion.div
      className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden "
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home"
    >
      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl mt-24"
        variants={containerVariants}
      >
        <motion.div
          className="relative mx-auto mb-12 w-48 h-48 md:w-60 md:h-60"
          variants={itemVariants}
        >
          {/* Profile Image Container */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-200 dark:border-gray-700 shadow-lg"
            animate={{
              y: [0, -8, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.05,
            }}
          >
            {/* Profile Image */}
            <div className="w-full h-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
              {imageLoaded ? (
                <img 
                  src={AboutImage} 
                  alt="Satish Madhunala" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-5xl text-gray-400">👨‍💻</div>
              )}
            </div>
          </motion.div>
          
          {/* Decorative ring */}
          <motion.div
            className="absolute -inset-4 rounded-full border border-blue-400/30 dark:border-blue-500/30"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>

        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          variants={itemVariants}
        >
          Hi, I'm{' '}
          <span className="text-blue-600 dark:text-blue-400">
            Satish Madhunala
          </span>
        </motion.h1>

        <motion.div
          className="h-12 mb-6"
          variants={itemVariants}
        >
          <motion.span
            className="text-xl sm:text-2xl font-semibold text-gray-700 dark:text-gray-300"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={titles[titleIndex]}
          >
            {titles[titleIndex]}
          </motion.span>
        </motion.div>

        <motion.p
          className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I specialize in building modern and responsive web applications with cutting-edge technologies.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-4"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaEnvelope />
            Contact Me
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/file/d/11dKg2cdSgGbJvfgttyu6ZMi2I6YOsM1b/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-800 dark:text-white rounded-lg font-medium border border-gray-300 dark:border-gray-700 transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div 
          className="mt-12 flex justify-center gap-4"
          variants={itemVariants}
        >
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-300 ${social.color}`}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ delay: index * 0.1 }}
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        
      </motion.div>
    </motion.div>
  );
};

export default Hero;