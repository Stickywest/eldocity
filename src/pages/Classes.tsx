// eslint-disable-next-line no-unused-vars
import  { useState } from "react";


const Classes = () => {
  const [showTimetable, setShowTimetable] = useState(false);

  const toggleTimetable = () => {
    setShowTimetable((prev) => !prev);
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat px-4 py-12"
      style={{
        backgroundImage: "url('/src/assets/background.avif')", // Update with your image path
      }}
    >
      <div className="bg-white bg-opacity-50 p-6 rounded-xl shadow-lg">
        {/* Page Header */}
        <h1 className="text-4xl font-extrabold text-center text-[#db6676] mb-8 md:mb-12">
          Our Classes
        </h1>
        <p className="text-lg text-center text-[#323233] mb-10">
          Explore our exciting Taekwondo and Karate programs for all skill levels.
          Join our passionate community and take your first step today!
        </p>

        {/* Classes Section */}
        <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
          {/* Class Card */}
          <div className="bg-gradient-to-br from-[#e1dfe0] to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-[#5a79a7] mb-4">
              Taekwondo Beginner
            </h2>
            <p className="text-[#323233] mb-4">
              Perfect for beginners eager to master the fundamentals of Taekwondo.
              Build your foundation and confidence step by step.
            </p>
            <div className="text-sm text-[#323233] mb-4">
              <p>
                <span className="font-medium">Schedule:</span> Mon & Wed, 5:00 PM - 6:30 PM
              </p>
            </div>
            <button className="w-full px-6 py-2 bg-[#5a79a7] text-white rounded-md hover:bg-[#475d8a] transition duration-300">
              Schedule a Class
            </button>
          </div>

          {/* Class Card */}
          <div className="bg-gradient-to-br from-[#e1dfe0] to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-[#db6676] mb-4">
              Karate Advanced
            </h2>
            <p className="text-[#323233] mb-4">
              For experienced students who want to refine their skills.
              Focus on advanced techniques, agility, and strength training.
            </p>
            <div className="text-sm text-[#323233] mb-4">
              <p>
                <span className="font-medium">Schedule:</span> Tue & Thu, 6:00 PM - 7:30 PM
              </p>
            </div>
            <button className="w-full px-6 py-2 bg-[#db6676] text-white rounded-md hover:bg-[#b85562] transition duration-300">
              Schedule a Class
            </button>
          </div>

          {/* Class Card */}
          <div className="bg-gradient-to-br from-[#e1dfe0] to-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-300">
            <h2 className="text-2xl font-bold text-[#5a79a7] mb-4">
              Kids Karate
            </h2>
            <p className="text-[#323233] mb-4">
              An engaging program designed for kids. Learn the basics of Karate
              while improving discipline and coordination in a fun environment.
            </p>
            <div className="text-sm text-[#323233] mb-4">
              <p>
                <span className="font-medium">Schedule:</span> Saturday, 10:00 AM - 11:30 AM
              </p>
            </div>
            <button className="w-full px-6 py-2 bg-[#5a79a7] text-white rounded-md hover:bg-[#475d8a] transition duration-300">
              Schedule a Class
            </button>
          </div>
        </div>

        {/* Toggle Timetable Button */}
        <div className="mt-12 text-center">
          <button
            onClick={toggleTimetable}
            className="px-6 py-3 bg-[#db6676] text-white rounded-lg shadow-lg font-medium hover:bg-[#b85562] transition duration-300"
          >
            {showTimetable ? "Hide Timetable" : "View Timetable"}
          </button>
        </div>

        {/* Timetable Section */}
        {showTimetable && (
          <div className="mt-8 bg-[#f9f9f9] p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#db6676] mb-6">Weekly Timetable</h2>
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#e1dfe0] text-[#323233]">
                  <th className="py-3 px-6 border">Day</th>
                  <th className="py-3 px-6 border">Class</th>
                  <th className="py-3 px-6 border">Time</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-6 border">Monday</td>
                  <td className="py-3 px-6 border">Taekwondo Beginner</td>
                  <td className="py-3 px-6 border">5:00 PM - 6:30 PM</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border">Tuesday</td>
                  <td className="py-3 px-6 border">Karate Advanced</td>
                  <td className="py-3 px-6 border">6:00 PM - 7:30 PM</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border">Wednesday</td>
                  <td className="py-3 px-6 border">Taekwondo Beginner</td>
                  <td className="py-3 px-6 border">5:00 PM - 6:30 PM</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border">Thursday</td>
                  <td className="py-3 px-6 border">Karate Advanced</td>
                  <td className="py-3 px-6 border">6:00 PM - 7:30 PM</td>
                </tr>
                <tr>
                  <td className="py-3 px-6 border">Saturday</td>
                  <td className="py-3 px-6 border">Kids Karate</td>
                  <td className="py-3 px-6 border">10:00 AM - 11:30 AM</td>
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Classes;
