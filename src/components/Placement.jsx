import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaClipboardList,
  FaUserCheck,
  FaFileAlt,
  FaComments,
  FaHandshake,
  FaAward,
  FaLaptopCode,
  FaChalkboardTeacher,
  FaUsers,
  FaCertificate,
} from "react-icons/fa";

// Local images
import placementheading from "../assets/placementheading.jpeg";
import placement1 from "../assets/placement1.jpeg";
import placement2 from "../assets/placement2.jpeg";
import placement3 from "../assets/placement3.jpeg";
import placement4 from "../assets/placement4.jpeg";

export default function Placement({ setActiveSection }) {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const steps = [
    { title: "Registration & Career Counselling", icon: <FaClipboardList /> },
    { title: "Skill Assessment & Training Plan", icon: <FaUserCheck /> },
    { title: "Resume & Profile Building", icon: <FaFileAlt /> },
    { title: "Interview Preparation & Mock Rounds", icon: <FaComments /> },
    { title: "Direct Company Interviews", icon: <FaHandshake /> },
    { title: "Final Placement & Offer Letter", icon: <FaAward /> },
  ];

  const highlights = [
    {
      img: placement1,
      title: "Smart Career Guidance",
      subtitle: "Tailored support for every step of your journey.",
    },
    {
      img: placement2,
      title: "Professional Skills",
      subtitle: "Develop the expertise companies are looking for.",
    },
    {
      img: placement3,
      title: "Confidence Boost",
      subtitle: "Mock interviews and soft skill training included.",
    },
    {
      img: placement4,
      title: "Expert Mentorship",
      subtitle: "Learn directly from experienced industry professionals.",
    },
  ];

  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Faculty",
      description:
        "Learn from highly experienced trainers and industry professionals.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Hands-On Training",
      description:
        "Practical projects and live sessions to build real-world skills.",
    },
    {
      icon: <FaUsers />,
      title: "Collaborative Learning",
      description: "Group activities, peer learning, and interactive sessions.",
    },
    {
      icon: <FaCertificate />,
      title: "Certification",
      description: "Get recognized certificates upon successful completion.",
    },
  ];

  // Function to navigate to contact section
  const scrollToContact = () => {
    if (setActiveSection) {
      setActiveSection("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="placement-page relative overflow-hidden">
      {/* Hero Section */}
      <section
        className="min-h-[70vh] flex flex-col justify-center items-center text-center px-10 relative overflow-hidden text-white"
        style={{
          backgroundImage: `url(${placementheading})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-3 drop-shadow-lg relative z-10"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Placement Support
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl max-w-3xl opacity-95 drop-shadow-sm relative z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          From registration to offer letter — we guide you every step until you
          achieve your dream IT job.
        </motion.p>
      </section>

      {/* Placement Steps */}
      <section
        className="relative py-20 px-6"
        style={{ backgroundColor: "#fefcfb" }}
      >
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 pointer-events-none"></div>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto mb-12 leading-relaxed relative z-10">
          Our dedicated placement cell works with industry partners to ensure
          every candidate gets the best career opportunity.
        </p>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 max-w-[1600px] mx-auto justify-items-center relative z-10">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-tr from-white to-blue-50 rounded-[25px] p-8 text-center shadow-lg border-t-6 border-blue-900 relative overflow-hidden w-full max-w-[380px] hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              data-aos="zoom-in"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-blue-900 text-5xl mb-4 inline-block transition-transform duration-500 hover:scale-125 hover:rotate-12">
                {step.icon}
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-blue-900 leading-snug">
                {step.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6 bg-white">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Features of Our Placement Program
        </motion.h2>

        <div className="max-w-[1500px] mx-auto space-y-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex flex-col md:flex-row items-center bg-gradient-to-r from-blue-50 to-white rounded-3xl shadow-lg p-6 hover:scale-105 transition-transform duration-500"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="text-blue-900 text-4xl mb-3 md:mb-0 md:mr-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-1">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* White Slogan + Highlights */}
      <section className="relative bg-white py-20 px-6 overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-3xl p-10 text-center shadow-2xl relative z-10"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-900">
            "Empowering Your Career Journey!"
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Take the first step toward success — with our full placement support
            and expert mentorship.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={scrollToContact}
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1500px] mx-auto mt-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative w-full h-52 rounded-lg overflow-hidden shadow-lg cursor-pointer group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end">
                <div className="p-4 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-lg font-bold">{item.title}</h3>
                  <p className="text-sm text-gray-200">{item.subtitle}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
