import React, { useEffect } from "react";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaHandshake,
  FaBuilding,
  FaLaptopCode,
} from "react-icons/fa";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

export default function OurServices({ setActiveSection }) {
  // Add setActiveSection prop here
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const services = [
    {
      title: "Direct Placements",
      text: "We collaborate with reputed IT companies to offer direct job placement opportunities for deserving candidates.",
      icon: <FaHandshake />,
      bg: "https://images.unsplash.com/photo-1581091215365-3a818a2a02b8?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Training & Development",
      text: "Enhance your technical and professional skills through structured training programs led by industry experts.",
      icon: <FaChalkboardTeacher />,
      bg: "https://images.unsplash.com/photo-1573497019417-d7f7f2337b99?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Interview & Soft Skills",
      text: "Gain confidence, improve communication, and perform effectively in interviews.",
      icon: <FaUserGraduate />,
      bg: "https://images.unsplash.com/photo-1596495577886-d920f1fb75e7?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Corporate Training",
      text: "Customized corporate programs designed to upskill your workforce and align with company goals.",
      icon: <FaBuilding />,
      bg: "https://images.unsplash.com/photo-1581092160612-9c9b4d2a7e29?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "IT Job-Oriented Courses",
      text: "We offer specialized courses in Full Stack, MERN, Python, .NET, Cloud, and Data Analytics.",
      icon: <FaLaptopCode />,
      bg: "https://images.unsplash.com/photo-1581092580493-6110e9b15e7b?auto=format&fit=crop&w=800&q=80",
    },
  ];

  const highlights = [
    {
      img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "100% Placement Assistance",
      subtitle: "We ensure every candidate gets placement guidance.",
    },
    {
      img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Career Growth",
      subtitle: "Boost your career with hands-on training.",
    },
    {
      img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Interview Prep",
      subtitle: "Mock interviews & soft skill sessions included.",
    },
    {
      img: "https://images.pexels.com/photos/3182830/pexels-photo-3182830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Expert Guidance",
      subtitle: "Learn from industry professionals.",
    },
  ];

  const reputationData = [
    { institute: "ProCoder Infosystem", rating: 95 },
    { institute: "Tech Academy", rating: 85 },
    { institute: "SkillPro Institute", rating: 80 },
    { institute: "CodeMasters", rating: 75 },
    { institute: "InnovateIT", rating: 70 },
  ];

  // Function to navigate to contact section
  const scrollToContact = () => {
    if (setActiveSection) {
      setActiveSection("contact");
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div
      className="services-page relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1920&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none"></div>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row justify-center items-center text-center md:text-left min-h-[85vh] px-10 text-white z-10">
        <div className="max-w-2xl">
          <motion.h1
            className="font-bold mb-5 tracking-tight text-4xl sm:text-5xl md:text-[3.5rem] xl:text-[4rem] text-blue-600 drop-shadow-lg"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-base sm:text-lg md:text-xl opacity-95 drop-shadow-sm text-white"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            Explore our professional training and placement services crafted to
            empower your IT career growth.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-white/90 py-32 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>

        <div className="grid gap-12 md:gap-16 lg:gap-20 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="relative rounded-[25px] p-10 text-center shadow-lg border-t-4 border-blue-900 overflow-hidden hover:scale-105 hover:shadow-2xl transition-transform duration-500"
              data-aos="fade-up"
              whileHover={{ y: -10 }}
            >
              <img
                src={service.bg}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover opacity-25 rounded-[25px] pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent rounded-[25px] pointer-events-none"></div>
              <div className="relative text-blue-900 text-5xl mb-6 inline-block transition-transform duration-500 hover:scale-125 hover:rotate-12 z-10">
                {service.icon}
              </div>
              <h3 className="relative text-lg md:text-xl font-semibold text-blue-900 mb-3 leading-snug z-10">
                {service.title}
              </h3>
              <p className="relative text-gray-600 text-base leading-relaxed z-10">
                {service.text}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Highlights Section */}
      <section className="relative bg-blue-50/80 py-32 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Highlights
        </motion.h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1500px] mx-auto">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative w-full h-60 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-4 text-center">
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <p className="text-white text-sm mt-2">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Reputation Graph Section */}
      <section className="relative bg-white py-16 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Reputation Comparison with Other Institutes
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={reputationData} margin={{ top: 20, bottom: 20 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="institute" />
              <YAxis domain={[0, 100]} />
              <Tooltip />
              <Bar
                dataKey="rating"
                fill="#1E3A8A"
                radius={[10, 10, 0, 0]}
                label={{ position: "top", fill: "#1E3A8A", fontWeight: "bold" }}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      {/* White Slogan Section */}
      <section className="relative bg-white py-32 px-6 overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-3xl p-12 text-center shadow-2xl relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            "Your Career, Our Commitment!"
          </h2>
          <p className="text-gray-700 mb-8 text-lg">
            Join us today and step confidently into your dream IT job.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
            onClick={scrollToContact} // Add onClick handler here
          >
            Enroll Now
          </motion.button>
        </motion.div>
      </section>

      {/* Vision & Mission Section */}
      <section className="relative bg-blue-50/80 py-24 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-blue-900"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Vision & Mission
        </motion.h2>

        <div className="grid gap-12 md:gap-16 lg:gap-20 grid-cols-1 md:grid-cols-2 max-w-[1200px] mx-auto">
          {/* Vision Card */}
          <motion.div
            className="relative bg-white rounded-3xl p-10 shadow-2xl border-t-4 border-blue-600 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 20px 40px rgba(30,58,138,0.4)",
            }}
            transition={{ duration: 0.6, type: "spring", stiffness: 120 }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-200 opacity-30 rounded-3xl pointer-events-none"></div>
            <div className="relative z-10 text-center md:text-left">
              <div className="text-blue-600 text-5xl mb-4 flex justify-center md:justify-start">
                <i className="fas fa-lightbulb"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                To be the leading IT training institute, empowering students and
                professionals with the skills and knowledge to excel in the
                ever-evolving technology landscape.
              </p>
            </div>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            className="relative bg-white rounded-3xl p-10 shadow-2xl border-t-4 border-blue-600 overflow-hidden cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              rotate: -1,
              boxShadow: "0 20px 40px rgba(30,58,138,0.4)",
            }}
            transition={{
              duration: 0.6,
              type: "spring",
              stiffness: 120,
              delay: 0.1,
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-blue-200 opacity-30 rounded-3xl pointer-events-none"></div>
            <div className="relative z-10 text-center md:text-left">
              <div className="text-blue-600 text-5xl mb-4 flex justify-center md:justify-start">
                <i className="fas fa-rocket"></i>
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-700 text-base md:text-lg">
                To provide high-quality IT education and hands-on training,
                fostering career growth, innovation, and professional excellence
                for every student.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
