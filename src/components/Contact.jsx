import React, { useRef, useState } from "react";
import { FaEnvelope, FaMapMarkedAlt, FaPhone, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// 3D Animated Background Element for Contact
const ContactSphere = () => {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial
        color="#0ea5e9"
        attach="material"
        distort={0.3}
        speed={1.5}
        roughness={0.2}
        metalness={0.7}
      />
    </Sphere>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Form submission logic would go here
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  return (
    <motion.div
      className="bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white py-20 min-h-screen relative overflow-hidden"
      id="contact"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: false, amount: 0.3 }}
    >
      {/* 3D Background Element */}
      <div className="absolute inset-0 overflow-hidden z-0 opacity-10">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <ContactSphere />
          <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
        </Canvas>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
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
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <div className="inline-block relative">
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-purple-600 blur-2xl opacity-30 rounded-full"></div>
            <h2 className="relative text-4xl sm:text-5xl md:text-6xl font-bold">
              Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Me</span>
            </h2>
          </div>
          <motion.div 
            className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: false, amount: 0.5 }}
          ></motion.div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div
            className="bg-gradient-to-b from-gray-800/30 to-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
              Let's Talk
            </h3>
            <p className="text-gray-300 mb-8">
              I'm open to discuss web development projects or partnership opportunities. Feel free to reach out!
            </p>
            
            <div className="space-y-6">
              <motion.div 
                className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4">
                  <FaEnvelope className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <a
                    href="mailto:satishmadhunala2000@gmail.com"
                    className="hover:text-blue-400 transition-colors"
                  >
                    satishmadhunala03@gmail.com
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2, delay: 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4">
                  <FaPhone className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <span>+91 6309284605</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="flex items-center p-4 bg-gray-800/50 rounded-xl border border-gray-700"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2, delay: 0.2 }}
              >
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center mr-4">
                  <FaMapMarkedAlt className="text-white text-lg" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Location</p>
                  <span>Hyderabad, India</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gradient-to-b from-gray-800/30 to-gray-900/50 backdrop-blur-md p-8 rounded-2xl border border-gray-700 shadow-xl"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false, amount: 0.5 }}
          >
            <form
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <label htmlFor="name" className="block mb-2 text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter Your Name"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <label htmlFor="email" className="block mb-2 text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Enter Your Email"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <label htmlFor="message" className="block mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-xl bg-gray-800/50 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  rows="5"
                  placeholder="Enter Your Message"
                />
              </motion.div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-4 rounded-xl font-medium shadow-lg hover:shadow-blue-500/20 transition-all flex items-center justify-center disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FaPaperPlane className="mr-2" />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
export default Contact;