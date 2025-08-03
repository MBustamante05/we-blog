"use client";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="px-14 pt-32 pb-10 mx-auto bg-black text-white min-h-screen">
      <motion.div
        className="mt-24"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
      >
        <motion.h1
          className="text-[230px] text-center font-normal uppercase"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
        >
          (
          <motion.span
            className="font-bold main-font"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Wë blog
          </motion.span>
          )
        </motion.h1>
      </motion.div>
      <motion.img
        src="/bg1.jpg"
        alt=""
        className="w-full h-full object-cover"
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
      />
    </div>
  );
}
