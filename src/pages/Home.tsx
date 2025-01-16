import React, { useEffect, useRef, useState } from 'react';
import HelloSection from '../components/HelloSection'; // Ensure the path is correct

const Home: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div className="w-full relative">
        <HelloSection />
      </div>

      {/* About Us Section */}
      <div
        ref={aboutRef}
        className={`bg-gray-50 py-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}
      >
        <div className="container mx-auto px-4 flex flex-wrap items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 relative">
            <img
              src="/src/assets/image.png" // Replace with your image path
              alt="About Us"
              className={`rounded-lg shadow-lg w-full transition-opacity duration-1000 md:${isVisible ? 'opacity-100' : 'opacity-0'} ${
                // For mobile, hide the image during animation
                isVisible ? 'opacity-100' : 'opacity-0 md:opacity-100'
              }`}
            />
          </div>

          {/* Content */}
          <div
            className={`w-full md:w-1/2 px-4 transition-all duration-1000 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-10 md:translate-y-0'
            }`}
          >
            <h1 className="text-4xl font-bold text-blue-600 mb-6">About Us</h1>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to the leading Taekwondo and Karate academy in Kenya! Our academy is proud to have been recognized with the prestigious{' '}
              <span className="font-bold text-blue-600">Best Trainers in Kenya</span> award.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              With years of experience and a proven track record, we have trained hundreds of students who have gone on to achieve excellence in martial arts. Our programs are designed to build discipline, confidence, and skill at all levels—from beginners to advanced practitioners.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Join us today and be part of an award-winning academy where your potential becomes limitless!
            </p>
            <a
              href="#"
              className="inline-block mt-4 bg-gray-600 text-white py-3 px-6 rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>

      {/* Client Testimonials */}
      <div className="bg-gray-100 py-12">
        <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((_, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out"
            >
              <p className="text-gray-700 italic mb-4">
                "The academy has changed my life. The trainers are fantastic, and I've grown so much as a person."
              </p>
              <div className="flex items-center mb-2">
                {[...Array(5)].map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    xmlns="http://www.w3.org/2000/svg"
                    fill={starIndex < 4 ? 'gold' : 'gray'}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 17.25l-5.197 2.73 1.02-5.93L3.826 9.48l5.961-.87L12 3.75l2.213 4.86 5.961.87-4.997 4.57 1.02 5.93z"
                    />
                  </svg>
                ))}
              </div>
              <h4 className="text-lg font-semibold">- John Doe</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
