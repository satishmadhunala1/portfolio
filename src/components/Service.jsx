import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
    icon: "🎨",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
    icon: "💻",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
    icon: "⚙️",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
    icon: "🚀",
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

    // Observer for heading
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
      className="relative flex items-center justify-center min-h-screen py-20 overflow-hidden bg-gradient-to-br from-gray-900 to-black"
      id="service"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-purple-900/10 to-transparent"></div>
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/20 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600/20 rounded-full blur-3xl"></div>
      
      <div className="container relative z-10 mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading Animation */}
        <motion.div
          ref={headingRef}
          className="relative mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={animatedHeading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="absolute left-1/2 -translate-x-1/2 -top-10 w-24 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent"></div>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            My Services
          </h2>
          <p className="mt-4 text-lg text-gray-400 max-w-2xl mx-auto">
            Premium digital solutions crafted with precision and attention to detail
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="group relative bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-purple-500/30 shadow-2xl shadow-black/50 hover:shadow-purple-500/10 transition-all duration-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.6, delay: service.id * 0.1 }}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3 }
              }}
            >
              {/* Decorative corner accents */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Service number with gradient circle */}
              <div className="relative mb-6">
                <div className="absolute -left-2 -top-2 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <motion.div
                  className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 relative z-10"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: service.id * 0.1 }}
                >
                  {service.id.toString().padStart(2, '0')}
                </motion.div>
              </div>
              
              {/* Service icon */}
              <motion.div 
                className="text-4xl mb-4"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: service.id * 0.2 }}
              >
                {service.icon}
              </motion.div>
              
              {/* Service title */}
              <motion.h3
                className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-300 group-hover:to-cyan-300 transition-all duration-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.2 }}
              >
                {service.title}
              </motion.h3>
              
              {/* Service description */}
              <motion.p
                className="mt-4 text-gray-400 group-hover:text-gray-300 transition-colors duration-500"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.3 }}
              >
                {service.description}
              </motion.p>
              
              {/* Hover action element */}
              <motion.div 
                className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:rotate-45"
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.4 }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </motion.div>
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
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-full text-white font-medium hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 transform hover:-translate-y-1">
            Explore All Services
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;