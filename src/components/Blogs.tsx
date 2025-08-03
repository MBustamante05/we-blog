"use client";
import BlogCard, { type Blog } from "./BlogCard";
import { motion } from "framer-motion";

export default function Blogs() {
  const blogs: Blog[] = [
    {
      id: 1,
      image: "/project3.png",
      title: "Soap Landing Page",
      description:
        "Page created for a soap company to promote their products and services.",
      category: ["Web Development", "Landing Page", "Soap"],
    },
    {
      id: 2,
      image: "/project2.png",
      title: "Posthuman Landing Page",
      description:
        "Page created to think about the future of humanity and the impact of technology on our lives.",
      category: ["Web Development", "Landing Page", "Posthuman"],
    },
    {
      id: 3,
      image: "/project1.png",
      title: "Earthsuds-x Landing Page",
      description: "Page created to promote a new product of a soap company.",
      category: ["Web Development", "Landing Page", "Soap"],
    },
    {
      id: 4,
      image: "/project4.png",
      title: "Brent Faiyaz Landing Page",
      description: "Page created to promote a new album of a singer.",
      category: ["Web Development", "Landing Page", "Music"],
    },
    {
      id: 5,
      image: "/project5.png",
      title: "Memories Survive",
      description:
        "Page created to think about the future of humanity and the impact of technology on our lives.",
      category: ["Web Development", "Landing Page", "Memories", "Future"],
    },
    {
      id: 6,
      image: "/project6.png",
      title: "Memories Survive 2",
      description:
        "Page created to think about the future of humanity and the impact of technology on our lives.",
      category: ["Web Development", "Landing Page", "Memories", "Future"],
    },
  ];

  return (
    <div className="px-4 sm:px-8 md:px-14 pt-20 sm:pt-32 pb-20 sm:pb-36 mx-auto bg-black text-white min-h-screen">
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-6xl md:text-8xl lg:text-[120px] xl:text-[180px] 2xl:text-[200px] font-bold mb-8 sm:mb-4 uppercase text-center lg:text-end leading-none"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        Wë <span className="text-[#4B1DF2]">design</span>
      </motion.h1>

      {/* Blogs Grid */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 mt-8 sm:mt-16"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true, amount: 0.1 }}
      >
        {blogs.map((blog, index) => (
          <BlogCard key={blog.id} blog={blog} index={index} />
        ))}
      </motion.div>
    </div>
  );
}
