import '../components/assets/styles/Global.css';
import { Route, Routes } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ContactSection from "./ContactSection/ContactSection";
import CVSection from "./CVSection/CVSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/curriculum" element={<CVSection />} />
          <Route path="/contact" element={<ContactSection />} />
      </Routes>

    </div>
  );
}

export default App;
