// src/pages/Contact.tsx

const Contact = () => {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p className="mb-8">Feel free to reach out with any questions or inquiries about our classes, events, or anything else!</p>
  
        <div className="space-y-6">
          <div className="bg-gray-100 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold">Get in Touch</h2>
            <form>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"/>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg"/>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea id="message" className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-lg" rows={4}></textarea>
              </div>
              <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded-lg">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    );
  };
  
  export default Contact;
  