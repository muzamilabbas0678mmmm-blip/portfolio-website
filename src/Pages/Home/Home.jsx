import Navbar from "../Home/Components/Navbar.jsx";
import Hero from "../Home/Components/Hero.jsx";


const Home = () => {
  return (
    <div>  
      <Navbar />
      <main>
        <Hero 
           name="Muzamil Abbas"
           role="Frontend Developer"
           Discription = "I build modern and responsive web applications using core"
        /> 
      </main>
    </div>
 );
 };
export default Home;
