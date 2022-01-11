import '../components/assets/styles/Global.css';
import { Route, Routes } from "react-router-dom";
import HeroSection from "./HeroSection/HeroSection";
import Navbar from "./Navbar/Navbar";
import ContactSection from "./ContactSection/ContactSection";
import CVSection from "./CVSection/CVSection";
import WorkSection from "./WorkSection/WorkSection";
import ProjectOne from './WorkSection/ProjectOne';
import ProjectTwo from './WorkSection/ProjectTwo';
import ProjectThree from './WorkSection/ProjectThree';

// import Chatbot from "react-chatbot-kit";
// import config from "./chatbot/config";
// import MessageParser from "./chatbot/MessageParser";
// import ActionProvider from "./chatbot/ActionProvider";
// import 'react-chatbot-kit/build/main.css'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
          <Route path="/" element={<HeroSection/>} />
          <Route path="/work" element={<WorkSection />} />
          <Route path="/work/bloom" element={<ProjectThree />} />
          <Route path="/work/cacildis-viagens" element={<ProjectTwo />} />
          <Route path="/work/game-show" element={<ProjectOne />} />
          <Route path="/curriculum" element={<CVSection />} />
          <Route path="/contact" element={<ContactSection />} />
      </Routes>
      <div>
        {/* <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        /> */}
      </div>
    </div>
  );
}

export default App;
