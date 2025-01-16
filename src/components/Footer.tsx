import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-6 text-white">
      <div className="container mx-auto text-center">
        {/* Academy Name */}
        <h2 className="text-2xl font-semibold mb-2">
          Taekwondo & Karate Academy
        </h2>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-4 my-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <FaFacebook size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-4"></div>

        {/* Copyright */}
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Taekwondo & Karate Academy. All
          rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
