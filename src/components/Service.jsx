import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing robust server-side logic and databases.",
  },
  {
    id: 4,
    title: "Full-Stack Development",
    description: "Combining both frontend and backend development skills.",
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
        } else {
          setAnimatedHeading(false);
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
      className="bg-black text-white flex items-center justify-center min-h-screen py-20"
      id="service"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading Animation */}
        <motion.h2
          ref={headingRef}
          className={`text-4xl font-bold text-center mb-12 transition-transform duration-700 ${
            animatedHeading ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          My Services
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5, delay: service.id * 0.2 }}
            >
              <motion.div
                className="text-right text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400"
                initial={{ x: -100 }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.6, delay: service.id * 0.1 }}
              >
                {service.id}
              </motion.div>
              <motion.h3
                className="mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.2 }}
              >
                {service.title}
              </motion.h3>
              <motion.p
                className="mt-2 text-gray-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: service.id * 0.3 }}
              >
                {service.description}
              </motion.p>
              <motion.a
                href="#"
                className="mt-4 inline-block text-green-400 hover:text-blue-500"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: service.id * 0.4 }}
              >
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;
