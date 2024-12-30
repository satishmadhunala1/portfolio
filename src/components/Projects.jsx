import React, { useState, useEffect, useRef } from "react";
import employeeMSImage from "../assets/e-commerce.png";

// import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "E-Commerce App",
    technologies: "MERN Stack",
    image: employeeMSImage,
    github: "https://github.com/satishmadhunala1/e-zone-react-app.git",
  },
  // Uncomment and modify other projects as needed
  // {
  //   id: 2,
  //   name: "Blog App",
  //   technologies: "MERN Stack",
  //   image: bookMSImage,
  //   github: "https://github.com/YouafKhan1",
  // },
  // {
  //   id: 3,
  //   name: "Book MS",
  //   technologies: "MERN Stack",
  //   image: employeeMSImage,
  //   github: "https://github.com/YouafKhan1",
  // },
];

const Projects = () => {
  const [animatedHeading, setAnimatedHeading] = useState(false);
  const [animatedCards, setAnimatedCards] = useState([]);
  const projectRefs = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is in view
    };

    // Observer for projects
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = projectRefs.current.indexOf(entry.target);
          if (index !== -1 && !animatedCards.includes(index)) {
            setAnimatedCards((prev) => [...prev, index]);
          }
        } else {
          const index = projectRefs.current.indexOf(entry.target);
          if (index !== -1) {
            setAnimatedCards((prev) => prev.filter((i) => i !== index));
          }
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((card) => observer.observe(card));

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
      observer.disconnect();
      headingObserver.disconnect();
    };
  }, [animatedCards]);

  return (
    <div
      className="bg-black text-white flex items-center justify-center min-h-screen py-20"
      id="project"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading Animation */}
        <h2
          ref={headingRef}
          className={`text-4xl font-bold text-center mb-12 transition-transform duration-700 ${
            animatedHeading ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className={`bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 ${
                animatedCards.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "-translate-y-10 opacity-0"
              }`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
