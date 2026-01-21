import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-500 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">

        {/* Left: Copyright */}
        <p className="text-sm opacity-90">
          © 2026 Angel Sriram | All Rights Reserved
        </p>

        {/* Right: Social icons */}
        <div className="flex gap-6 text-lg">
          <a
            href="mailto:yourmail@gmail.com"
            className="hover:text-yellow-300 transition"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-300 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
