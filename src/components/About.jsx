import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaDownload, FaCode, FaServer, FaDatabase, FaPaintBrush, FaMobileAlt, FaRocket, FaUsers } from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiJavascript, SiTypescript, SiExpress, SiFirebase, SiRedux, SiNextdotjs } from "react-icons/si";

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
        staggerChildren: 0.1,
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

  const developmentProcess = [
    {
      step: "01",
      title: "Planning & Analysis",
      description: "Understanding requirements and planning the architecture",
      icon: <FaPaintBrush className="text-xl" />,
      color: "text-blue-500",
      borderColor: "border-blue-200 dark:border-blue-900"
    },
    {
      step: "02",
      title: "Design & Prototyping",
      description: "Creating wireframes and interactive prototypes",
      icon: <FaMobileAlt className="text-xl" />,
      color: "text-purple-500",
      borderColor: "border-purple-200 dark:border-purple-900"
    },
    {
      step: "03",
      title: "Development",
      description: "Building the application with clean, efficient code",
      icon: <FaCode className="text-xl" />,
      color: "text-green-500",
      borderColor: "border-green-200 dark:border-green-900"
    },
    {
      step: "04",
      title: "Testing & Deployment",
      description: "Thorough testing and deploying to production",
      icon: <FaRocket className="text-xl" />,
      color: "text-orange-500",
      borderColor: "border-orange-200 dark:border-orange-900"
    }
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "React", icon: <FaReact className="text-blue-500" />, level: 95 },
        { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white" />, level: 85 },
        { name: "TypeScript", icon: <SiTypescript className="text-blue-600" />, level: 80 },
        { name: "Tailwind", icon: <SiTailwindcss className="text-cyan-400" />, level: 90 }
      ],
      color: "border-blue-200 dark:border-blue-900",
      bgColor: "bg-blue-50 dark:bg-blue-900/20"
    },
    {
      title: "Backend Development",
      skills: [
        { name: "Node.js", icon: <FaNodeJs className="text-green-600" />, level: 90 },
        { name: "Express", icon: <SiExpress className="text-gray-600" />, level: 88 },
        { name: "MongoDB", icon: <SiMongodb className="text-green-700" />, level: 85 },
        { name: "Firebase", icon: <SiFirebase className="text-orange-500" />, level: 75 }
      ],
      color: "border-green-200 dark:border-green-900",
      bgColor: "bg-green-50 dark:bg-green-900/20"
    },
    {
      title: "Core Technologies",
      skills: [
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" />, level: 95 },
        { name: "HTML5", icon: <FaHtml5 className="text-orange-500" />, level: 98 },
        { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" />, level: 90 },
        { name: "Redux", icon: <SiRedux className="text-purple-500" />, level: 85 }
      ],
      color: "border-purple-200 dark:border-purple-900",
      bgColor: "bg-purple-50 dark:bg-purple-900/20"
    }
  ];

  const coreValues = [
    { icon: <FaCode className="text-blue-500" />, title: "Clean Code", description: "Writing maintainable and scalable code" },
    { icon: <FaUsers className="text-green-500" />, title: "User Focus", description: "Prioritizing user experience in every project" },
    { icon: <FaServer className="text-purple-500" />, title: "Performance", description: "Optimizing for speed and efficiency" },
    { icon: <FaRocket className="text-orange-500" />, title: "Innovation", description: "Embracing new technologies and approaches" }
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 py-20" id="about" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
            Full-stack developer passionate about creating exceptional digital experiences
          </p>
        </motion.div>

        {/* Introduction Section */}
        <motion.div
          className="bg-white dark:bg-gray-800 rounded-2xl p-8 mb-16 border border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Crafting Digital Experiences
              </h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  I'm a passionate full-stack developer with expertise in modern web technologies. 
                  With 1 year of experience, I specialize in building responsive, scalable applications 
                  that deliver exceptional user experiences.
                </p>
                <p>
                  My approach combines technical expertise with creative problem-solving, ensuring 
                  that every project not only meets requirements but exceeds expectations.
                </p>
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4">
              {coreValues.map((value, index) => (
                <motion.div
                  key={value.title}
                  className="p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-white dark:bg-gray-800 rounded-lg">
                      {value.icon}
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">{value.title}</h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Development Process */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            My Development Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentProcess.map((process, index) => (
              <motion.div
                key={process.step}
                className={`p-6 rounded-xl border ${process.borderColor} bg-white dark:bg-gray-800`}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-2xl font-bold ${process.color}`}>{process.step}</div>
                  <div>
                    <div className={`p-2 rounded-lg ${process.color} bg-white dark:bg-gray-700 w-fit mb-3`}>
                      {process.icon}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {process.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {process.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {category.title}
              </h3>
              <div className={`rounded-xl border ${category.color} ${category.bgColor} p-6`}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + skillIndex * 0.05 }}
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div className="text-2xl">{skill.icon}</div>
                        <span className="font-semibold text-gray-900 dark:text-white">{skill.name}</span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-gray-600 dark:text-gray-400">Proficiency</span>
                          <span className="font-semibold text-blue-600 dark:text-blue-400">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : {}}
                            transition={{ duration: 1, delay: 0.6 + skillIndex * 0.1 }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;