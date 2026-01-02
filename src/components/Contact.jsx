import React, { useState } from "react";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";

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
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: "Email",
      content: "satishmadhunala03@gmail.com",
      link: "mailto:satishmadhunala03@gmail.com",
      color: "text-blue-500"
    },
    {
      icon: <FaPhone />,
      title: "Phone",
      content: "+91 6309284605",
      color: "text-green-500"
    },
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      content: "Hyderabad, India",
      color: "text-purple-500"
    },
  ];

  return (
    <div
      className="bg-white dark:bg-gray-900 py-20"
      id="contact"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Get in touch to discuss your project or collaboration opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                I'm open to discuss web development projects or partnership opportunities. 
                Feel free to reach out!
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={info.title}
                    className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg border border-gray-200 dark:border-gray-600"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                  >
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${info.color} bg-white dark:bg-gray-800 mr-4`}>
                      <div className="text-xl">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{info.title}</p>
                      {info.link ? (
                        <a 
                          href={info.link}
                          className="text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-800 dark:text-white">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-gray-700 dark:text-gray-300">
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                  placeholder="Enter your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-gray-700 dark:text-gray-300">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                  placeholder="Enter your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-gray-700 dark:text-gray-300">
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-lg bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-800 dark:text-white"
                  rows="4"
                  placeholder="Enter your message"
                />
              </div>
              
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-lg font-medium transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;