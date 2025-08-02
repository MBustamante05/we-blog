import BlogCard, { type Blog } from "./BlogCard";

export default function Blogs() {
    const blogs: Blog[] = [
        {
            id: 1,
            image: "/project3.png",
            title: "Soap Landing Page",
            description: "Page created for a soap company to promote their products and services.",
            category: ["Web Development", "Landing Page", "Soap"],
        },
        {
            id: 2,
            image: "/project2.png",
            title: "Posthuman Landing Page",
            description: "Page created to think about the future of humanity and the impact of technology on our lives.",
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
    ];
  return (
    <div className="px-14 pt-32 pb-36 mx-auto bg-black text-white min-h-screen">
      <h1 className="text-[200px] font-bold mb-4 uppercase text-end">Wë <span className="text-[#4B1DF2]">design</span> </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-y-10 space-x-5">
        {blogs.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </div>
  );
}