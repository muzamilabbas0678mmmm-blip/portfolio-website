import Navbar from "./Pages/Home/Components/Navbar.jsx"
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Skills from"./Pages/Skills/Skills.jsx";
import Projects from "./Pages/projects/Projects.jsx";
import Contacts from "./Pages/contact/Contacts.jsx";
import BackgroundLights from "./Animation components/BackgroundLights.jsx";


import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    
    <BrowserRouter>
    <BackgroundLights/>
    <Navbar />
    

      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/skills" element ={<Skills />} />
        <Route path="/projects" element ={<Projects />} />
        <Route path="/contact" element ={<Contacts />} />



        
      </Routes>
    </BrowserRouter>
  );
}

export default App;