import Hero from "../Home/Components/Hero.jsx";
import Footer from "./Components/Footer.jsx";


const Home = () => {
  return (
    <div>  
      
      <main>
        <Hero 
           name="Muzamil Abbas"
           role="Frontend Developer"
           Discription = "I build modern and responsive web applications using core"
        /> 
      </main>
      <Footer/>
    </div>
 );
 };
export default Home;
