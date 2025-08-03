"use client";
import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "#", label: "Email" },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Main Footer Content */}
      <div className="bg-black text-white min-h-screen flex flex-col justify-center">
        {/* Top Section - Dark */}
        <motion.div
          className="px-4 sm:px-8 md:px-14 py-16 sm:py-24 flex-1 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[180px] 2xl:text-[230px] text-center font-normal uppercase leading-none mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
          >
            (
            <motion.span
              className="font-bold main-font"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
            >
              Wë blog
            </motion.span>
            )
          </motion.h1>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6 sm:space-x-8 mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="text-white/70 hover:text-white transition-colors duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.2,
                  y: -5,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.9 }}
                aria-label={social.label}
              >
                <social.icon size={24} className="sm:w-8 sm:h-8" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll to top button */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            viewport={{ once: true }}
          >
            <motion.button
              onClick={scrollToTop}
              className="bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 hover:bg-white/20 transition-all flex items-center gap-2"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm sm:text-base">BACK TO TOP</span>
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Section - Light */}
        <motion.div
          className="bg-white text-black px-4 sm:px-8 md:px-14 py-16 sm:py-24 flex flex-col justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[180px] 2xl:text-[230px] text-center font-normal uppercase leading-none mb-8 sm:mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
          >
            (
            <motion.span
              className="font-bold main-font"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              viewport={{ once: true }}
            >
              Wë blog
            </motion.span>
            )
          </motion.h1>

          {/* Footer Info */}
          <motion.div
            className="text-center space-y-4 sm:space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            viewport={{ once: true }}
          >
            <motion.p
              className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
            >
              Crafting digital experiences with passion and innovation. Building
              the future of web development, one project at a time.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.6 }}
              viewport={{ once: true }}
            >
              <span>© 2024 Wë Blog. All rights reserved.</span>
              <div className="flex gap-4 sm:gap-6">
                <motion.a
                  href="#"
                  className="hover:text-gray-700 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="hover:text-gray-700 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
