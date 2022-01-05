import '../components/assets/styles/Global.css';
import { Route, Routes } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import ProjectsSection from "./ProjectsSection/ProjectsSection";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/projects" element={<ProjectsSection />} />
      </Routes>

    </div>
  );
}

export default App;
