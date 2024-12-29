import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [animateLogo, setAnimateLogo] = useState(false);
  const [animatedLinks, setAnimatedLinks] = useState([]);
  const [animateButton, setAnimateButton] = useState(false);
  const links = ['Home', 'About Me', 'Services', 'Projects', 'Contact'];

  useEffect(() => {
    // Trigger logo animation
    setAnimateLogo(true);

    // Animate links one by one
    links.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedLinks((prev) => [...prev, index]);
      }, index * 300); // 300ms delay between each link
    });

    // Animate button after links
    setTimeout(() => setAnimateButton(true), links.length * 300 + 500); // Delay for all links to appear
  }, []);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        {/* Logo Animation */}
        <div
          className={`text-2xl font-bold hidden md:inline transition-transform duration-700 ${
            animateLogo ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
          }`}
        >
          Satish
        </div>

        {/* Links Animation */}
        <div className="space-x-6">
          {links.map((link, index) => (
            <a
              key={index}
              href={`#${link.toLowerCase().replace(' ', '')}`}
              className={`hover:text-gray-400 transition-transform duration-500 ${
                animatedLinks.includes(index) ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 300}ms` }} // Ensure smooth delay
            >
              {link}
            </a>
          ))}
        </div>

        {/* Button Animation */}
        <button
          className={`bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-700 ${
            animateButton ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
          } px-4 py-2 rounded-full`}
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
