import { motion } from "framer-motion";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50
        bg-white/70 backdrop-blur-xl
        shadow-md
      "
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-indigo-600">
          Angel <span className="text-gray-800">Sriram</span>
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-700">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="hover:text-indigo-600 transition"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
