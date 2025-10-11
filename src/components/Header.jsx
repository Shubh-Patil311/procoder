import React from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";

const Header = ({ activeSection, setActiveSection }) => {
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "placement", label: "Placement" },
    { id: "contact", label: "Contact" },
  ];

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 h-16 border-b border-gray-200">
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        {/* Logo */}
        <motion.div
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          {/* Logo Image */}
          <img
            src={Logo}
            alt="ProCoder Infosystem Logo"
            className="w-10 h-10 object-contain" // Adjust size as needed
          />
          <span className="text-xl font-bold text-gray-800">
            ProCoder<span className="text-blue-600">Infosystem</span>
          </span>
        </motion.div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-blue-600 text-white shadow-md"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.label}
            </motion.button>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <motion.button
            className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 py-2 flex flex-col space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`px-4 py-3 rounded-lg text-left font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-blue-50"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
