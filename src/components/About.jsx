import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";
import { Globe } from "./Globe";

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
    {
      label: "HTML & CSS",
      width: 85,
      icon: (
        <>
          <FaHtml5 className="text-orange-500" />
          <FaCss3Alt className="text-blue-500" />
        </>
      ),
    },
    {
      label: "React JS",
      width: 90,
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      label: "Node JS",
      width: 80,
      icon: <FaNodeJs className="text-green-500" />,
    },
    {
      label: "MongoDB",
      width: 75,
      icon: <SiMongodb className="text-green-600" />,
    },
    {
      label: "Tailwind CSS",
      width: 85,
      icon: <SiTailwindcss className="text-cyan-300" />,
    },
  ];

  // Custom globe configuration with white color scheme
  const globeConfig = {
    width: 800,
    height: 800,
    devicePixelRatio: 2,
    phi: 0,
    theta: 0.3,
    dark: 0, // Changed from 1 to 0 for light mode
    diffuse: 1.2,
    mapSamples: 16000,
    mapBrightness: 1.2,
    baseColor: [1, 1, 1], // White base color
    markerColor: [0.1, 0.8, 1], // Cyan-blue markers
    glowColor: [0.8, 0.8, 0.8], // Light glow
    markers: [
      { location: [37.7749, -122.4194], size: 0.05 },
      { location: [40.7128, -74.0060], size: 0.05 },
      { location: [51.5074, -0.1278], size: 0.05 },
      { location: [35.6762, 139.6503], size: 0.05 },
      { location: [28.6139, 77.2090], size: 0.05 },
    ],
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      id="about"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      ref={ref}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ top: "10%", left: "5%" }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ bottom: "10%", right: "5%" }}
        />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTTAgMGg2MHY2MEgweiIgZmlsbD0ibm9uZSIvPjxwYXRoIGQ9Ik02MCAwSDBWNk0wIDBINjBWNjAiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')] opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <div className="inline-block relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 rounded-full"></div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold">
              About{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                Me
              </span>
            </h2>
          </div>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            animate={inView ? { width: 96 } : {}}
            transition={{ delay: 0.4, duration: 0.8 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Side - Globe */}
          <motion.div
            className="relative group flex justify-center lg:justify-start order-2 lg:order-1"
            variants={itemVariants}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div
              className="absolute -inset-3 rounded-2xl bg-gradient-to-r from-blue-600 to-purple-600 blur-xl opacity-30 group-hover:opacity-50 transition duration-300"
            />
            <div className="relative w-full h-full sm:h-80 md:h-96 max-w-md mx-auto ">
              <Globe 
                config={globeConfig}
                className="w-full h-full opacity-90 transition-opacity duration-300 group-hover:opacity-100 mt-1"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 pointer-events-none rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            className="space-y-8 bg-gradient-to-b from-gray-800/30 to-gray-900/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-xl order-1 lg:order-2"
            variants={itemVariants}
          >
            <motion.p
              className="text-lg sm:text-xl text-gray-300 leading-relaxed"
              variants={itemVariants}
            >
              I am a passionate{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 font-medium">
                full-stack developer
              </span>{" "}
              with a focus on building modern and responsive web applications.
              With a strong foundation in both frontend and backend
              technologies, I strive to create seamless and efficient user
              experiences that make a difference.
            </motion.p>

            <motion.div className="space-y-6" variants={itemVariants}>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                My Skills
              </h3>
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.label}
                  className="space-y-2 group"
                  variants={itemVariants}
                  custom={index}
                  whileHover={{ x: 5 }}
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                      <span className="text-lg flex gap-1">{skill.icon}</span>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                        {skill.label}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-400">
                      {skill.width}%
                    </span>
                  </div>
                  <div className="h-2.5 bg-gray-800 rounded-full overflow-hidden shadow-inner">
                    <motion.div
                      className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full relative"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.width}%` } : {}}
                      transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/10"></div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div className="pt-4" variants={itemVariants}>
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-500 hover:to-purple-500 transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;