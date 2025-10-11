// // import React from "react";
// // import { motion } from "framer-motion";
// // import { useInView } from "react-intersection-observer";

// // const Services = () => {
// //   const [ref, inView] = useInView({
// //     triggerOnce: true,
// //     threshold: 0.1,
// //   });

// //   const services = [
// //     {
// //       icon: "💼",
// //       title: "Direct Placements",
// //       description:
// //         "We collaborate with reputed IT companies to offer direct job placement opportunities for deserving candidates. Our placement team continuously connects with industry partners to identify roles suitable for your skills and goals.",
// //       color: "from-blue-500 to-blue-600",
// //     },
// //     {
// //       icon: "🎓",
// //       title: "Training & Development",
// //       description:
// //         "Enhance your technical and professional skills through structured training programs led by industry experts. We focus on hands-on learning and real-world project exposure.",
// //       color: "from-cyan-500 to-cyan-600",
// //     },
// //     {
// //       icon: "🎤",
// //       title: "Interview Preparation & Soft Skills Training",
// //       description:
// //         "Our soft skills and interview training modules help freshers gain confidence, improve communication, and perform effectively in interviews.",
// //       color: "from-indigo-500 to-indigo-600",
// //     },
// //     {
// //       icon: "🏢",
// //       title: "Corporate Training",
// //       description:
// //         "We provide customized corporate training programs designed to upskill your workforce, boost productivity, and align with your company's goals.",
// //       color: "from-sky-500 to-sky-600",
// //     },
// //     {
// //       icon: "🤝",
// //       title: "Placement Support",
// //       description:
// //         "From resume building to mock interviews, our placement team ensures you are fully prepared to secure your next opportunity. We provide 100% placement support until you get placed.",
// //       color: "from-blue-600 to-cyan-600",
// //     },
// //     {
// //       icon: "💻",
// //       title: "IT Training & Job-Oriented Courses",
// //       description:
// //         "We offer specialized training in Java Full Stack Development, MERN/MEAN Stack, Python Development, .NET & Cloud Technologies, Data Analytics & Business Intelligence, and more. Each program is tailored for both freshers and professionals.",
// //       color: "from-cyan-600 to-blue-600",
// //     },
// //   ];

// //   // Animation variants
// //   const containerVariants = {
// //     hidden: { opacity: 0 },
// //     visible: {
// //       opacity: 1,
// //       transition: {
// //         delayChildren: 0.3,
// //         staggerChildren: 0.2,
// //       },
// //     },
// //   };

// //   const itemVariants = {
// //     hidden: { y: 30, opacity: 0 },
// //     visible: {
// //       y: 0,
// //       opacity: 1,
// //       transition: {
// //         type: "spring",
// //         stiffness: 100,
// //         damping: 10,
// //       },
// //     },
// //   };

// //   const cardVariants = {
// //     hidden: { scale: 0.9, opacity: 0 },
// //     visible: {
// //       scale: 1,
// //       opacity: 1,
// //       transition: {
// //         type: "spring",
// //         stiffness: 100,
// //       },
// //     },
// //     hover: {
// //       scale: 1.02,
// //       y: -5,
// //       transition: {
// //         type: "spring",
// //         stiffness: 400,
// //       },
// //     },
// //   };

// //   return (
// //     <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-cyan-50 to-blue-50">
// //       <div className="container mx-auto max-w-6xl">
// //         {/* Header */}
// //         <motion.div
// //           initial={{ opacity: 0, y: -30 }}
// //           animate={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="text-center mb-20"
// //         >
// //           <motion.h1
// //             className="text-5xl md:text-6xl font-bold text-gray-900 mb-6"
// //             initial={{ scale: 0.9 }}
// //             animate={{ scale: 1 }}
// //             transition={{ duration: 0.5 }}
// //           >
// //             Our{" "}
// //             <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
// //               Services
// //             </span>
// //           </motion.h1>
// //           <motion.div
// //             className="w-32 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-8 rounded-full"
// //             initial={{ width: 0 }}
// //             animate={{ width: "8rem" }}
// //             transition={{ delay: 0.5, duration: 0.8 }}
// //           />
// //           <motion.p
// //             className="text-xl text-gray-700 max-w-3xl mx-auto font-medium"
// //             initial={{ opacity: 0 }}
// //             animate={{ opacity: 1 }}
// //             transition={{ delay: 0.7 }}
// //           >
// //             Comprehensive IT training and career development services designed
// //             to transform your career aspirations into reality
// //           </motion.p>
// //         </motion.div>

