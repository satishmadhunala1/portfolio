import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    // Smooth scroll for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach((anchor) => {
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
        setIsOpen(false); // Close menu on link click
      });
    });

    // Click outside to close menu
    const handleClickOutside = (e) => {
      if (isOpen && menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="container mx-auto py-4 flex justify-between items-center relative">
        <div className="text-2xl font-bold animate-fade-in">Satish</div>

        {/* Hamburger Button */}
        <div className="md:hidden z-50">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 items-center">
          <NavLinks />
          <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full hover:scale-105 transition transform duration-300 animate-fade-in-slow">
            Connect Me
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div
            ref={menuRef}
            className="absolute top-16 left-0 w-full  text-center py-6 flex flex-col space-y-4 md:hidden z-40"
          >
            <NavLinks />
          </div>
        )}
      </div>
    </nav>
  );
};

const NavLinks = () => (
  <>
    <a href="#home" className="hover:text-gray-400 animate-fade-in-slow">
      Home
    </a>
    <a href="#about" className="hover:text-gray-400 animate-fade-in-slow">
      About Me
    </a>
    <a href="#service" className="hover:text-gray-400 animate-fade-in-slow">
      Services
    </a>
    <a href="#project" className="hover:text-gray-400 animate-fade-in-slow">
      Projects
    </a>
    <a href="#contact" className="hover:text-gray-400 animate-fade-in-slow">
      Contact
    </a>
  </>
);

export default Navbar;
