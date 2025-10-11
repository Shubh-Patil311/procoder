// import React, { useState } from "react";
// import Header from "./components/Header";
// import Home from "./components/Home";
// import About from "./components/About";
// import Services from "./components/Services";
// import Placement from "./components/Placement";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ScrollToTop from "./components/ScrollToTop";

// function App() {
//   const [activeSection, setActiveSection] = useState("home");

//   const renderSection = () => {
//     switch (activeSection) {
//       case "home":
//         return <Home setActiveSection={setActiveSection} />;
//       case "about":
//         return <About />;
//       case "services":
//         return <Services />;
//       case "placement":
//         return <Placement setActiveSection={setActiveSection} />;
//       case "contact":
//         return <Contact />;
//       default:
//         return <Home setActiveSection={setActiveSection} />;
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
//       <Header
//         activeSection={activeSection}
//         setActiveSection={setActiveSection}
//       />
//       <main>{renderSection()}</main>
//       <Footer />
//       <ScrollToTop />
//     </div>
//   );
// }

// export default App;
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Placement from "./components/Placement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Scroll to top when section changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const renderSection = () => {
    switch (activeSection) {
      case "home":
        return <Home setActiveSection={setActiveSection} />;
      case "about":
        return <About />;
      case "services":
        return <Services />;
      case "placement":
        return <Placement />;
      case "contact":
        return <Contact />;
      default:
        return <Home setActiveSection={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-cyan-50">
      <Header
        activeSection={activeSection}
        setActiveSection={handleSectionChange}
      />
      <main className="pt-16">
        {" "}
        {/* Adjusted for compact header */}
        {renderSection()}
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