// //         {/* Services Grid */}
// //         <motion.div
// //           ref={ref}
// //           initial="hidden"
// //           animate={inView ? "visible" : "hidden"}
// //           variants={containerVariants}
// //           className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
// //         >
// //           {services.map((service, index) => (
// //             <motion.div
// //               key={index}
// //               variants={cardVariants}
// //               whileHover="hover"
// //               className="bg-white rounded-2xl shadow-xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300"
// //             >
// //               {/* Service Icon */}
// //               <motion.div
// //                 className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-2xl mb-6 mx-auto`}
// //                 whileHover={{
// //                   rotate: 360,
// //                   scale: 1.1,
// //                 }}
// //                 transition={{ duration: 0.5 }}
// //               >
// //                 {service.icon}
// //               </motion.div>

// //               {/* Service Content */}
// //               <motion.h3
// //                 className="text-xl font-bold text-gray-900 mb-4 text-center"
// //                 variants={itemVariants}
// //               >
// //                 {service.title}
// //               </motion.h3>

// //               <motion.p
// //                 className="text-gray-700 leading-relaxed text-center"
// //                 variants={itemVariants}
// //               >
// //                 {service.description}
// //               </motion.p>

// //               {/* Hover Effect Border */}
// //               <motion.div
// //                 className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 hover:opacity-5 transition-opacity duration-300 -z-10`}
// //               />
// //             </motion.div>
// //           ))}
// //         </motion.div>

// //         {/* CTA Section */}
// //         <motion.div
// //           initial={{ opacity: 0, y: 30 }}
// //           whileInView={{ opacity: 1, y: 0 }}
// //           transition={{ duration: 0.8, delay: 0.3 }}
// //           viewport={{ once: true }}
// //           className="text-center mt-16"
// //         >
// //           <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
// //             {/* Background Pattern */}
// //             <div className="absolute inset-0 opacity-10">
// //               <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full"></div>
// //               <div className="absolute bottom-4 right-4 w-6 h-6 bg-white rounded-full"></div>
// //             </div>

// //             <motion.h2
// //               className="text-3xl md:text-4xl font-bold mb-6 relative z-10"
// //               animate={{ scale: [1, 1.02, 1] }}
// //               transition={{ duration: 3, repeat: Infinity }}
// //             >
// //               Ready to Transform Your Career?
// //             </motion.h2>

// //             <motion.p
// //               className="text-xl text-blue-50 mb-8 relative z-10 max-w-2xl mx-auto"
// //               initial={{ opacity: 0 }}
// //               whileInView={{ opacity: 1 }}
// //               transition={{ delay: 0.3 }}
// //             >
// //               Choose the right service for your career goals and let us help you
// //               achieve success in the IT industry
// //             </motion.p>

// //             {/* <motion.button
// //               className="bg-white text-blue-700 font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-white"
// //               whileHover={{
// //                 scale: 1.05,
// //                 backgroundColor: "#f0f9ff",
// //                 boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
// //               }}
// //               whileTap={{ scale: 0.95 }}
// //             >
// //               Explore Services
// //             </motion.button> */}
// //           </div>
// //         </motion.div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Services;
// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";
// import {
//   FaUserGraduate,
//   FaChalkboardTeacher,
//   FaHandshake,
//   FaBuilding,
//   FaLaptopCode,
//   FaRocket,
//   FaLightbulb,
//   FaChartLine,
// } from "react-icons/fa";
// import {
//   ResponsiveContainer,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   Tooltip,
//   CartesianGrid,
// } from "recharts";

