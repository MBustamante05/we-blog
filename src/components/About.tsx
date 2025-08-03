"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="px-4 sm:px-8 md:px-14 pt-20 sm:pt-32 pb-10 mx-auto bg-black text-white min-h-screen">
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[180px] 2xl:text-[200px] font-bold mb-8 sm:mb-4 uppercase leading-none"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Wë <span className="text-[#E136C3]">develop</span>
      </motion.h1>

      {/* Main Grid - Responsive Layout */}
      <motion.div
        className="grid grid-cols-1 lg:grid-cols-6 gap-4 sm:gap-6 h-full"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Left Section - Main content */}
        <div className="lg:col-span-3 grid grid-cols-1 sm:grid-rows-2 gap-4 sm:gap-6">
          {/* Main text card */}
          <motion.div
            className="bg-gray-200 text-black p-6 sm:p-8 rounded-lg flex flex-col justify-center min-h-[300px] sm:min-h-[400px]"
            variants={itemVariants}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              BLOG <br />
              DEVELOPMENT <br />
              WEB
            </motion.h2>
            <motion.p
              className="text-base sm:text-lg mt-8 sm:mt-24"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
            >
              We are a team of developers who are passionate about creating
              beautiful and functional websites.
            </motion.p>
          </motion.div>

          {/* Project cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <motion.div
              className="relative overflow-hidden rounded-lg bg-[#4B1DF2] min-h-[200px] sm:min-h-[250px] flex items-end"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl sm:text-2xl font-bold">#SOAPLANDING</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </motion.div>

            <motion.div
              className="relative overflow-hidden rounded-lg bg-[#DA42EF] min-h-[200px] sm:min-h-[250px] flex items-start justify-end"
              variants={itemVariants}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.2 },
              }}
              whileTap={{ scale: 0.97 }}
            >
              <div className="absolute top-4 right-4 text-white">
                <h3 className="text-xl sm:text-2xl font-bold">#POSTHUMAN</h3>
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent" />
            </motion.div>
          </div>
        </div>

        {/* Right Section - Large image */}
        <motion.div
          className="lg:col-span-3 relative overflow-hidden rounded-lg min-h-[400px] sm:min-h-[600px] lg:min-h-full order-first lg:order-last"
          variants={itemVariants}
        >
          <motion.img
            src="/bg1.jpg"
            alt="Background"
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

          {/* CTA Button */}
          <motion.div
            className="absolute top-1/2 right-4 sm:right-8 transform -translate-y-1/2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.button
              className="bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2 text-sm sm:text-base"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(255,255,255,0.1)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              LEARN MORE
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
