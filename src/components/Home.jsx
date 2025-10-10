// import React from "react";
// import { motion } from "framer-motion";
// import { useInView } from "react-intersection-observer";

// const Home = () => {
//   const highlights = [
//     "Direct Placements in top IT companies",
//     "Corporate Training & Development Programs",
//     "Interview Preparation & Soft Skills Training",
//     "Job-Oriented IT Courses",
//     "100% Placement Opportunity & Lifetime Support",
//     "Dedicated Support for Freshers & Experienced Candidates",
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
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//   };

//   const cardVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: {
//       scale: 1,
//       opacity: 1,
//       transition: {
//         type: "spring",
//         stiffness: 100,
//       },
//     },
//     hover: {
//       scale: 1.05,
//       rotateY: 5,
//       transition: {
//         type: "spring",
//         stiffness: 300,
//       },
//     },
//   };

//   const floatingAnimation = {
//     y: [0, -20, 0],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   };

//   return (
//     <div className="min-h-screen">
//       {/* Hero Section with Moving Background */}
//       <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700">
//         {/* Darker overlay for better contrast */}
//         <div className="absolute inset-0 bg-black/20 z-0"></div>

//         {/* Animated Background Elements */}
//         <motion.div
//           className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"
//           animate={{
//             x: [0, 100, 0],
//             y: [0, 50, 0],
//           }}
//           transition={{
//             duration: 20,
//             repeat: Infinity,
//             ease: "linear",
//           }}
//         />

//         {/* Floating Shapes */}
//         <motion.div
//           className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
//           animate={floatingAnimation}
//         />
//         <motion.div
//           className="absolute top-40 right-32 w-12 h-12 bg-white/8 rounded-lg backdrop-blur-sm"
//           animate={{
//             ...floatingAnimation,
//             y: [0, -30, 0],
//             transition: { duration: 3, repeat: Infinity },
//           }}
//         />
//         <motion.div
//           className="absolute bottom-32 left-32 w-20 h-20 bg-white/12 rounded-full backdrop-blur-sm"
//           animate={{
//             ...floatingAnimation,
//             y: [0, -25, 0],
//             transition: { duration: 5, repeat: Infinity },
//           }}
//         />

//         {/* Hero Content */}
//         <motion.div
//           className="relative z-10 text-center px-4 max-w-6xl mx-auto"
//           initial="hidden"
//           animate="visible"
//           variants={containerVariants}
//         >
//           {/* Main Heading with High Contrast */}
//           <motion.h1
//             className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
//             variants={itemVariants}
//             whileHover={{ scale: 1.02 }}
//             style={{
//               textShadow:
//                 "2px 2px 8px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4)",
//             }}
//           >
//             Empowering{" "}
//             <motion.span
//               className="text-emerald-200 font-extrabold"
//               animate={{
//                 textShadow: [
//                   "0 0 20px rgba(255,255,255,0.8)",
//                   "0 0 40px rgba(255,255,255,1)",
//                   "0 0 20px rgba(255,255,255,0.8)",
//                 ],
//               }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               Careers
//             </motion.span>{" "}
//             with IT Excellence
//           </motion.h1>

//           <motion.p
//             className="text-xl md:text-2xl text-white font-medium mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
//             variants={itemVariants}
//             style={{
//               textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
//             }}
//           >
//             Bridge the gap between education and employment through skill-based
//             training, corporate learning, and direct placement support.
//           </motion.p>

//           {/* Animated CTA Card with Better Contrast */}
//           <motion.div
//             className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-white/40 shadow-2xl"
//             variants={itemVariants}
//             whileHover="hover"
//             initial="hidden"
//             animate="visible"
//             variants={cardVariants}
//           >
//             <motion.p
//               className="text-2xl font-bold text-gray-800 mb-4"
//               animate={{ scale: [1, 1.05, 1] }}
//               transition={{ duration: 2, repeat: Infinity }}
//             >
//               🎯 Get Trained. Get Placed. Build Your Career!
//             </motion.p>
//             <motion.p className="text-gray-700 text-lg font-medium">
//               Transform your future with industry-leading IT training and 100%
//               placement support
//             </motion.p>
//           </motion.div>

//           {/* Scroll Indicator */}
//           <motion.div
//             className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//             animate={{ y: [0, 10, 0] }}
//             transition={{ duration: 2, repeat: Infinity }}
//           >
//             <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
//               <motion.div
//                 className="w-1 h-3 bg-white rounded-full mt-2"
//                 animate={{ y: [0, 12, 0] }}
//                 transition={{ duration: 2, repeat: Infinity }}
//               />
//             </div>
//           </motion.div>
//         </motion.div>
//       </section>

