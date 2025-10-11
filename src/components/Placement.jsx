// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   FaClipboardList,
//   FaUserCheck,
//   FaFileAlt,
//   FaComments,
//   FaHandshake,
//   FaAward,
//   FaLaptopCode,
//   FaChalkboardTeacher,
//   FaUsers,
//   FaCertificate,
//   FaRocket,
//   FaStar,
//   FaGraduationCap,
// } from "react-icons/fa";

// const Placement = ({ setActiveSection }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const steps = [
//     {
//       title: "Registration & Career Counselling",
//       icon: FaClipboardList,
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Skill Assessment & Training Plan",
//       icon: FaUserCheck,
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Resume & Profile Building",
//       icon: FaFileAlt,
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Interview Preparation & Mock Rounds",
//       icon: FaComments,
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       title: "Direct Company Interviews",
//       icon: FaHandshake,
//       color: "from-indigo-500 to-blue-500",
//     },
//     {
//       title: "Final Placement & Offer Letter",
//       icon: FaAward,
//       color: "from-cyan-500 to-blue-500",
//     },
//   ];

//   const highlights = [
//     {
//       img: "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "Smart Career Guidance",
//       subtitle: "Tailored support for every step of your journey.",
//       icon: FaGraduationCap,
//     },
//     {
//       img: "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "Professional Skills",
//       subtitle: "Develop the expertise companies are looking for.",
//       icon: FaLaptopCode,
//     },
//     {
//       img: "https://images.pexels.com/photos/3182783/pexels-photo-3182783.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "Confidence Boost",
//       subtitle: "Mock interviews and soft skill training included.",
//       icon: FaComments,
//     },
//     {
//       img: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "Expert Mentorship",
//       subtitle: "Learn directly from experienced industry professionals.",
//       icon: FaChalkboardTeacher,
//     },
//   ];

