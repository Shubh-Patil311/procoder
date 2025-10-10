import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Footer = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const quickLinks = ["Home", "About Us", "Contact Us"];

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
      className="bg-gray-900 text-white py-12 border-t border-emerald-700"
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      ref={ref}
      variants={containerVariants}
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <motion.div variants={itemVariants}>
            <div className="flex items-center space-x-3 mb-4">
              <motion.div
                className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg ring-2 ring-emerald-400/20"
                whileHover={{
                  rotate: 360,
                  scale: 1.1,
                }}
                transition={{
                  rotate: { duration: 0.6, ease: "easeInOut" },
                  scale: { type: "spring", stiffness: 400 },
                }}
              >
                <motion.span
                  className="text-white font-bold text-lg"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                >
                  P
                </motion.span>
              </motion.div>
              <motion.h3
                className="text-xl font-bold text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              >
                ProCoder Infosystem
              </motion.h3>
            </div>
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
              className="text-lg font-bold mb-4 text-white"
              variants={itemVariants}
            >
              Quick Links
            </motion.h4>
            <motion.ul className="space-y-2" variants={containerVariants}>
              {quickLinks.map((item, index) => (
                <motion.li key={item} variants={itemVariants}>
                  <motion.a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 flex items-center space-x-2 group"
                    whileHover={{ x: 5 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.span
                      className="w-1.5 h-1.5 bg-emerald-500 rounded-full opacity-0 group-hover:opacity-100"
                      whileHover={{ scale: 1.5 }}
                    />
                    <span>{item}</span>
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <motion.h4
              className="text-lg font-bold mb-4 text-white"
              variants={itemVariants}
            >
              Contact Info
            </motion.h4>
            <motion.div
              className="space-y-3 text-gray-300"
              variants={containerVariants}
            >
              <motion.div
                className="flex items-center space-x-3 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-sm">📧</span>
                </motion.div>
                <motion.a
                  href="mailto:Procoderinfosystem@gmail.com"
                  className="hover:text-emerald-400 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  Procoderinfosystem@gmail.com
                </motion.a>
              </motion.div>
              <motion.div
                className="flex items-center space-x-3 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div
                  className="w-8 h-8 bg-emerald-500/20 rounded-lg flex items-center justify-center"
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-sm">📍</span>
                </motion.div>
                <span className="hover:text-emerald-400 transition-colors duration-300">
                  Pune, Maharashtra
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <motion.p variants={itemVariants}>
            &copy; 2024 ProCoder Infosystem. All rights reserved.
          </motion.p>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
