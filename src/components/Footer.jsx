import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaHome,
  FaUser,
  FaCogs,
  FaBriefcase,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Logo from "../assets/Logo.png";

const Footer = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickLinks = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About Us", icon: <FaUser /> },
    { id: "services", label: "Services", icon: <FaCogs /> },
    { id: "placement", label: "Placement", icon: <FaBriefcase /> },
    { id: "contact", label: "Contact Us", icon: <FaEnvelope /> },
  ];

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLogoClick = () => {
    setActiveSection("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  return (
    <motion.footer
      className="bg-gray-900 text-white py-12 border-t border-blue-700"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <motion.div
              className="flex items-center space-x-3 mb-4 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleLogoClick}
            >
              {/* Logo Image */}
              <motion.div
                className="w-12 h-12 bg-white rounded-lg flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden p-1"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{
                  rotate: { duration: 0.6, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 400 },
                }}
              >
                <motion.img
                  src={Logo}
                  alt="ProCoder Infosystem Logo"
                  className="w-full h-full object-contain"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                />
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                ProCoder Infosystem
              </motion.h3>
            </motion.div>
            <motion.p
              className="text-gray-300 mb-4 leading-relaxed"
              variants={itemVariants}
            >
              Empowering careers through quality IT training and 100% placement
              support.
            </motion.p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-bold mb-4 text-white flex items-center space-x-2"
              variants={itemVariants}
            >
              <motion.span
                animate={{ rotate: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                🔗
              </motion.span>
              <span>Quick Links</span>
            </motion.h4>
            <motion.ul className="space-y-2" variants={containerVariants}>
              {quickLinks.map((item, index) => (
                <motion.li key={item.id} variants={itemVariants}>
                  <motion.button
                    onClick={() => handleLinkClick(item.id)}
                    className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 flex items-center space-x-3 group w-full text-left"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className="text-cyan-500 opacity-80 group-hover:opacity-100"
                      whileHover={{ scale: 1.2, rotate: 5 }}
                    >
                      {item.icon}
                    </motion.div>
                    <motion.span
                      className="relative"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item.label}
                      <motion.span
                        className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"
                        initial={{ width: 0 }}
                        whileHover={{ width: "100%" }}
                      />
                    </motion.span>
                  </motion.button>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-bold mb-4 text-white flex items-center space-x-2"
              variants={itemVariants}
            >
              <motion.span
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 5 }}
              >
                📞
              </motion.span>
              <span>Contact Info</span>
            </motion.h4>
            <motion.div
              className="space-y-3 text-gray-300"
              variants={containerVariants}
            >
              {/* Email */}
              <motion.div
                className="flex items-center space-x-3 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -10, 10, 0],
                    backgroundColor: "rgba(6, 182, 212, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FaEnvelope className="text-cyan-400 text-sm" />
                </motion.div>
                <motion.a
                  href="mailto:Procoderinfosystem@gmail.com"
                  className="hover:text-cyan-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  onClick={(e) => {
                    e.preventDefault();
                    window.location.href =
                      "mailto:Procoderinfosystem@gmail.com";
                  }}
                >
                  Procoderinfosystem@gmail.com
                </motion.a>
              </motion.div>

              {/* Location */}
              <motion.div
                className="flex items-center space-x-3 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{
                    scale: 1.2,
                    rotate: [0, -5, 5, 0],
                    backgroundColor: "rgba(6, 182, 212, 0.3)",
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <FaMapMarkerAlt className="text-cyan-400 text-sm" />
                </motion.div>
                <motion.span
                  className="hover:text-cyan-400 transition-colors duration-300 cursor-pointer"
                  whileHover={{ scale: 1.05 }}
                >
                  Office No.6, NANDAN PRIDE Building, Kothrud, Pune - 411038
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.p
            variants={itemVariants}
            className="flex items-center justify-center space-x-2"
          >
            <motion.span
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              ©
            </motion.span>
            <span>2025 ProCoder Infosystem. All rights reserved.</span>
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
