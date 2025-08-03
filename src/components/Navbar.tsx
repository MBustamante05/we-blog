"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 px-14 py-6 bg-black/90 backdrop-blur-sm border-b border-gray-800/50 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
    >
      <div className="flex justify-between items-center text-4xl font-bold main-font uppercase text-white">
        <motion.button
          onClick={() => scrollToSection("home")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h1>
            Ẅ<span className="text-gray-500">BLOG</span>
          </h1>
        </motion.button>
        <motion.button
          onClick={() => scrollToSection("home")}
          className={aStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Home
        </motion.button>
        <motion.button
          onClick={() => scrollToSection("about")}
          className={aStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          About
        </motion.button>
        <motion.button
          onClick={() => scrollToSection("blogs")}
          className={aStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Blogs
        </motion.button>
        <motion.a
          href="#login"
          className={aStyle}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          whileHover={{ y: -2 }}
          whileTap={{ y: 0 }}
        >
          Login
        </motion.a>
      </div>
    </motion.nav>
  );
}
