// src/pages/Classes.tsx

const Classes = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Our Classes</h1>
        <p className="mb-8">Explore our Taekwondo and Karate classes designed for all levels.</p>
  
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Taekwondo Beginner</h2>
            <p className="text-lg">For beginners who want to learn the basics of Taekwondo. Focus on basic techniques and building a strong foundation.</p>
            <p className="text-sm text-gray-500">Schedule: Monday & Wednesday, 5:00 PM - 6:30 PM</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Karate Advanced</h2>
            <p className="text-lg">For advanced students aiming to refine their Karate techniques. Improve strength, agility, and flexibility.</p>
            <p className="text-sm text-gray-500">Schedule: Tuesday & Thursday, 6:00 PM - 7:30 PM</p>
          </div>
  
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Kids Karate</h2>
            <p className="text-lg">A fun, engaging program for kids to learn the basics of Karate, build discipline, and improve coordination.</p>
            <p className="text-sm text-gray-500">Schedule: Saturday, 10:00 AM - 11:30 AM</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Classes;
  