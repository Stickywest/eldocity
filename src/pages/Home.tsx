import React from 'react';
import HelloSection from '../components/HelloSection'; // Ensure the path is correct

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative">
        <HelloSection />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 mt-16">
          Welcome to the Taekwondo & Karate Academy
        </h1>
        <p className="text-xl text-center mb-8">
          Join us to master martial arts in Taekwondo and Karate. Our academy offers professional training for all skill levels.
        </p>

        <div className="text-center">
          <h2 className="text-3xl font-semibold mb-4">What We Offer</h2>
          <div className="flex justify-center gap-8">
            <div className="max-w-sm bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Taekwondo</h3>
              <p>
                Learn the art of Taekwondo with our expert trainers. Focus on discipline, technique, and self-defense.
              </p>
            </div>
            <div className="max-w-sm bg-gray-100 p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-2">Karate</h3>
              <p>
                Master Karate techniques and boost your confidence, fitness, and mental clarity with our programs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
