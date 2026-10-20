import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";
import Projects from "./components/Projects";
import { useEffect } from "react";
import Contact from "./components/Contact";

function App() {

  // Smooth scroll for "#" links, without adding the #id to the URL
    useEffect(()=>{
      const handleClick = (event)=> {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;

        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        event.preventDefault();
        target.scrollIntoView({ behavior: "smooth"});
      };

      document.addEventListener("click", handleClick);
      return () => document.removeEventListener("click", handleClick);



    },[]);


  return (
      <>
        <Navbar/>
       
        <main>
          <Hero/>
          <Skills/>
          <About/>
          <Projects/>
          <Contact/>
        </main>
        
      
      </>
  )
}

export default App;