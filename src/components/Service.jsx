import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaPaintBrush, FaCode, FaServer, FaLayerGroup } from "react-icons/fa";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    icon: <FaPaintBrush />,
    color: "text-purple-500",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: <FaCode />,
    color: "text-blue-500",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    icon: <FaServer />,
    color: "text-green-500",
    bgColor: "bg-green-50 dark:bg-green-900/20",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    icon: <FaLayerGroup />,
    color: "text-orange-500",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
];

const Service = () => {
  const [animatedHeading, setAnimatedHeading] = useState(false);
  const headingRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.2,
    };

    const headingObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setAnimatedHeading(true);
        }
      });
    }, observerOptions);

    headingRef.current && headingObserver.observe(headingRef.current);

    return () => {
      headingObserver.disconnect();
    };
  }, []);

  return (
    <div
      className="bg-white dark:bg-gray-900 py-20"
      id="service"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          ref={headingRef}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={animatedHeading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Premium digital solutions crafted with precision and attention to detail
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`p-6 rounded-xl border ${service.borderColor} ${service.bgColor}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3 }
              }}
            >
              {/* Service icon */}
              <div className={`w-14 h-14 rounded-lg flex items-center justify-center mb-4 ${service.color} bg-white dark:bg-gray-800`}>
                <div className="text-2xl">
                  {service.icon}
                </div>
              </div>
              
              {/* Service title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>
              
              {/* Service description */}
              <p className="text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
              
              {/* Learn more link */}
              <div className="mt-6">
                <a href="#" className={`inline-flex items-center ${service.color} font-medium`}>
                  Learn more
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button className="px-8 py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg text-white font-medium transition-colors duration-300">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;