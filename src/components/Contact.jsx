import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useForm } from "@formspree/react";
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
  FaCheck,
  FaExclamationTriangle,
} from "react-icons/fa";

const Contact = () => {
  const [state, handleSubmit] = useForm("movpwarl");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Clear form when submission is successful
  useEffect(() => {
    if (state.succeeded) {
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    }
  }, [state.succeeded]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    await handleSubmit(e);
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
    <section className="py-12 md:py-20 px-4 sm:px-6 bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-20"
        >
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 px-2"
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
            className="w-24 sm:w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6 md:mb-8 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: "6rem" }}
            transition={{ delay: 0.5, duration: 0.8 }}
          />
          <motion.p
            className="text-lg sm:text-xl text-gray-700 max-w-2xl mx-auto font-medium px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Get in touch to know more about our training programs, placement
            opportunities, or partnership options.
          </motion.p>
        </motion.div>

        {/* Status Messages */}
        {state.succeeded && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg flex items-center justify-center"
          >
            <FaCheck className="mr-2" />
            Thank you! Your message has been sent successfully. We'll get back
            to you soon.
          </motion.div>
        )}

        {state.errors && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg flex items-center justify-center"
          >
            <FaExclamationTriangle className="mr-2" />
            Sorry, there was an error sending your message. Please try again or
            contact us directly.
          </motion.div>
        )}

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-8 md:gap-12"
        >
          {/* Contact Form */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8 border border-blue-100 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-50"></div>

            <motion.h2
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8 relative z-10"
              variants={itemVariants}
            >
              Send us a Message
            </motion.h2>

            <form
              onSubmit={onSubmit}
              className="space-y-4 md:space-y-6 relative z-10"
            >
              {["name", "email", "phone", "message"].map((field, index) => (
                <motion.div key={field} variants={itemVariants}>
                  <label
                    htmlFor={field}
                    className="block text-sm font-medium text-gray-700 mb-2 md:mb-3 flex items-center"
                  >
                    <motion.div className="mr-2" variants={iconVariants}>
                      {React.createElement(formIcons[field], {
                        className: "text-blue-500 text-base md:text-lg",
                      })}
                    </motion.div>
                    {field.charAt(0).toUpperCase() +
                      field.slice(1).replace(/([A-Z])/g, " $1")}
                    {field !== "phone" && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  {field === "message" ? (
                    <>
                      <motion.textarea
                        id={field}
                        name={field}
                        value={formData[field]}
                        onChange={handleChange}
                        required={field !== "phone"}
                        rows="4"
                        className={`w-full px-3 md:px-4 py-3 md:py-4 border rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none pl-10 md:pl-12 ${
                          errors[field] ? "border-red-500" : "border-blue-200"
                        }`}
                        placeholder={`Tell us about your ${
                          field === "message" ? "requirements" : field
                        }...`}
                        whileFocus={{ scale: 1.02 }}
                        disabled={state.submitting}
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field]}
                        </p>
                      )}
                    </>
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
                        className={`w-full px-3 md:px-4 py-3 md:py-4 border rounded-lg md:rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm pl-10 md:pl-12 disabled:opacity-50 disabled:cursor-not-allowed ${
                          errors[field] ? "border-red-500" : "border-blue-200"
                        }`}
                        placeholder={`Enter your ${field}`}
                        whileFocus={{ scale: 1.02 }}
                        disabled={state.submitting}
                      />
                      {errors[field] && (
                        <p className="text-red-500 text-sm mt-1">
                          {errors[field]}
                        </p>
                      )}
                    </div>
                  )}
                </motion.div>
              ))}

              <motion.button
                type="submit"
                disabled={state.submitting}
                className={`w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white font-bold py-3 md:py-4 px-6 rounded-lg md:rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group relative overflow-hidden ${
                  state.submitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={
                  !state.submitting
                    ? {
                        scale: 1.02,
                        boxShadow: "0 20px 40px rgba(37, 99, 235, 0.3)",
                      }
                    : {}
                }
                whileTap={!state.submitting ? { scale: 0.98 } : {}}
              >
                <span className="flex items-center justify-center space-x-2 relative z-10">
                  {state.submitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span className="text-sm md:text-base">Sending...</span>
                    </>
                  ) : (
                    <>
                      <span className="text-sm md:text-base">Send Message</span>
                      <motion.span
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <FaPaperPlane className="text-white text-sm md:text-base" />
                      </motion.span>
                    </>
                  )}
                </span>

                {/* Button background animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-500 opacity-0 group-hover:opacity-100"
                  transition={{ duration: 0.3 }}
                />
              </motion.button>

              <motion.p
                className="text-xs text-gray-500 text-center mt-4"
                variants={itemVariants}
              >
                * Required fields. We respect your privacy and will not share
                your information.
              </motion.p>
            </form>

            {/* Floating elements */}
            <motion.div
              className="absolute top-3 md:top-4 right-3 md:right-4 w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full"
              animate={pulseAnimation}
            />
            <motion.div
              className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-cyan-400 rounded-full"
              animate={{
                ...pulseAnimation,
                scale: [1, 1.5, 1],
              }}
            />
          </motion.div>

          {/* Contact Information */}
          <motion.div
            variants={itemVariants}
            className="space-y-6 md:space-y-8"
          >
            {contactCards.map((card, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover="hover"
                className={`${card.bgColor} rounded-2xl md:rounded-3xl p-6 md:p-8 text-white shadow-xl md:shadow-2xl relative overflow-hidden group cursor-pointer`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-3 md:top-4 right-3 md:right-4 w-6 h-6 md:w-8 md:h-8 bg-white rounded-full"></div>
                  <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-4 h-4 md:w-6 md:h-6 bg-white rounded-full"></div>
                </div>

                <div className="flex items-start space-x-3 md:space-x-4 relative z-10">
                  <motion.div
                    className="w-10 h-10 md:w-14 md:h-14 bg-white/20 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 backdrop-blur-sm"
                    variants={iconVariants}
                    whileHover="hover"
                  >
                    <card.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                  </motion.div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">
                      {card.title}
                    </h3>
                    {card.isEmail ? (
                      <motion.a
                        href={`mailto:${card.content}`}
                        className="text-blue-50 leading-relaxed text-base md:text-lg hover:text-cyan-100 transition-colors duration-300 border-b-2 border-transparent hover:border-white break-words"
                        whileHover={{ scale: 1.05 }}
                      >
                        {card.content}
                      </motion.a>
                    ) : (
                      <p className="text-blue-50 leading-relaxed text-sm md:text-base md:text-lg">
                        {card.content}
                      </p>
                    )}
                  </div>
                </div>

                {/* Floating Element */}
                <motion.div
                  className="absolute top-4 md:top-6 right-4 md:right-6 w-3 h-3 md:w-4 md:h-4 bg-white/30 rounded-full"
                  animate={floatingAnimation}
                />
              </motion.div>
            ))}

            {/* Social Media */}
            <motion.div
              variants={cardVariants}
              whileHover="hover"
              className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl md:shadow-2xl border border-blue-100 relative overflow-hidden"
            >
              <motion.h3
                className="text-xl md:text-2xl font-bold text-gray-900 mb-4 md:mb-6 flex items-center"
                variants={itemVariants}
              >
                <motion.div className="mr-2 md:mr-3" variants={iconVariants}>
                  <FaShareAlt className="text-blue-500 text-xl md:text-2xl" />
                </motion.div>
                Follow Us
              </motion.h3>

              <div className="grid grid-cols-3 gap-3 md:gap-4">
                {socialPlatforms.map((platform, index) => (
                  <motion.a
                    key={platform.name}
                    href="#"
                    className={`${platform.bgColor} text-white font-semibold py-3 md:py-4 px-2 md:px-4 rounded-lg md:rounded-xl text-center shadow-lg hover:shadow-xl transition-all duration-300 group relative overflow-hidden`}
                    whileHover={{
                      scale: 1.05,
                      y: -2,
                    }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.5 }}
                  >
                    <span className="flex flex-col items-center space-y-1 md:space-y-2 relative z-10">
                      <platform.icon className="text-lg md:text-xl" />
                      <span className="text-xs md:text-sm">
                        {platform.name}
                      </span>
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
                className="mt-4 md:mt-6 p-3 md:p-4 bg-blue-50 rounded-lg md:rounded-xl border border-blue-200"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <p className="text-xs md:text-sm text-blue-700 text-center">
                  Stay updated with our latest courses, placement opportunities,
                  and success stories!
                </p>
              </motion.div>

              {/* Floating elements */}
              <motion.div
                className="absolute top-3 md:top-4 right-3 md:right-4 w-1.5 h-1.5 md:w-2 md:h-2 bg-blue-400 rounded-full"
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
          className="mt-12 md:mt-20"
        >
          <div className="bg-white rounded-2xl md:rounded-3xl shadow-xl md:shadow-2xl p-6 md:p-8 border border-blue-100 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 opacity-30"></div>

            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 md:mb-6 text-center relative z-10 flex items-center justify-center"
              variants={itemVariants}
            >
              <motion.div className="mr-2 md:mr-3" variants={iconVariants}>
                <FaMapMarkerAlt className="text-blue-500 text-xl md:text-2xl" />
              </motion.div>
              Find Our Office
            </motion.h3>

            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg relative z-10">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2995.3369178033063!2d73.81292227519121!3d18.502516982587565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20Address%3A%20Office%20No.6%2C%20Ground%20Floor%2C%20S%20NO%20147%2F10B%2B11%2C%20NANDAN%20PRIDE%20Building%2C%20opposite%20Karve%20statue%2C%20near%20Vritti%20Solutions%2C%20Kothrud%2C%20Pune%20-%20411038!5e1!3m2!1sen!2sin!4v1760094187556!5m2!1sen!2sin"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ProCoder Info System Office Location"
                className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px]"
              ></iframe>
            </div>
            <motion.div
              className="mt-4 md:mt-6 text-center relative z-10"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <p className="text-blue-700 font-medium text-sm md:text-base">
                Located in the heart of Kothrud, Pune
              </p>
              <p className="text-gray-600 text-xs md:text-sm mt-1 md:mt-2">
                Easy to find location near Karve statue
              </p>
            </motion.div>

            {/* Floating elements */}
            <motion.div
              className="absolute top-4 md:top-8 left-4 md:left-8 w-2 h-2 md:w-3 md:h-3 bg-cyan-400 rounded-full"
              animate={floatingAnimation}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
