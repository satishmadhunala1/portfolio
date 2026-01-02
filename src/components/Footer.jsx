import { FaEnvelope, FaMapMarkerAlt, FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaArrowUp } from "react-icons/fa";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const socialLinks = [
    { 
      icon: <FaFacebook />, 
      href: "https://www.facebook.com/",
      color: "hover:bg-blue-600"
    },
    { 
      icon: <FaTwitter />, 
      href: "https://x.com/i/flow/login",
      color: "hover:bg-sky-500"
    },
    { 
      icon: <FaLinkedin />, 
      href: "https://www.linkedin.com/in/satish-madhunala-671305213/",
      color: "hover:bg-blue-700"
    },
    { 
      icon: <FaGithub />, 
      href: "https://github.com/satishmadhunala1",
      color: "hover:bg-gray-800"
    }
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 border-t border-gray-200 dark:border-gray-800">
      {/* Scroll to top button */}
      <motion.button
        onClick={scrollToTop}
        className={`fixed right-8 bottom-8 z-50 w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700 text-white flex items-center justify-center shadow-md hover:shadow-lg transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        animate={{ y: showScrollTop ? 0 : 10 }}
        transition={{ duration: 0.3 }}
      >
        <FaArrowUp className="text-lg" />
      </motion.button>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Satish Madhunala
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Full-Stack Developer specializing in modern web applications and software development.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 transition-colors duration-300 ${social.color}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:text-center">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <li key={index}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:text-right">
            <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Get In Touch</h4>
            <div className="space-y-3">
              <p className="text-gray-600 dark:text-gray-400">
                <FaEnvelope className="inline mr-2 text-blue-500" />
                satishmadhunala03@gmail.com
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                <FaMapMarkerAlt className="inline mr-2 text-green-500" />
                Hyderabad, India
              </p>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-300 dark:border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Satish Madhunala. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;