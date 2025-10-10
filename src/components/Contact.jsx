import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message! We will get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
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
      scale: 1.02,
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400,
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

  const socialPlatforms = [
    { name: "LinkedIn", color: "from-blue-500 to-blue-600" },
    { name: "Instagram", color: "from-pink-500 to-purple-600" },
    { name: "Facebook", color: "from-blue-600 to-blue-700" },
  ];

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
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Career
            </span>{" "}
            Together!
          </motion.h1>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "8rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-xl text-gray-700 max-w-2xl mx-auto font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Get in touch to know more about our training programs, placement
            opportunities, or partnership options.
          </motion.p>
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100"
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-8"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={itemVariants}>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Full Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                  placeholder="Enter your full name"
                  whileFocus={{ scale: 1.02 }}
                />
              </motion.div>

              <motion.div
                className="grid md:grid-cols-2 gap-6"
                variants={containerVariants}
              >
                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Email Address
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your email"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-3"
                  >
                    Phone Number
                  </label>
                  <motion.input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm"
                    placeholder="Enter your phone number"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-3"
                >
                  Message
                </label>
                <motion.textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full px-4 py-4 border border-emerald-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
                  placeholder="Tell us about your requirements..."
                  whileFocus={{ scale: 1.02 }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(16, 185, 129, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Office Address */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-emerald-500 to-teal-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full"></div>
              </div>

              <div className="flex items-start space-x-4 relative z-10">
                <motion.div
                  className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Office Address</h3>
                  <p className="text-emerald-50 leading-relaxed text-lg">
                    Office No.6, Ground Floor, S NO 147/10B+11,
                    <br />
                    NANDAN PRIDE Building, opposite Karve statue,
                    <br />
                    near Vritti Solutions, Kothrud,
                    <br />
                    Pune - 411038
                  </p>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                className="absolute top-6 right-6 w-4 h-4 bg-white/30 rounded-full"
                animate={floatingAnimation}
              />
            </motion.div>

            {/* Email */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-6 left-6 w-5 h-5 bg-white rounded-full"></div>
              </div>

              <div className="flex items-start space-x-4 relative z-10">
                <motion.div
                  className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <svg
                    className="w-7 h-7 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-2xl font-bold mb-3">Email Us</h3>
                  <motion.a
                    href="mailto:Procoderinfosystem@gmail.com"
                    className="text-white text-lg font-medium hover:text-emerald-100 transition-colors duration-300 border-b-2 border-transparent hover:border-white"
                    whileHover={{ scale: 1.05 }}
                  >
                    Procoderinfosystem@gmail.com
                  </motion.a>
                </div>
              </div>

              {/* Floating Element */}
              <motion.div
                className="absolute bottom-6 right-6 w-3 h-3 bg-white/40 rounded-full"
                animate={{
                  ...floatingAnimation,
                  y: [0, -8, 0],
                }}
              />
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-3xl p-8 shadow-2xl border border-emerald-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Follow Us
              </h3>
              <div className="grid grid-cols-3 gap-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href="#"
                    className={`bg-gradient-to-r ${platform.color} text-white font-semibold py-4 px-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300`}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    {platform.name}
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-sm text-emerald-700 text-center">
                  Stay updated with our latest courses, placement opportunities,
                  and success stories!
                </p>
              </motion.div>
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              variants={cardVariants}
              className="bg-gradient-to-br from-teal-500 to-cyan-600 rounded-3xl p-6 text-white text-center shadow-2xl"
            >
              <motion.h4
                className="text-lg font-bold mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ⚡ Quick Response
              </motion.h4>
              <p className="text-emerald-50">
                We typically respond within 2 hours during business days
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-emerald-100">
            <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              Find Our Office
            </h3>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2995.3369178033063!2d73.81292227519121!3d18.502516982587565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20Address%3A%20Office%20No.6%2C%20Ground%20Floor%2C%20S%20NO%20147%2F10B%2B11%2C%20NANDAN%20PRIDE%20Building%2C%20opposite%20Karve%20statue%2C%20near%20Vritti%20Solutions%2C%20Kothrud%2C%20Pune%20-%20411038!5e1!3m2!1sen!2sin!4v1760094187556!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ProCoder Info System Office Location"
                className="w-full"
              ></iframe>
            </div>
            <motion.div
              className="mt-6 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-emerald-700 font-medium">
                Located in the heart of Kothrud, Pune
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Easy to find location near Karve statue
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