// const Services = ({ setActiveSection }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const services = [
//     {
//       title: "Direct Placements",
//       text: "We collaborate with reputed IT companies to offer direct job placement opportunities for deserving candidates.",
//       icon: FaHandshake,
//       // bg: "https://images.unsplash.com/photo-1581091215365-3a818a2a02b8?auto=format&fit=crop&w=800&q=80",
//       color: "from-blue-500 to-cyan-500",
//     },
//     {
//       title: "Training & Development",
//       text: "Enhance your technical and professional skills through structured training programs led by industry experts.",
//       icon: FaChalkboardTeacher,
//       // bg: "https://images.unsplash.com/photo-1573497019417-d7f7f2337b99?auto=format&fit=crop&w=800&q=80",
//       color: "from-green-500 to-emerald-500",
//     },
//     {
//       title: "Interview & Soft Skills",
//       text: "Gain confidence, improve communication, and perform effectively in interviews.",
//       icon: FaUserGraduate,
//       // bg: "https://images.unsplash.com/photo-1596495577886-d920f1fb75e7?auto=format&fit=crop&w=800&q=80",
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       title: "Corporate Training",
//       text: "Customized corporate programs designed to upskill your workforce and align with company goals.",
//       icon: FaBuilding,
//       // bg: "https://images.unsplash.com/photo-1581092160612-9c9b4d2a7e29?auto=format&fit=crop&w=800&q=80",
//       color: "from-orange-500 to-red-500",
//     },
//     {
//       title: "IT Job-Oriented Courses",
//       text: "We offer specialized courses in Full Stack, MERN, Python, .NET, Cloud, and Data Analytics.",
//       icon: FaLaptopCode,
//       // bg: "https://images.unsplash.com/photo-1581092580493-6110e9b15e7b?auto=format&fit=crop&w=800&q=80",
//       color: "from-indigo-500 to-blue-500",
//     },
//   ];

//   const highlights = [
//     {
//       img: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "100% Placement Assistance",
//       subtitle: "We ensure every candidate gets placement guidance.",
//       icon: FaHandshake,
//     },
//     {
//       img: "https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "Career Growth",
//       subtitle: "Boost your career with hands-on training.",
//       icon: FaChartLine,
//     },
//     {
//       img: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "Interview Prep",
//       subtitle: "Mock interviews & soft skill sessions included.",
//       icon: FaUserGraduate,
//     },
//     {
//       img: "https://images.pexels.com/photos/3182830/pexels-photo-3182830.jpeg?auto=compress&cs=tinysrgb&w=600",
//       title: "Expert Guidance",
//       subtitle: "Learn from industry professionals.",
//       icon: FaChalkboardTeacher,
//     },
//   ];

//   const reputationData = [
//     { institute: "ProCoder Infosystem", rating: 95 },
//     { institute: "Tech Academy", rating: 85 },
//     { institute: "SkillPro Institute", rating: 80 },
//     { institute: "CodeMasters", rating: 75 },
//     { institute: "InnovateIT", rating: 70 },
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
//             Our{" "}
//             <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
//               Services
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
//             Explore our professional training and placement services crafted to
//             empower your IT career growth.
//           </motion.p>
//         </motion.div>

//         {/* Services Section */}
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
//             What We <span className="text-blue-600">Offer</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {services.map((service, index) => (
//               <motion.div
//                 key={index}
//                 className="relative rounded-2xl p-8 shadow-xl border border-blue-100 overflow-hidden group cursor-pointer bg-white"
//                 variants={cardVariants}
//                 whileHover="hover"
//                 custom={index}
//               >
//                 {/* Background Image */}
//                 {/* <img
//                   src={service.bg}
//                   alt={service.title}
//                   className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-300"
//                 /> */}

//                 {/* Gradient Overlay */}
//                 <div
//                   className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
//                 />

//                 {/* Service Icon */}
//                 <motion.div
//                   className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center text-white text-2xl mb-6 shadow-lg relative z-10`}
//                   variants={iconVariants}
//                   whileHover="hover"
//                 >
//                   <service.icon />
//                 </motion.div>

//                 {/* Service Content */}
//                 <motion.h3
//                   className="text-xl font-bold text-gray-900 mb-4 relative z-10"
//                   variants={itemVariants}
//                 >
//                   {service.title}
//                 </motion.h3>

//                 <motion.p
//                   className="text-gray-700 leading-relaxed relative z-10"
//                   variants={itemVariants}
//                 >
//                   {service.text}
//                 </motion.p>