//   const features = [
//     {
//       icon: FaChalkboardTeacher,
//       title: "Expert Faculty",
//       description:
//         "Learn from highly experienced trainers and industry professionals.",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       icon: FaLaptopCode,
//       title: "Hands-On Training",
//       description:
//         "Practical projects and live sessions to build real-world skills.",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       icon: FaUsers,
//       title: "Collaborative Learning",
//       description: "Group activities, peer learning, and interactive sessions.",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: FaCertificate,
//       title: "Certification",
//       description: "Get recognized certificates upon successful completion.",
//       color: "from-orange-500 to-red-500",
//     },
//   ];

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         delayChildren: 0.3,
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const itemVariants = {
//     hidden: { y: 30, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//         damping: 10,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { scale: 0.9, opacity: 0, y: 20 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       y: 0,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       y: -10,
//       rotateZ: 1,
//       boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
//       transition: {
//         type: "spring",
//         stiffness: 400,
//       },
//     },
//   };

//   const iconVariants = {
//     hidden: { scale: 0, rotate: -180 },
//     visible: {
//       scale: 1,
//       rotate: 0,
//       transition: {
//         type: "spring",
//         stiffness: 200,
//         damping: 15,
//       },
//     },
//     hover: {
//       scale: 1.2,
//       rotate: 360,
//       transition: {
//         type: "spring",
//         stiffness: 400,
//       },
//     },
//   };

//   const floatingAnimation = {
//     y: [0, -15, 0],
//     transition: {
//       duration: 3,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   const pulseAnimation = {
//     scale: [1, 1.1, 1],
//     transition: {
//       duration: 2,
//       repeat: Infinity,
//     },
//   };

//   // Function to navigate to contact section
//   const scrollToContact = () => {
//     setActiveSection("contact");
//     window.scrollTo({ top: 0, behavior: "smooth" });
//   };

//   return (
//     <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50">
//       <div className="container mx-auto max-w-6xl">
//         {/* Header */}
//         <motion.div
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="text-center mb-20"
//         >
//           <motion.h1
//             className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
//             initial={{ scale: 0.9 }}
//             animate={{ scale: 1 }}
//             transition={{ duration: 0.5 }}
//           >
//             Placement{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//               Support
//             </span>
//           </motion.h1>
//           <motion.div
//             className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"
//             initial={{ width: 0 }}
//             animate={{ width: "8rem" }}
//             transition={{ delay: 0.5, duration: 0.8 }}
//           />
//           <motion.p
//             className="text-xl text-gray-700 max-w-3xl mx-auto font-medium"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             transition={{ delay: 0.7 }}
//           >
//             From registration to offer letter — we guide you every step until
//             you achieve your dream IT job.
//           </motion.p>
//         </motion.div>

//         {/* Placement Steps */}
//         <motion.div
//           ref={ref}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//           variants={containerVariants}
//           className="mb-20"
//         >
//           <motion.h2
//             className="text-4xl font-bold text-center text-gray-900 mb-12"
//             variants={itemVariants}
//           >
//             Our Placement <span className="text-blue-600">Process</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {steps.map((step, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden group cursor-pointer"
//                 variants={cardVariants}
//                 whileHover="hover"
//                 custom={index}
//               >
//                 {/* Gradient Background on Hover */}
//                 <motion.div
//                   className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 rounded-2xl`}
//                   transition={{ duration: 0.3 }}
//                 />

//                 {/* Step Icon */}
//                 <motion.div
//                   className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-2xl mb-6 text-white shadow-lg`}
//                   variants={iconVariants}
//                   whileHover="hover"
//                 >
//                   <step.icon />
//                 </motion.div>

//                 {/* Step Content */}
//                 <motion.h3
//                   className="text-xl font-bold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300"
//                   variants={itemVariants}
//                 >
//                   {step.title}
//                 </motion.h3>

//                 {/* Connecting Line (for desktop) */}
//                 {index < steps.length - 1 && (
//                   <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-blue-200 transform translate-x-full -translate-y-1/2 z-10" />
//                 )}

//                 {/* Pulse animation dot */}
//                 <motion.div
//                   className="absolute top-4 right-4 w-3 h-3 bg-green-400 rounded-full"
//                   animate={{
//                     scale: [1, 1.5, 1],
//                     opacity: [0.7, 1, 0.7],
//                   }}
//                   transition={{
//                     duration: 2,
//                     repeat: Infinity,
//                     delay: index * 0.3,
//                   }}
//                 />

//                 {/* Hover border effect */}
//                 <motion.div
//                   className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${step.color} rounded-full group-hover:w-full`}
//                   transition={{ duration: 0.5, ease: "easeOut" }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Features Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <motion.h2
//             className="text-4xl font-bold text-center text-gray-900 mb-12"
//             variants={itemVariants}
//           >
//             Features of Our <span className="text-blue-600">Training</span>
//           </motion.h2>

//           <div className="space-y-6">
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100 relative overflow-hidden group cursor-pointer"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <div className="flex flex-col md:flex-row items-center">
//                   {/* Feature Icon */}
//                   <motion.div
//                     className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-2xl text-white shadow-lg mb-4 md:mb-0 md:mr-6`}
//                     variants={iconVariants}
//                     whileHover="hover"
//                   >
//                     <feature.icon />
//                   </motion.div>

//                   {/* Feature Content */}
//                   <div className="flex-1 text-center md:text-left">
//                     <motion.h3
//                       className="text-2xl font-bold text-gray-900 mb-2"
//                       variants={itemVariants}
//                     >
//                       {feature.title}
//                     </motion.h3>
//                     <motion.p
//                       className="text-gray-700 leading-relaxed"
//                       variants={itemVariants}
//                     >
//                       {feature.description}
//                     </motion.p>
//                   </div>
//                 </div>

//                 {/* Hover border effect */}
//                 <motion.div
//                   className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${feature.color} rounded-full group-hover:w-full`}
//                   transition={{ duration: 0.5, ease: "easeOut" }}
//                 />
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* Highlights Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="mb-20"
//         >
//           <motion.h2
//             className="text-4xl font-bold text-center text-gray-900 mb-12"
//             variants={itemVariants}
//           >
//             Why Choose Our <span className="text-blue-600">Program?</span>
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer h-64"
//                 variants={cardVariants}
//                 initial="hidden"
//                 whileInView="visible"
//                 whileHover="hover"
//                 viewport={{ once: true }}
//                 transition={{ delay: index * 0.1 }}
//               >
//                 <img
//                   src={item.img}
//                   alt={item.title}
//                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
//                 />

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

//                 {/* Icon */}
//                 <motion.div
//                   className="absolute top-4 left-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center text-white"
//                   whileHover={{ scale: 1.2, rotate: 360 }}
//                   transition={{ duration: 0.5 }}
//                 >
//                   <item.icon className="text-lg" />
//                 </motion.div>

//                 {/* Content */}
//                 <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
//                   <h3 className="font-bold text-lg mb-1">{item.title}</h3>
//                   <p className="text-sm text-blue-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                     {item.subtitle}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="text-center"
//         >
//           <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-cyan-700 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
//             {/* Background Pattern */}
//             <div className="absolute inset-0 opacity-15">
//               <div className="absolute w-40 h-40 bg-white rounded-full -top-20 -left-20"></div>
//               <div className="absolute w-32 h-32 bg-white rounded-full -bottom-16 -right-16"></div>
//             </div>

//             <motion.h2
//               className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 drop-shadow-lg"
//               animate={{ scale: [1, 1.02, 1] }}
//               transition={{ duration: 3, repeat: Infinity }}
//             >
//               "Supporting Your Career Every Step!"
//             </motion.h2>

//             <motion.p
//               className="text-white/90 text-xl mb-8 relative z-10 font-medium drop-shadow"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               Take the first step towards your dream IT job with our expert
//               guidance.
//             </motion.p>

//             <motion.button
//               className="bg-white text-blue-700 font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-white"
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
//                 backgroundColor: "#f0f9ff",
//               }}
//               whileTap={{ scale: 0.95 }}
//               onClick={scrollToContact}
//             >
//               <span className="flex items-center justify-center space-x-2">
//                 <span>Enroll Now</span>
//                 <motion.span
//                   animate={{ x: [0, 5, 0] }}
//                   transition={{ duration: 1.5, repeat: Infinity }}
//                 >
//                   <FaRocket className="text-blue-600" />
//                 </motion.span>
//               </span>
//             </motion.button>

//             {/* Enhanced floating elements */}
//             <motion.div
//               className="absolute top-6 right-6 w-10 h-10 bg-white/25 rounded-full"
//               animate={{ scale: [1, 1.8, 1], opacity: [0.3, 0.8, 0.3] }}
//               transition={{ duration: 4, repeat: Infinity }}
//             />
//             <motion.div
//               className="absolute bottom-6 left-6 w-8 h-8 bg-cyan-300/40 rounded-full"
//               animate={{ scale: [1, 2.2, 1], opacity: [0.2, 0.6, 0.2] }}
//               transition={{ duration: 5, repeat: Infinity, delay: 1 }}
//             />
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Placement;
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

export default function PlacementSupport() {
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
      img: "https://images.pexels.com/photos/3184312/pexels-photo-3184312.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Smart Career Guidance",
      subtitle: "Tailored support for every step of your journey.",
    },
    {
      img: "https://images.pexels.com/photos/3184638/pexels-photo-3184638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Professional Skills",
      subtitle: "Develop the expertise companies are looking for.",
    },
    {
      img: "https://images.pexels.com/photos/3182783/pexels-photo-3182783.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      title: "Confidence Boost",
      subtitle: "Mock interviews and soft skill training included.",
    },
    {
      img: "https://images.pexels.com/photos/3184315/pexels-photo-3184315.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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

  return (
    <div className="placement-page relative overflow-hidden ">
      {/* Hero Section */}
      <section
        className="min-h-[70vh] flex flex-col justify-center items-center text-center px-10 relative overflow-hidden text-white"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
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
          Features of Our ProCoder Infosystem
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

      {/* White Slogan Section */}
      <section className="relative bg-white py-20 px-6 overflow-hidden">
        <motion.div
          className="max-w-3xl mx-auto bg-gradient-to-r from-blue-100 via-white to-blue-100 rounded-3xl p-10 text-center shadow-2xl relative z-10"
          initial={{ opacity: 0, scale: 0.8, y: -20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-3 text-blue-900">
            "Supporting Your Career Every Step!"
          </h2>
          <p className="text-gray-700 mb-6 text-lg">
            Take the first step towards your dream IT job with our expert
            guidance.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Enroll Now
          </motion.button>
        </motion.div>

        {/* Highlights Grid */}
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-[1500px] mx-auto mt-12">
          {highlights.map((item, idx) => (
            <motion.div
              key={idx}
              className="relative w-full h-52 rounded-lg overflow-hidden shadow-lg cursor-pointer"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.05 }}
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center p-2 text-center">
                <h3 className="text-white text-lg font-bold">{item.title}</h3>
                <p className="text-white text-sm mt-1">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
