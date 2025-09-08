import  { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import AboutImage from '../assets/aboutme-image.png';

// 3D Animated Sphere Component
const AnimatedSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.2;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={1.8}>
      <MeshDistortMaterial
        color="#4f46e5"
        attach="material"
        distort={0.5}
        speed={2}
        roughness={0.2}
        metalness={0.8}
      />
    </Sphere>
  );
};

const Hero = () => {
  const [titleIndex, setTitleIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);
  const titles = ['Full-Stack Developer', 'MERN Developer'];
  const containerRef = useRef();

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
      ref={containerRef}
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      id="home"
    >
      {/* 3D Background Elements */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <AnimatedSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
        
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/70"></div>
      </div>

      {/* Animated floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-500/30 rounded-full"
            animate={{
              y: [0, -20, 0],
              x: [0, Math.sin(i) * 20, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.2,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <motion.div 
        className="relative z-10 text-center px-4 max-w-4xl"
        variants={containerVariants}
      >
        <motion.div
          className="relative mx-auto mb-12 w-60 h-60"
          variants={itemVariants}
        >
          {/* 3D Profile Image Container */}
          <motion.div
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-gray-700 shadow-2xl"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            whileHover={{ 
              scale: 1.05,
              rotateY: 5,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
            
            {/* Profile Image */}
            <div className="w-full h-full bg-gray-800 flex items-center justify-center overflow-hidden">
              {imageLoaded ? (
                <img 
                  src={AboutImage} 
                  alt="Satish Madhunala" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-6xl">👨‍💻</div>
              )}
            </div>
          </motion.div>
          
          {/* Floating rings around profile */}
          <motion.div
            className="absolute -inset-4 rounded-full border-2 border-blue-500/30"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute -inset-6 rounded-full border-2 border-purple-500/20"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />

        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          variants={itemVariants}
        >
          I'm{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
            Satish Madhunala
          </span>
          <br />
          <motion.span
            className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            animate={{ opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            key={titles[titleIndex]}
          >
            {titles[titleIndex]}
          </motion.span>
        </motion.h1>

        <motion.p
          className="mt-4 text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          variants={itemVariants}
        >
          I specialize in building modern and responsive web applications with cutting-edge technologies.
        </motion.p>

        <motion.div
          className="mt-12 flex flex-col sm:flex-row justify-center items-center gap-6"
          variants={itemVariants}
        >
          <motion.a
            href="#contact"
            className="relative overflow-hidden group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-medium shadow-2xl shadow-blue-500/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(99, 102, 241, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">Contact With Me</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
          
          <motion.a
            href="https://drive.google.com/file/d/11dKg2cdSgGbJvfgttyu6ZMi2I6YOsM1b/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative overflow-hidden group bg-gradient-to-r from-gray-800 to-gray-900 text-white px-8 py-4 rounded-full font-medium border border-gray-700 shadow-2xl shadow-black/20"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View Resume</span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-900 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div 
          className="mt-12 flex justify-center gap-6"
          variants={itemVariants}
        >
          {[
            { name: 'github', url: 'https://github.com/satishmadhunala1', icon: '🐱' },
            { name: 'linkedin', url: 'https://www.linkedin.com/in/satish-madhunala-671305213/', icon: '💼' },
            { name: 'twitter', url: 'https://x.com/i/flow/login', icon: '🐦' }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-800/50 backdrop-blur-md flex items-center justify-center border border-gray-700 shadow-lg"
              whileHover={{ 
                y: -5,
                scale: 1.1,
                backgroundColor: "rgba(30, 41, 59, 0.8)"
              }}
              whileTap={{ scale: 0.9 }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="text-xl">{social.icon}</div>
            </motion.a>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-blue-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;