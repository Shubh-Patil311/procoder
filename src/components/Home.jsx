import React from "react";
import { motion } from "framer-motion";
import {
  FaCode,
  FaLaptopCode,
  FaUsers,
  FaRocket,
  FaGraduationCap,
  FaBriefcase,
  FaCheckCircle,
  FaStar,
  FaShieldAlt,
  FaLightbulb,
} from "react-icons/fa";

const Home = ({ setActiveSection }) => {
  const highlights = [
    {
      text: "Direct Placements in top IT companies",
      icon: FaBriefcase,
      color: "from-blue-500 to-cyan-500",
    },
    {
      text: "Corporate Training & Development Programs",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
    },
    {
      text: "Interview Preparation & Soft Skills Training",
      icon: FaGraduationCap,
      color: "from-purple-500 to-pink-500",
    },
    {
      text: "Job-Oriented IT Courses",
      icon: FaCode,
      color: "from-orange-500 to-red-500",
    },
    {
      text: "100% Placement Opportunity & Lifetime Support",
      icon: FaShieldAlt,
      color: "from-indigo-500 to-blue-500",
    },
    {
      text: "Dedicated Support for Freshers & Experienced Candidates",
      icon: FaCheckCircle,
      color: "from-cyan-500 to-blue-500",
    },
  ];

  // Coding-related images
  const codingImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
    "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  ];

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
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
    hover: {
      scale: 1.2,
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
      rotate: -5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const codeFloatingAnimation = {
    y: [0, -30, 0],
    x: [0, 10, 0],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  // Function to navigate to contact section
  const scrollToContact = () => {
    setActiveSection("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Coding Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Coding Background Image with Animation */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
        />

        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Animated Code Elements */}
        <motion.div
          className="absolute top-20 left-20 text-cyan-400/30 text-4xl"
          animate={codeFloatingAnimation}
        >
          <FaCode />
        </motion.div>

        <motion.div
          className="absolute top-40 right-32 text-blue-400/30 text-3xl"
          animate={{
            ...codeFloatingAnimation,
            y: [0, -25, 0],
            transition: { duration: 5, repeat: Infinity },
          }}
        >
          <FaLaptopCode />
        </motion.div>

        <motion.div
          className="absolute bottom-32 left-32 text-green-400/30 text-5xl"
          animate={{
            ...codeFloatingAnimation,
            y: [0, -35, 0],
            transition: { duration: 7, repeat: Infinity },
          }}
        >
          <FaRocket />
        </motion.div>

        {/* Additional floating code elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 text-purple-400/20 text-2xl"
          animate={{
            y: [0, -15, 0],
            x: [0, 10, 0],
            opacity: [0.3, 0.7, 0.3],
          }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          &lt;/&gt;
        </motion.div>

        <motion.div
          className="absolute bottom-1/3 right-1/3 text-yellow-400/20 text-xl font-mono"
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        >
          {`{ }`}
        </motion.div>

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Heading with Enhanced Contrast */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            style={{
              textShadow:
                "2px 2px 12px rgba(0,0,0,0.7), 0 0 40px rgba(0,0,0,0.5)",
            }}
          >
            Empowering{" "}
            <motion.span
              className="text-cyan-300 font-extrabold bg-gradient-to-r from-cyan-300 to-cyan-400 bg-clip-text text-transparent"
              animate={{
                textShadow: [
                  "0 0 25px rgba(34, 211, 238, 0.8)",
                  "0 0 50px rgba(34, 211, 238, 1)",
                  "0 0 25px rgba(34, 211, 238, 0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Careers
            </motion.span>{" "}
            with IT Excellence
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white font-medium mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            variants={itemVariants}
            style={{
              textShadow: "1px 1px 6px rgba(0,0,0,0.6)",
            }}
          >
            Bridge the gap between education and employment through skill-based
            training, corporate learning, and direct placement support.
          </motion.p>

          {/* Enhanced CTA Card */}
          <motion.div
            className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-white/50 shadow-2xl"
            variants={itemVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <motion.div
              className="flex items-center justify-center space-x-3 mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <FaStar className="text-yellow-500 text-2xl" />
              <p className="text-2xl font-bold text-gray-800">
                Get Trained. Get Placed. Build Your Career!
              </p>
              <FaStar className="text-yellow-500 text-2xl" />
            </motion.div>
            <motion.p className="text-gray-700 text-lg font-medium">
              Transform your future with industry-leading IT training and 100%
              placement support
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.button
            className="mt-8 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-500 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToContact}
          >
            <span className="flex items-center space-x-2 font-extrabold">
              <span>Enroll Now</span>
              <FaRocket className="text-white" />
            </span>
          </motion.button>
        </motion.div>
      </section>

      {/* Coding Gallery Section with Gray Background */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Coding Environment
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Experience world-class learning with state-of-the-art facilities
              and expert guidance
            </p>
          </motion.div>

          {/* Animated Image Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {codingImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                variants={imageVariants}
                whileHover="hover"
                custom={index}
              >
                <img
                  src={image}
                  alt={`Coding Environment ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-2">Expert Training</h3>
                    <p className="text-sm text-gray-200">
                      Hands-on coding experience
                    </p>
                  </div>
                </div>
                {/* Enhanced glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Students Trained", icon: FaUsers },
              { number: "95%", label: "Placement Rate", icon: FaCheckCircle },
              { number: "50+", label: "Partner Companies", icon: FaBriefcase },
              {
                number: "100%",
                label: "Practical Learning",
                icon: FaLaptopCode,
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl border border-blue-200 shadow-lg"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#dbeafe",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="flex justify-center mb-3"
                  variants={iconVariants}
                >
                  <stat.icon className="text-3xl text-blue-600" />
                </motion.div>
                <motion.div
                  className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-50 to-cyan-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose ProCoder?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-8 rounded-full"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Discover what makes us the preferred choice for IT career
              transformation
            </p>
          </motion.div>

          {/* Animated Highlights Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-blue-500 hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${highlight.color} rounded-full flex items-center justify-center flex-shrink-0`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <highlight.icon className="text-white text-lg" />
                  </motion.div>
                  <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                    {highlight.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-700 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
              {/* Enhanced Background Pattern */}
              <div className="absolute inset-0 opacity-15">
                <div className="absolute w-40 h-40 bg-white rounded-full -top-20 -left-20"></div>
                <div className="absolute w-32 h-32 bg-white rounded-full -bottom-16 -right-16"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-white rounded-full opacity-50"></div>
              </div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 drop-shadow-lg flex items-center justify-center space-x-3"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  textShadow: "2px 2px 8px rgba(0,0,0,0.5)",
                }}
              >
                <FaLightbulb className="text-yellow-300" />
                <span>Ready to Launch Your IT Career?</span>
                <FaLightbulb className="text-yellow-300" />
              </motion.h2>

              <motion.p
                className="text-white/90 text-xl mb-8 relative z-10 font-medium drop-shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                Join hundreds of successful candidates who transformed their
                careers with us
              </motion.p>

              <motion.button
                className="bg-white text-blue-700 font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
                  backgroundColor: "#f0f9ff",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToContact}
              >
                <span className="flex items-center space-x-2 font-extrabold">
                  <span>Enroll Now</span>
                  <FaRocket className="text-blue-600" />
                </span>
              </motion.button>

              {/* Enhanced floating elements */}
              <motion.div
                className="absolute top-6 right-6 w-10 h-10 bg-white/25 rounded-full"
                animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-6 left-6 w-8 h-8 bg-cyan-300/40 rounded-full"
                animate={{ scale: [1, 2.2, 1], opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
