import { ArrowRight } from "lucide-react";

export interface Blog {
    id: number;
    image: string;
    title: string;
    description: string;
    category: string[];
}

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <div className="p-5 rounded-md text-white flex flex-col justify-center hover:scale-105 transition-all duration-300 hover:z-10 ">
        <div className="relative overflow-hidden rounded-lg ">
            <img src={blog.image} alt="" className="w-full h-full object-cover" />
            <div className="absolute bottom-4 right-4 text-white">
                <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2">
                    <span>LEARN MORE</span>
                    <ArrowRight className="w-6 h-6" />
                </button>
            </div>
        </div>
        <div className="mt-4">
            <h3 className="text-xl font-bold mb-3">{blog.title}</h3>
            <p className="text-sm text-gray-100">{blog.description}</p>
        </div>
        <div className="flex gap-2 mt-4">
            {blog.category.map((category) => (
                <span key={category} className="text-xs text-gray-100 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2 cursor-pointer">{category}</span>
            ))}
        </div>
    </div>
  );
}