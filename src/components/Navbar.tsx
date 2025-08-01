import { useState, useEffect } from "react";

interface NavbarProps {
  isHome?: boolean;
}

export default function Navbar({ isHome = false }: NavbarProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    // Si estamos en home, el navbar siempre es visible
    if (isHome) {
      setIsVisible(true);
      return;
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Si está cerca del top (menos de 100px), siempre mostrar
      if (currentScrollY < 100) {
        setIsVisible(true);
      } else {
        // Si hace scroll hacia abajo, ocultar. Si hacia arriba, mostrar
        if (currentScrollY > lastScrollY) {
          setIsVisible(false);
        } else {
          setIsVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isHome]);

  const aStyle =
    "hover:text-gray-400 transition-all duration-300 cursor-pointer uppercase ";

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-14 py-6 bg-black/90 backdrop-blur-sm border-b border-gray-800/50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex justify-between items-center text-4xl font-bold main-font uppercase text-white">
        <button onClick={() => scrollToSection("home")}>
          <h1>
            Ẅ<span className="text-gray-400">BLOG</span>
          </h1>
        </button>
        <button onClick={() => scrollToSection("home")} className={aStyle}>
          Home
        </button>
        <button onClick={() => scrollToSection("about")} className={aStyle}>
          About
        </button>
        <a href="#blogs" className={aStyle}>
          Blogs
        </a>
        <a href="#login" className={aStyle}>
          Login
        </a>
      </div>
    </nav>
  );
}
