import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const whyChooseUs = [
    "Industry-Recognized Certification",
    "Practical Learning with Real-Time Projects",
    "Dedicated Placement Assistance Team",
    "Soft Skills & Interview Readiness Training",
    "Support for Both Freshers & Experienced Candidates",
  ];

  const stats = [
    {
      number: "100%",
      label: "Placement Support",
      color: "from-emerald-400 to-green-500",
    },
    {
      number: "500+",
      label: "Trained Candidates",
      color: "from-teal-400 to-cyan-500",
    },
    {
      number: "50+",
      label: "Partner Companies",
      color: "from-green-400 to-emerald-500",
    },
    {
      number: "98%",
      label: "Success Rate",
      color: "from-lime-400 to-green-500",
    },
  ];

  // Coding-related images data
  const codingImages = [
    {
      url: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Coding Environment",
      title: "Modern Development",
      description: "Advanced coding environments",
    },
    {
      url: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
      alt: "Team Collaboration",
      title: "Team Projects",
      description: "Collaborative learning sessions",
    },
    {
      url: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1964&q=80",
      alt: "Web Development",
      title: "Web Technologies",
      description: "Full-stack development training",
    },
    {
      url: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Mobile Development",
      title: "Mobile Apps",
      description: "iOS & Android development",
    },
    {
      url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      alt: "Data Science",
      title: "Data Analytics",
      description: "Data science and AI programs",
    },
    {
      url: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      alt: "Programming",
      title: "Code Mastery",
      description: "Master programming fundamentals",
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
    hidden: { scale: 0.9, opacity: 0 },
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
      y: -5,
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
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-green-50 via-teal-50 to-emerald-50">
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
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              ProCoder
            </span>
          </motion.h1>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"
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
                className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl p-6 text-white shadow-xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.h3
                  className="text-2xl font-bold mb-4 flex items-center"
                  variants={itemVariants}
                >
                  <span className="mr-3">🎯</span> Our Vision
                </motion.h3>
                <motion.p
                  className="text-emerald-50 leading-relaxed"
                  variants={itemVariants}
                >
                  To create a bridge between aspiring candidates and leading IT
                  companies by delivering high-quality, job-oriented training
                  programs and assured placement assistance.
                </motion.p>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-6 text-white shadow-xl"
                variants={cardVariants}
                whileHover="hover"
              >
                <motion.h3
                  className="text-2xl font-bold mb-4 flex items-center"
                  variants={itemVariants}
                >
                  <span className="mr-3">🚀</span> Our Mission
                </motion.h3>
                <motion.p
                  className="text-emerald-50 leading-relaxed"
                  variants={itemVariants}
                >
                  To transform fresh graduates into job-ready professionals
                  through hands-on learning, mentorship, and corporate exposure,
                  creating future leaders in technology.
                </motion.p>
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
                  className={`relative rounded-2xl overflow-hidden shadow-xl group ${
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
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-emerald-800/20 to-transparent" />

                  {/* Image Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h4 className="font-bold text-sm mb-1">{image.title}</h4>
                    <p className="text-xs text-emerald-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.description}
                    </p>
                  </div>

                  {/* Floating Code Elements for larger images */}
                  {(index === 0 || index === 2) && (
                    <motion.div
                      className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm rounded p-2 shadow-lg"
                      animate={floatingAnimation}
                    >
                      <div className="text-xs font-mono text-emerald-600">
                        <div className="text-emerald-400">
                          {index === 0 ? "function" : "const"}
                        </div>
                        <div className="text-green-600">
                          {index === 0 ? " code()" : " tech"}
                        </div>
                        <div className="text-gray-400">
                          {index === 0 ? " {}" : " = {}"}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Background Decorative Elements */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 bg-emerald-200 rounded-full -z-10"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-200 rounded-lg -z-10"
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
            Our <span className="text-emerald-600">Achievements</span>
          </motion.h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xl border border-emerald-100"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
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
          className="bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700 rounded-3xl p-12 text-white relative overflow-hidden"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-24 h-24 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
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
            Why Choose <span className="text-emerald-200">ProCoder?</span>
          </motion.h2>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {whyChooseUs.map((item, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
                variants={itemVariants}
                whileHover={{
                  x: 10,
                  backgroundColor: "rgba(255,255,255,0.1)",
                }}
              >
                <motion.div
                  className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 mt-1"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    className="w-3 h-3 bg-emerald-500 rounded-full"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                  />
                </motion.div>
                <span className="font-semibold text-lg text-white/95 leading-relaxed">
                  {item}
                </span>
              </motion.div>
            ))}
          </motion.div>

          {/* Floating CTA */}
          <motion.div
            className="text-center mt-12 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white text-emerald-700 font-bold py-4 px-12 rounded-full text-lg shadow-2xl hover:shadow-3xl transition-all duration-300 border-2 border-white"
              whileHover={{
                scale: 1.05,
                backgroundColor: "#f0fdf4",
                boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey Today
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
