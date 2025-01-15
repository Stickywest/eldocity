import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const HelloSection: React.FC = () => {
  const [isKarateVisible, setIsKarateVisible] = useState(true);

  // Toggle between Karate and Taekwondo sections on small screens
  useEffect(() => {
    const interval = setInterval(() => {
      setIsKarateVisible((prev) => !prev);
    }, 5000); // Change every 5 seconds
    return () => clearInterval(interval);
  }, []);

  const slideLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section
      className="w-full h-screen bg-cover bg-center relative"
      style={{
        backgroundImage: "url('/src/assets/hero.avif')", // Replace with the actual image path
      }}
    >
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative max-w-7xl mx-auto h-full flex flex-col justify-center px-6">
        {/* For small screens, toggle between Karate and Taekwondo */}
        <div className="md:hidden">
          <motion.div
            variants={isKarateVisible ? slideLeft : slideRight}
            initial="hidden"
            animate="visible"
            exit="hidden"
            key={isKarateVisible ? 'karate' : 'taekwondo'}
            transition={{
              duration: 1, // Smooth transition duration
              ease: 'easeInOut', // Smooth easing
            }}
            className="text-center text-white"
          >
            {isKarateVisible ? (
              <div>
                <h1 className="text-4xl font-bold leading-tight">
                  Welcome to <span className="text-pink">Karate</span> Training
                </h1>
                <p className="mt-4 text-lg">
                  Master the art of discipline, focus, and self-defense through our expert-led Karate classes. Perfect for all ages and skill levels.
                </p>
                <button className="mt-6 px-6 py-3 bg-pink text-white font-medium rounded-md shadow-md hover:bg-white hover:text-pink transition">
                  Join Karate Now
                </button>
              </div>
            ) : (
              <div>
                <h1 className="text-4xl font-bold leading-tight">
                  Explore the World of <span className="text-pink">Taekwondo</span>
                </h1>
                <p className="mt-4 text-lg">
                  Experience the power, speed, and agility of Taekwondo. Learn from the best and become a champion in no time.
                </p>
                <button className="mt-6 px-6 py-3 bg-pink text-white font-medium rounded-md shadow-md hover:bg-white hover:text-pink transition">
                  Join Taekwondo Now
                </button>
              </div>
            )}
          </motion.div>
        </div>

        {/* For larger screens, display both sections with slide-in motion */}
        <div className="hidden md:grid md:grid-cols-2 gap-10">
          {/* Karate Section with slide-in motion from left */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className="text-center md:text-left text-white"
          >
            <h1 className="text-4xl font-bold leading-tight">
              Welcome to <span className="text-pink">Karate</span> Training
            </h1>
            <p className="mt-4 text-lg">
              Master the art of discipline, focus, and self-defense through our expert-led Karate classes. Perfect for all ages and skill levels.
            </p>
            <button className="mt-6 px-6 py-3 bg-pink text-white font-medium rounded-md shadow-md hover:bg-white hover:text-pink transition">
              Join Karate Now
            </button>
          </motion.div>

          {/* Taekwondo Section with slide-in motion from right */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            animate="visible"
            transition={{
              duration: 0.6,
              ease: 'easeInOut',
            }}
            className="text-center md:text-left text-white"
          >
            <h1 className="text-4xl font-bold leading-tight">
              Explore the World of <span className="text-pink">Taekwondo</span>
            </h1>
            <p className="mt-4 text-lg">
              Experience the power, speed, and agility of Taekwondo. Learn from the best and become a champion in no time.
            </p>
            <button className="mt-6 px-6 py-3 bg-pink text-white font-medium rounded-md shadow-md hover:bg-white hover:text-pink transition">
              Join Taekwondo Now
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HelloSection;
