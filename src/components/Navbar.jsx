import React, { useEffect } from "react";

const Navbar = () => {
  useEffect(() => {
    // Adding smooth scroll behavior to anchor links
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = anchor.getAttribute("href").slice(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      });
    });
  }, []);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-2 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold hidden md:inline animate-fade-in">
          Satish
        </div>
        <div className="space-x-6">
          <a
            href="#home"
            className="hover:text-gray-400 animate-fade-in-slow"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-gray-400 animate-fade-in-slow"
          >
            About Me
          </a>
          <a
            href="#service"
            className="hover:text-gray-400 animate-fade-in-slow"
          >
            Services
          </a>
          <a
            href="#project"
            className="hover:text-gray-400 animate-fade-in-slow"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:text-gray-400 animate-fade-in-slow"
          >
            Contact
          </a>
        </div>
        <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full animate-fade-in-slow">
          Connect Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
