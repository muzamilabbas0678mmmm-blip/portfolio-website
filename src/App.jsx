import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Skills from"./Pages/Skills/Skills.jsx";
import Projects from "./Pages/projects/Projects.jsx";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element ={<Home />} />
        <Route path="/about" element ={<About />} />
        <Route path="/skills" element ={<Skills />} />
        <Route path="/projects" element ={<Projects />} />


        
      </Routes>
    </BrowserRouter>
  );
}

export default App;