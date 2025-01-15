// src/pages/Gallery.tsx

const Gallery = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Gallery</h1>
        <p className="mb-8">A glimpse into the world of Taekwondo and Karate through our events and training sessions.</p>
  
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Taekwondo Training" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-semibold">Taekwondo Training</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Karate Tournament" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-semibold">Karate Tournament</h3>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <img src="https://via.placeholder.com/300" alt="Karate Class" className="w-full h-48 object-cover rounded-lg mb-4"/>
            <h3 className="text-xl font-semibold">Karate Class</h3>
          </div>
        </div>
      </div>
    );
  };
  
  export default Gallery;
  