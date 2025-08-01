import "./App.css";
import About from "./components/About";
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
    </div>
  );
}

export default App;
