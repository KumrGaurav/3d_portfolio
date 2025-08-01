import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20); // Change threshold as needed
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-colors duration-500 ${
        scrolled ? "bg-black bg-opacity-80 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img
              src={logo}
              alt="logo"
              className="w-full h-full object-contain scale-125 transition-transform duration-300"
            />
          </div>
          <span className="text-white font-bold text-xl hidden sm:block bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            {/* Optional brand name here */}
          </span>
        </NavLink>

        <nav className="flex text-lg gap-7 font-medium">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600 font-bold"
                : "text-gray-300 hover:text-white transition-colors duration-300"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-rose-600 font-bold"
                : "text-gray-300 hover:text-white transition-colors duration-300"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-600 font-bold"
                : "text-gray-300 hover:text-white transition-colors duration-300"
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
