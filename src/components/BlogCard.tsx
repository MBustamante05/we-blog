"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export interface Blog {
  id: number;
  image: string;
  title: string;
  description: string;
  category: string[];
}

interface BlogCardProps {
  blog: Blog;
  index?: number;
}

export default function BlogCard({ blog, index = 0 }: BlogCardProps) {
  return (
    <motion.div
      className="p-4 sm:p-5 rounded-md text-white flex flex-col justify-center group"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {/* Image Container */}
      <motion.div
        className="relative overflow-hidden rounded-lg"
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
      >
        <motion.img
          src={blog.image}
          alt={blog.title}
          className="w-full h-48 sm:h-64 md:h-72 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* CTA Button */}
        <motion.div
          className="absolute bottom-4 right-4 text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.1 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-white/20 backdrop-blur-sm text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2 text-sm sm:text-base opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 8px 20px rgba(255,255,255,0.1)",
            }}
            whileTap={{ scale: 0.95 }}
            style={{ transition: "all 0.3s ease" }}
          >
            <span>LEARN MORE</span>
            <motion.div
              animate={{ x: [0, 3, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="mt-4 sm:mt-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 + index * 0.1 }}
        viewport={{ once: true }}
      >
        <motion.h3
          className="text-lg sm:text-xl font-bold mb-3 group-hover:text-gray-200 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.2 }}
        >
          {blog.title}
        </motion.h3>
        <motion.p
          className="text-sm sm:text-base text-gray-100 leading-relaxed"
          initial={{ opacity: 0.8 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 + index * 0.1 }}
          viewport={{ once: true }}
        >
          {blog.description}
        </motion.p>
      </motion.div>

      {/* Categories */}
      <motion.div
        className="flex flex-wrap gap-2 mt-4 sm:mt-6"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 + index * 0.1 }}
        viewport={{ once: true }}
      >
        {blog.category.map((category, categoryIndex) => (
          <motion.span
            key={category}
            className="text-xs sm:text-sm text-gray-100 bg-white/20 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.7 + index * 0.1 + categoryIndex * 0.05,
              duration: 0.3,
            }}
            viewport={{ once: true }}
            whileHover={{
              scale: 1.05,
              backgroundColor: "rgba(255,255,255,0.3)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.span>
        ))}
      </motion.div>
    </motion.div>
  );
}
