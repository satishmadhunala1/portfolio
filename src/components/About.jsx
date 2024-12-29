import React, { useState, useEffect } from "react";
import AboutImage from "../assets/aboutme-image.png";

const About = () => {
  const [animateHeading, setAnimateHeading] = useState(false);
  const [animateImage, setAnimateImage] = useState(false);
  const [animatedParagraph, setAnimatedParagraph] = useState(false);
  const [animatedBars, setAnimatedBars] = useState([]);

  useEffect(() => {
    // Trigger animations sequentially
    setTimeout(() => setAnimateHeading(true), 300); // Delay for heading
    setTimeout(() => setAnimateImage(true), 600); // Delay for image
    setTimeout(() => setAnimatedParagraph(true), 900); // Delay for paragraph

    // Animate progress bars sequentially
    [0, 1, 2].forEach((barIndex) => {
      setTimeout(() => {
        setAnimatedBars((prev) => [...prev, barIndex]);
      }, 1200 + barIndex * 300); // Delay each bar by 300ms
    });
  }, []);

  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        {/* Heading Animation */}
        <h2
          className={`text-4xl font-bold text-center mb-12 transition-transform duration-700 ${
            animateHeading ? "translate-y-0 opacity-100" : "-translate-y-10 opacity-0"
          }`}
        >
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* Image Animation */}
          <img
            src={AboutImage}
            alt="About Me"
            className={`w-72 h-80 rounded object-cover mb-8 md:mb-0 transition-transform duration-700 ${
              animateImage ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"
            }`}
          />

          <div className="flex-1">
            {/* Paragraph Animation */}
            <p
              className={`text-lg mb-8 transition-transform duration-700 ${
                animatedParagraph
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              }`}
            >
              I am a passionate full-stack developer with a focus on building
              modern and responsive web applications. With a strong foundation
              in both frontend and backend technologies, I strive to create
              seamless and efficient user experiences.
            </p>

            {/* Progress Bars Animation */}
            <div className="space-y-4">
              {[
                { label: "HTML & CSS", width: "w-10/12" },
                { label: "React JS", width: "w-11/12" },
                { label: "Node JS", width: "w-9/12" },
              ].map((bar, index) => (
                <div className="flex items-center" key={index}>
                  <label className="w-2/12">{bar.label}</label>
                  <div className="grow bg-gray-800 rounded-full h-2.5">
                    <div
                      className={`bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transition-all duration-700 ${
                        animatedBars.includes(index)
                          ? `${bar.width} opacity-100`
                          : "w-0 opacity-0"
                      }`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
