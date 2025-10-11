import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaRocket,
  FaUsers,
  FaHandshake,
  FaChartLine,
  FaCertificate,
  FaLaptopCode,
  FaUserGraduate,
  FaBriefcase,
  FaLightbulb,
  FaEye,
  FaStar,
  FaAward,
  FaGraduationCap,
  FaCode,
  FaMobileAlt,
  FaDatabase,
} from "react-icons/fa";

const About = ({ setActiveSection }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whyChooseUs = [
    {
      text: "Industry-Recognized Certification",
      icon: FaCertificate,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-500",
    },
    {
      text: "Practical Learning with Real-Time Projects",
      icon: FaLaptopCode,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-500",
    },
    {
      text: "Dedicated Placement Assistance Team",
      icon: FaBriefcase,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-500",
    },
    {
      text: "Soft Skills & Interview Readiness Training",
      icon: FaUserGraduate,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      text: "Support for Both Freshers & Experienced Candidates",
      icon: FaUsers,
      color: "from-indigo-500 to-blue-500",
      bgColor: "bg-gradient-to-br from-indigo-500 to-blue-500",
    },
  ];

  const stats = [
    {
      number: "100%",
      label: "Placement Support",
      color: "from-blue-400 to-blue-500",
      icon: FaHandshake,
      bgColor: "bg-gradient-to-br from-blue-400 to-blue-500",
    },
    {
      number: "500+",
      label: "Trained Candidates",
      color: "from-cyan-400 to-cyan-500",
      icon: FaUsers,
      bgColor: "bg-gradient-to-br from-cyan-400 to-cyan-500",
    },
    {
      number: "50+",
      label: "Partner Companies",
      color: "from-indigo-400 to-indigo-500",
      icon: FaRocket,
      bgColor: "bg-gradient-to-br from-indigo-400 to-indigo-500",
    },
    {
      number: "98%",
      label: "Success Rate",
      color: "from-sky-400 to-sky-500",
      icon: FaChartLine,
      bgColor: "bg-gradient-to-br from-sky-400 to-sky-500",
    },
  ];

  // Coding-related images data with icons
  const codingImages = [
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Coding Environment",
      title: "Modern Development",
      description: "Advanced coding environments",
      icon: FaCode,
      color: "from-blue-500 to-cyan-500",
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Team Collaboration",
      title: "Team Projects",
      description: "Collaborative learning sessions",
      icon: FaUsers,
      color: "from-green-500 to-emerald-500",
    },
    {
      url: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      alt: "Web Development",
      title: "Web Technologies",
      description: "Full-stack development training",
      icon: FaLaptopCode,
      color: "from-purple-500 to-pink-500",
    },
    {
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Mobile Development",
      title: "Mobile Apps",
      description: "iOS & Android development",
      icon: FaMobileAlt,
      color: "from-orange-500 to-red-500",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Data Science",
      title: "Data Analytics",
      description: "Data science and AI programs",
      icon: FaDatabase,
      color: "from-indigo-500 to-blue-500",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Programming",
      title: "Code Mastery",
      description: "Master programming fundamentals",
      icon: FaAward,
      color: "from-cyan-500 to-blue-500",
    },
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
    hidden: { y: 30, opacity: 0 },
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

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0, y: 20 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
    hover: {
      scale: 1.05,
      y: -10,
      rotateZ: 1,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: {
        type: "spring",
        stiffness: 400,
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
    hidden: { scale: 1.1, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.03,
      transition: {
        duration: 0.3,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -15, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  const pulseAnimation = {
    scale: [1, 1.1, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  };

  // Function to navigate to contact section
  const scrollToContact = () => {
    setActiveSection("contact");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.h1
            className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              ProCoder
            </span>
          </motion.h1>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-xl text-gray-700 max-w-3xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Empowering the next generation of IT professionals with cutting-edge
            training and career opportunities
          </motion.p>
        </motion.div>

        {/* Main Content with Image Grid */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-16 mb-20 items-start"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <motion.h2
                className="text-4xl font-bold text-gray-900 mb-6"
                variants={itemVariants}
              >
                Who We Are
              </motion.h2>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed mb-6"
                variants={itemVariants}
              >
                ProCoder Infosystem is a premier IT Training & Placement
                organization committed to helping students and professionals
                achieve their dream careers in the IT industry.
              </motion.p>
              <motion.p
                className="text-lg text-gray-700 leading-relaxed"
                variants={itemVariants}
              >
                We provide comprehensive training, development, and placement
                support designed to match the evolving needs of the corporate
                world, ensuring our candidates are industry-ready from day one.
              </motion.p>
            </div>

            {/* Vision & Mission Cards */}
            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div
                className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <motion.h3
                  className="text-2xl font-bold mb-4 flex items-center relative z-10"
                  variants={itemVariants}
                >
                  <motion.div
                    className="mr-4"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <FaEye className="text-2xl" />
                  </motion.div>
                  Our Vision
                </motion.h3>
                <motion.p
                  className="text-blue-50 leading-relaxed relative z-10"
                  variants={itemVariants}
                >
                  To create a bridge between aspiring candidates and leading IT
                  companies by delivering high-quality, job-oriented training
                  programs and assured placement assistance.
                </motion.p>

                {/* Floating elements */}
                <motion.div
                  className="absolute top-4 right-4 w-3 h-3 bg-white rounded-full"
                  animate={pulseAnimation}
                />
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-6 text-white shadow-xl relative overflow-hidden group cursor-pointer"
                variants={cardVariants}
                whileHover="hover"
              >
                {/* Animated Background */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-600 to-blue-700 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />

                <motion.h3
                  className="text-2xl font-bold mb-4 flex items-center relative z-10"
                  variants={itemVariants}
                >
                  <motion.div
                    className="mr-4"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <FaLightbulb className="text-2xl" />
                  </motion.div>
                  Our Mission
                </motion.h3>
                <motion.p
                  className="text-cyan-50 leading-relaxed relative z-10"
                  variants={itemVariants}
                >
                  To transform fresh graduates into job-ready professionals
                  through hands-on learning, mentorship, and corporate exposure,
                  creating future leaders in technology.
                </motion.p>

                {/* Floating elements */}
                <motion.div
                  className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"
                  animate={{
                    ...pulseAnimation,
                    scale: [1, 1.5, 1],
                  }}
                />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Image Grid */}
          <motion.div variants={itemVariants} className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              {codingImages.map((image, index) => (
                <motion.div
                  key={index}
                  className={`relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer ${
                    index === 0 || index === 3 ? "h-48" : "h-40"
                  }`}
                  variants={imageVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-blue-800/20 to-transparent" />

                  {/* Image Icon */}
                  <motion.div
                    className={`absolute top-3 left-3 w-10 h-10 bg-gradient-to-br ${image.color} rounded-lg flex items-center justify-center text-white shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <image.icon className="text-lg" />
                  </motion.div>

                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.description}
                    </p>
                  </div>

                  {/* Floating Code Elements */}
                  <motion.div
                    className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded p-2 shadow-lg"
                    animate={floatingAnimation}
                  >
                    <div className="text-xs font-mono text-blue-600">
                      <div className="text-cyan-400">function</div>
                      <div className="text-blue-600"> code()</div>
                      <div className="text-gray-400">{" {}"}</div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            {/* Background Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-blue-200 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-cyan-200 rounded-lg -z-10"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <motion.h2
            className="text-4xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Our <span className="text-blue-600">Achievements</span>
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl border border-blue-100 text-center group cursor-pointer"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className="flex justify-center mb-4"
                  variants={iconVariants}
                >
                  <stat.icon
                    className={`text-4xl bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  />
                </motion.div>

                <motion.div
                  className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-600 font-medium">{stat.label}</div>

                {/* Hover effect line */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${stat.color} rounded-full mt-4 opacity-0 group-hover:opacity-100`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600 via-cyan-600 to-indigo-700 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <motion.div
              className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"
              animate={floatingAnimation}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/2 translate-y-1/2"
              animate={{
                ...floatingAnimation,
                y: [0, -12, 0],
              }}
            />
          </div>

          {/* Animated Elements */}
          <motion.div
            className="absolute top-8 right-8 w-16 h-16 bg-white/20 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          <motion.h2
            className="text-4xl font-bold mb-12 text-center relative z-10"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            Why Choose <span className="text-cyan-200">ProCoder?</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 group cursor-pointer border border-white/20"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center text-white shadow-lg flex-shrink-0`}
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <item.icon className="text-lg" />
                  </motion.div>
                  <motion.span
                    className="font-semibold text-lg text-white/95 leading-relaxed"
                    whileHover={{ color: "rgba(255,255,255,1)" }}
                  >
                    {item.text}
                  </motion.span>
                </div>

                {/* Hover border effect */}
                <motion.div
                  className={`h-1 bg-gradient-to-r ${item.color} rounded-full mt-4 opacity-0 group-hover:opacity-100`}
                  initial={{ width: 0 }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            className="text-center mt-12 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white text-blue-700 font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white group"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f0f9ff",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContact}
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Start Your Journey Today</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <FaRocket className="text-blue-600" />
                </motion.span>
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
