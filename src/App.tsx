import "./App.css";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import { useActiveSection } from "./hooks/useActiveSection";

function App() {
  const activeSection = useActiveSection();

  return (
    <div>
      <Navbar isHome={activeSection === "home"} />
      <section id="home">
        <Home />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="blogs">
        <Blogs />
      </section>
        <Footer />
    </div>
  );
}

export default App;