//                 {/* Hover Border Effect */}
//                 <motion.div
//                   className={`absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r ${service.color} rounded-full group-hover:w-full`}
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
//             Key <span className="text-blue-600">Highlights</span>
//           </motion.h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//             {highlights.map((item, index) => (
//               <motion.div
//                 key={index}
//                 className="relative rounded-2xl overflow-hidden shadow-xl group cursor-pointer h-48"
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

//         {/* Reputation Graph Section */}
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
//             Reputation <span className="text-blue-600">Comparison</span>
//           </motion.h2>

//           <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-100">
//             <ResponsiveContainer width="100%" height={350}>
//               <BarChart data={reputationData} margin={{ top: 20, bottom: 20 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
//                 <XAxis
//                   dataKey="institute"
//                   stroke="#6b7280"
//                   fontSize={12}
//                   angle={-45}
//                   textAnchor="end"
//                   height={80}
//                 />
//                 <YAxis domain={[0, 100]} stroke="#6b7280" fontSize={12} />
//                 <Tooltip
//                   contentStyle={{
//                     backgroundColor: "#1e40af",
//                     color: "white",
//                     border: "none",
//                     borderRadius: "8px",
//                   }}
//                 />
//                 <Bar
//                   dataKey="rating"
//                   fill="#1e40af"
//                   radius={[10, 10, 0, 0]}
//                   label={{
//                     position: "top",
//                     fill: "#1e40af",
//                     fontWeight: "bold",
//                     fontSize: 12,
//                   }}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </motion.div>

//         {/* Vision & Mission Section */}
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
//             Our Vision & <span className="text-blue-600">Mission</span>
//           </motion.h2>

//           <div className="grid md:grid-cols-2 gap-8">
//             {/* Vision Card */}
//             <motion.div
//               className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group cursor-pointer"
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               <motion.div
//                 className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
//                 variants={iconVariants}
//                 whileHover="hover"
//               >
//                 <FaLightbulb className="text-xl" />
//               </motion.div>

//               <motion.h3
//                 className="text-2xl font-bold mb-4"
//                 variants={itemVariants}
//               >
//                 Our Vision
//               </motion.h3>

//               <motion.p
//                 className="text-blue-50 leading-relaxed"
//                 variants={itemVariants}
//               >
//                 To be the leading IT training institute, empowering students and
//                 professionals with the skills and knowledge to excel in the
//                 ever-evolving technology landscape.
//               </motion.p>

//               {/* Floating elements */}
//               <motion.div
//                 className="absolute bottom-4 left-4 w-3 h-3 bg-white rounded-full"
//                 animate={floatingAnimation}
//               />
//             </motion.div>

//             {/* Mission Card */}
//             <motion.div
//               className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl relative overflow-hidden group cursor-pointer"
//               variants={cardVariants}
//               whileHover="hover"
//             >
//               <motion.div
//                 className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center"
//                 variants={iconVariants}
//                 whileHover="hover"
//               >
//                 <FaRocket className="text-xl" />
//               </motion.div>

//               <motion.h3
//                 className="text-2xl font-bold mb-4"
//                 variants={itemVariants}
//               >
//                 Our Mission
//               </motion.h3>

//               <motion.p
//                 className="text-cyan-50 leading-relaxed"
//                 variants={itemVariants}
//               >
//                 To provide high-quality IT education and hands-on training,
//                 fostering career growth, innovation, and professional excellence
//                 for every student.
//               </motion.p>

//               {/* Floating elements */}
//               <motion.div
//                 className="absolute bottom-4 right-4 w-2 h-2 bg-white rounded-full"
//                 animate={{
//                   ...floatingAnimation,
//                   y: [0, -8, 0],
//                 }}
//               />
//             </motion.div>
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
//               Ready to Transform Your Career?
//             </motion.h2>

//             <motion.p
//               className="text-white/90 text-xl mb-8 relative z-10 font-medium drop-shadow"
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.3 }}
//             >
//               Join hundreds of successful candidates who transformed their
//               careers with our comprehensive services
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
//               <span className="font-extrabold">Enroll Now</span>
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

// export default Services;
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

export default function OurServices() {
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
