import React, { useState, useEffect, useRef } from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [animatedParagraph, setAnimatedParagraph] = useState(false);
  const [animatedBars, setAnimatedBars] = useState([]);

  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const paragraphRef = useRef(null);
  const barRefs = useRef([]);

  useEffect(() => {
    const observerOptions = {
      rootMargin: "0px",
      threshold: 0.2, // Trigger when 20% of the element is in view
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === headingRef.current) {
            setAnimateHeading(true);
          } else if (entry.target === imageRef.current) {
            setAnimateImage(true);
          } else if (entry.target === paragraphRef.current) {
            setAnimatedParagraph(true);
          } else {
            barRefs.current.forEach((bar, index) => {
              if (entry.target === bar) {
                setAnimatedBars((prev) => [...prev, index]);
              }
            });
          }
        } else {
          // Reset animations when the element leaves the viewport
          if (entry.target === headingRef.current) {
            setAnimateHeading(false);
          } else if (entry.target === imageRef.current) {
            setAnimateImage(false);
          } else if (entry.target === paragraphRef.current) {
            setAnimatedParagraph(false);
          } else {
            barRefs.current.forEach((bar, index) => {
              if (entry.target === bar) {
                setAnimatedBars((prev) => prev.filter((i) => i !== index));
              }
            });
          }
        }
      });
    }, observerOptions);

    // Observe elements
    observer.observe(headingRef.current);
    observer.observe(imageRef.current);
    observer.observe(paragraphRef.current);
    barRefs.current.forEach((bar) => observer.observe(bar));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      className="bg-black text-white py-20 min-h-screen flex flex-col justify-center items-center"
      id="about"
    >
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading Animation */}
        <h2
          ref={headingRef}
          className={`text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 transition-transform duration-700 ${
            animateHeading ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image Animation */}
          <img
            ref={imageRef}
            // src={AboutImage}
            // alt="About Me"
            // className={`w-72 h-80 rounded object-cover mb-8 md:mb-0 transition-transform duration-700 ${
            //   animateImage ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            // }`}
          />

          <div className="flex-1">
            {/* Paragraph Animation */}
            <p
              ref={paragraphRef}
              className={`text-lg sm:text-xl md:text-2xl mb-8 transition-transform duration-700 ${
                animatedParagraph ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
              }`}
            >
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>

            {/* Progress Bars Animation */}
            <div className="space-y-4">
              {[{ label: "HTML & CSS", width: "w-10/12" }, { label: "React JS", width: "w-11/12" }, { label: "Node JS", width: "w-9/12" }].map(
                (bar, index) => (
                  <div className="flex items-center" key={index}>
                    <label className="w-2/12">{bar.label}</label>
                    <div className="grow bg-gray-800 rounded-full h-2.5">
                      <div
                        ref={(el) => (barRefs.current[index] = el)}
                        className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-700 ${
                          animatedBars.includes(index)
                            ? `${bar.width} opacity-100`
                            : "w-0 opacity-0"
                        }`}
                      ></div>
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
