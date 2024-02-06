import Services from "./components/Services";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Tours from "./components/Tours";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Tours />
      <Footer />
    </>
  );
}

export default App;
