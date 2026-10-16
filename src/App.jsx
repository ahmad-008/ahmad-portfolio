import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import About from "./components/About";

function App() {
  return (
      <>
        <Navbar/>
       
        <main>
          <Hero/>
          <Skills/>
          <About/>
        </main>
        
      
      </>
  )
}

export default App;