//       {/* Highlights Section */}
//       <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-teal-50">
//         <div className="container mx-auto max-w-6xl">
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-16"
//           >
//             <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
//               Why Choose ProCoder?
//             </h2>
//             <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
//             <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
//               Discover what makes us the preferred choice for IT career
//               transformation
//             </p>
//           </motion.div>

//           {/* Animated Highlights Grid */}
//           <motion.div
//             className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//           >
//             {highlights.map((highlight, index) => (
//               <motion.div
//                 key={index}
//                 className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-emerald-500 hover:shadow-2xl transition-shadow duration-300"
//                 variants={cardVariants}
//                 whileHover="hover"
//                 custom={index}
//               >
//                 <div className="flex items-start space-x-4">
//                   <motion.div
//                     className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0"
//                     whileHover={{ rotate: 360 }}
//                     transition={{ duration: 0.5 }}
//                   >
//                     <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
//                   </motion.div>
//                   <p className="text-gray-800 font-semibold text-lg leading-relaxed">
//                     {highlight}
//                   </p>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* CTA Section */}
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             whileInView={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="text-center mt-16"
//           >
//             <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
//               {/* Background Pattern */}
//               <div className="absolute inset-0 opacity-10">
//                 <div className="absolute w-32 h-32 bg-white rounded-full -top-16 -left-16"></div>
//                 <div className="absolute w-24 h-24 bg-white rounded-full -bottom-12 -right-12"></div>
//               </div>

//               <motion.h2
//                 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 drop-shadow-lg"
//                 animate={{ scale: [1, 1.02, 1] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//                 style={{
//                   textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
//                 }}
//               >
//                 Ready to Launch Your IT Career?
//               </motion.h2>

//               <motion.p
//                 className="text-white/90 text-xl mb-8 relative z-10 font-medium drop-shadow"
//                 initial={{ opacity: 0 }}
//                 whileInView={{ opacity: 1 }}
//                 transition={{ delay: 0.3 }}
//                 style={{
//                   textShadow: "0 1px 2px rgba(0,0,0,0.3)",
//                 }}
//               >
//                 Join hundreds of successful candidates who transformed their
//                 careers with us
//               </motion.p>

//               <motion.button
//                 className="bg-white text-emerald-700 font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-white"
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
//                   backgroundColor: "#f0fdf4",
//                 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 <span className="font-extrabold">Enroll Now</span>
//               </motion.button>

//               {/* Floating elements */}
//               <motion.div
//                 className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
//                 animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
//                 transition={{ duration: 3, repeat: Infinity }}
//               />
//               <motion.div
//                 className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full"
//                 animate={{ scale: [1, 2, 1], opacity: [0.3, 0.7, 0.3] }}
//                 transition={{ duration: 4, repeat: Infinity, delay: 1 }}
//               />
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Home;
import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Home = () => {
  const highlights = [
    "Direct Placements in top IT companies",
    "Corporate Training & Development Programs",
    "Interview Preparation & Soft Skills Training",
    "Job-Oriented IT Courses",
    "100% Placement Opportunity & Lifetime Support",
    "Dedicated Support for Freshers & Experienced Candidates",
  ];

  // Coding-related images (you can replace these with your actual image paths)
  const codingImages = [
    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Coding screen
    "https://images.unsplash.com/photo-1542831371-29b0f74f9713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Code closeup
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80", // Team coding
    "https://images.unsplash.com/photo-1534665482403-a909d0d97c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80", // Developer working
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
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
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
      rotateY: 5,
      transition: {
        type: "spring",
        stiffness: 300,
      },
    },
  };

  const imageVariants = {
    hidden: {
      scale: 1.2,
      opacity: 0,
      rotate: -5,
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
    hover: {
      scale: 1.1,
      rotate: 2,
      transition: {
        type: "spring",
        stiffness: 400,
      },
    },
  };

  const floatingAnimation = {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section with Moving Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-green-700">
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/20 z-0"></div>

        {/* Animated Background Elements */}
        <motion.div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wOCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-30"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm"
          animate={floatingAnimation}
        />
        <motion.div
          className="absolute top-40 right-32 w-12 h-12 bg-white/8 rounded-lg backdrop-blur-sm"
          animate={{
            ...floatingAnimation,
            y: [0, -30, 0],
            transition: { duration: 3, repeat: Infinity },
          }}
        />
        <motion.div
          className="absolute bottom-32 left-32 w-20 h-20 bg-white/12 rounded-full backdrop-blur-sm"
          animate={{
            ...floatingAnimation,
            y: [0, -25, 0],
            transition: { duration: 5, repeat: Infinity },
          }}
        />

        {/* Hero Content */}
        <motion.div
          className="relative z-10 text-center px-4 max-w-6xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Heading with High Contrast */}
          <motion.h1
            className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight drop-shadow-2xl"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
            style={{
              textShadow:
                "2px 2px 8px rgba(0,0,0,0.6), 0 0 30px rgba(0,0,0,0.4)",
            }}
          >
            Empowering{" "}
            <motion.span
              className="text-emerald-200 font-extrabold"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.8)",
                  "0 0 40px rgba(255,255,255,1)",
                  "0 0 20px rgba(255,255,255,0.8)",
                ],
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Careers
            </motion.span>{" "}
            with IT Excellence
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-white font-medium mb-8 max-w-4xl mx-auto leading-relaxed drop-shadow-lg"
            variants={itemVariants}
            style={{
              textShadow: "1px 1px 4px rgba(0,0,0,0.5)",
            }}
          >
            Bridge the gap between education and employment through skill-based
            training, corporate learning, and direct placement support.
          </motion.p>

          {/* Animated CTA Card with Better Contrast */}
          <motion.div
            className="bg-white/95 backdrop-blur-lg rounded-2xl p-8 max-w-2xl mx-auto border border-white/40 shadow-2xl"
            variants={itemVariants}
            whileHover="hover"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <motion.p
              className="text-2xl font-bold text-gray-800 mb-4"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              🎯 Get Trained. Get Placed. Build Your Career!
            </motion.p>
            <motion.p className="text-gray-700 text-lg font-medium">
              Transform your future with industry-leading IT training and 100%
              placement support
            </motion.p>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <motion.div
                className="w-1 h-3 bg-white rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Coding Gallery Section with White Background */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Coding Environment
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Experience world-class learning with state-of-the-art facilities
              and expert guidance
            </p>
          </motion.div>

          {/* Animated Image Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {codingImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group rounded-2xl overflow-hidden shadow-xl border border-gray-200"
                variants={imageVariants}
                whileHover="hover"
                custom={index}
              >
                <img
                  src={image}
                  alt={`Coding Environment ${index + 1}`}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-bold text-lg mb-2">Expert Training</h3>
                    <p className="text-sm text-gray-200">
                      Hands-on coding experience
                    </p>
                  </div>
                </div>
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-emerald-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            initial="hidden"
            whileInView="visible"
            variants={containerVariants}
            viewport={{ once: true }}
          >
            {[
              { number: "500+", label: "Students Trained" },
              { number: "95%", label: "Placement Rate" },
              { number: "50+", label: "Partner Companies" },
              { number: "100%", label: "Practical Learning" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 bg-emerald-50 rounded-2xl border border-emerald-100"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#f0fdf4",
                  transition: { type: "spring", stiffness: 300 },
                }}
              >
                <motion.div
                  className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5, type: "spring" }}
                >
                  {stat.number}
                </motion.div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-green-50 to-teal-50">
        <div className="container mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose ProCoder?
            </h2>
            <div className="w-24 h-1 bg-emerald-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto font-medium">
              Discover what makes us the preferred choice for IT career
              transformation
            </p>
          </motion.div>

          {/* Animated Highlights Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-xl p-6 border-l-4 border-emerald-500 hover:shadow-2xl transition-shadow duration-300"
                variants={cardVariants}
                whileHover="hover"
                custom={index}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="w-4 h-4 bg-emerald-600 rounded-full"></div>
                  </motion.div>
                  <p className="text-gray-800 font-semibold text-lg leading-relaxed">
                    {highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-12 max-w-4xl mx-auto relative overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute w-32 h-32 bg-white rounded-full -top-16 -left-16"></div>
                <div className="absolute w-24 h-24 bg-white rounded-full -bottom-12 -right-12"></div>
              </div>

              <motion.h2
                className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10 drop-shadow-lg"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                style={{
                  textShadow: "1px 1px 4px rgba(0,0,0,0.4)",
                }}
              >
                Ready to Launch Your IT Career?
              </motion.h2>

              <motion.p
                className="text-white/90 text-xl mb-8 relative z-10 font-medium drop-shadow"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                style={{
                  textShadow: "0 1px 2px rgba(0,0,0,0.3)",
                }}
              >
                Join hundreds of successful candidates who transformed their
                careers with us
              </motion.p>

              <motion.button
                className="bg-white text-emerald-700 font-bold py-4 px-12 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300 relative z-10 border-2 border-white"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
                  backgroundColor: "#f0fdf4",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-extrabold">Enroll Now</span>
              </motion.button>

              {/* Floating elements */}
              <motion.div
                className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full"
                animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute bottom-4 left-4 w-6 h-6 bg-white/30 rounded-full"
                animate={{ scale: [1, 2, 1], opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
