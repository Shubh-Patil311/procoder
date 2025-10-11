import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhone,
  FaShareAlt,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaRocket,
  FaPaperPlane,
  FaClock,
  FaUser,
  FaMobile,
  FaComment,
} from "react-icons/fa";

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

  const socialPlatforms = [
    {
      name: "LinkedIn",
      color: "from-blue-500 to-blue-600",
      icon: FaLinkedin,
      bgColor: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      name: "Instagram",
      color: "from-pink-500 to-purple-600",
      icon: FaInstagram,
      bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      name: "Facebook",
      color: "from-blue-600 to-blue-700",
      icon: FaFacebook,
      bgColor: "bg-gradient-to-br from-blue-600 to-blue-700",
    },
  ];

  const contactCards = [
    {
      title: "Office Address",
      content:
        "Office No.6, Ground Floor, S NO 147/10B+11, NANDAN PRIDE Building, opposite Karve statue, near Vritti Solutions, Kothrud, Pune - 411038",
      icon: FaMapMarkerAlt,
      color: "from-blue-500 to-cyan-600",
      bgColor: "bg-gradient-to-br from-blue-500 to-cyan-600",
    },
    {
      title: "Email Us",
      content: "Procoderinfosystem@gmail.com",
      icon: FaEnvelope,
      color: "from-cyan-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-cyan-500 to-blue-600",
      isEmail: true,
    },
    {
      title: "Quick Response",
      content: "We typically respond within 2 hours during business days",
      icon: FaClock,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-500 to-emerald-600",
    },
  ];

  const formIcons = {
    name: FaUser,
    email: FaEnvelope,
    phone: FaMobile,
    message: FaComment,
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
            Let's Build Your{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Career
            </span>{" "}
            Together!
          </motion.h1>
          <motion.div
            className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"
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
            className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50"></div>

            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-8 relative z-10"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h2>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              {["name", "email", "phone", "message"].map((field, index) => (
                <motion.div key={field} variants={itemVariants}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-3 flex items-center"
                  >
                    <motion.div className="mr-2" variants={iconVariants}>
                      {React.createElement(formIcons[field], {
                        className: "text-blue-500 text-lg",
                      })}
                    </motion.div>
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}
                  </label>
                  {field === "message" ? (
                    <motion.textarea
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-4 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none pl-12"
                      placeholder={`Tell us about your ${
                        field === "message" ? "requirements" : field
                      }...`}
                      whileFocus={{ scale: 1.02 }}
                    />
                  ) : (
                    <div className="relative">
                      <motion.input
                        type={
                          field === "email"
                            ? "email"
                            : field === "phone"
                            ? "tel"
                            : "text"
                        }
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required={field !== "phone"}
                        className="w-full px-4 py-4 border border-blue-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm pl-12"
                        placeholder={`Enter your ${field}`}
                        whileFocus={{ scale: 1.02 }}
                      />
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  <span>Send Message</span>
                  <motion.span
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <FaPaperPlane className="text-white" />
                  </motion.span>
                </span>

                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </form>

            {/* Floating elements */}
            <motion.div
              className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full"
              animate={pulseAnimation}
            />
            <motion.div
              className="absolute bottom-4 left-4 w-2 h-2 bg-cyan-400 rounded-full"
              animate={{
                ...pulseAnimation,
                scale: [1, 1.5, 1],
              }}
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div variants={itemVariants} className="space-y-8">
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`${card.bgColor} rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden group cursor-pointer`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full"></div>
                  <div className="absolute bottom-4 left-4 w-6 h-6 bg-white rounded-full"></div>
                </div>

                <div className="flex items-start space-x-4 relative z-10">
                  <motion.div
                    className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <card.icon className="w-7 h-7 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-bold mb-3">{card.title}</h3>
                    {card.isEmail ? (
                      <motion.a
                        href={`mailto:${card.content}`}
                        className="text-blue-50 leading-relaxed text-lg hover:text-cyan-100 transition-colors duration-300 border-b-2 border-transparent hover:border-white"
                        whileHover={{ scale: 1.05 }}
                      >
                        {card.content}
                      </motion.a>
                    ) : (
                      <p className="text-blue-50 leading-relaxed text-lg">
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>

                {/* Floating Element */}
                <motion.div
                  className="absolute top-6 right-6 w-4 h-4 bg-white/30 rounded-full"
                  animate={floatingAnimation}
                />
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-3xl p-8 shadow-2xl border border-blue-100 relative overflow-hidden"
            >
              <motion.h3
                className="text-2xl font-bold text-gray-900 mb-6 flex items-center"
                variants={itemVariants}
              >
                <motion.div className="mr-3" variants={iconVariants}>
                  <FaShareAlt className="text-blue-500 text-2xl" />
                </motion.div>
                Follow Us
              </motion.h3>

              <div className="grid grid-cols-3 gap-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href="#"
                    className={`${platform.bgColor} text-white font-semibold py-4 px-4 rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="flex flex-col items-center space-y-2 relative z-10">
                      <platform.icon className="text-xl" />
                      <span className="text-sm">{platform.name}</span>
                    </span>

                    {/* Hover overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100"
                      transition={{ duration: 0.3 }}
                    />
                  </motion.a>
                ))}
              </div>

              {/* Additional Info */}
              <motion.div
                className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-sm text-blue-700 text-center">
                  Stay updated with our latest courses, placement opportunities,
                  and success stories!
                </p>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full"
                animate={pulseAnimation}
              />
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
          <div className="bg-white rounded-3xl shadow-2xl p-8 border border-blue-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-30"></div>

            <motion.h3
              className="text-3xl font-bold text-gray-900 mb-6 text-center relative z-10 flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.div className="mr-3" variants={iconVariants}>
                <FaMapMarkerAlt className="text-blue-500 text-2xl" />
              </motion.div>
              Find Our Office
            </motion.h3>

            <div className="rounded-2xl overflow-hidden shadow-lg relative z-10">
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
              className="mt-6 text-center relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-blue-700 font-medium">
                Located in the heart of Kothrud, Pune
              </p>
              <p className="text-gray-600 text-sm mt-2">
                Easy to find location near Karve statue
              </p>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-8 left-8 w-3 h-3 bg-cyan-400 rounded-full"
              animate={floatingAnimation}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
