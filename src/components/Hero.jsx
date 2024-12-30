import React, { useState, useEffect } from 'react';
import HeroImage from '../assets/hero-image.png';

const Hero = () => {
  const [animateImage, setAnimateImage] = useState(false);
  const [animateTitle, setAnimateTitle] = useState(false);
  const [animateButtons, setAnimateButtons] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const titles = ['Full-Stack Developer', 'MERN Developer'];

  useEffect(() => {
    // Trigger animations sequentially
    setTimeout(() => setAnimateImage(true), 500); // Image animates first
    setTimeout(() => setAnimateTitle(true), 1000); // Title animates next
    setTimeout(() => setAnimateButtons(true), 1500); // Buttons animate last

    // Cycle through titles every 2.5 seconds
    const interval = setInterval(() => {
      setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2500);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div className="bg-black text-white text-center py-16 min-h-screen flex flex-col justify-center items-center">
      {/* Image Animation */}
      <img
        src={HeroImage}
        alt="Profile"
        className={`mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-700 ${
          animateImage ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
        }`}
      />

      {/* Title Animation */}
      <h1
        className={`text-3xl sm:text-4xl md:text-5xl font-bold transition-transform duration-700 ${
          animateTitle ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}
      >
        I'm{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Satish Madhunala
        </span>
        ,{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500">
          {titles[titleIndex]}
        </span>
      </h1>

      <p
        className={`mt-4 text-lg sm:text-xl text-gray-300 transition-transform duration-700 ${
          animateTitle ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
        }`}
      >
        I specialize in building modern and responsive web applications.
      </p>

      <div
        className={`mt-8 space-x-4 transition-transform duration-700 ${
          animateButtons ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}
      >
        <a
          href="#contact"
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Contact With Me
        </a>
        <a
          href="https://drive.google.com/file/d/1ymX-_KdX2xtU138qLaN52Hms88buHnNY/view?usp=sharing"
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
