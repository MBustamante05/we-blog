import { ArrowRight } from "lucide-react";

export default function About() {
  return (
    <div className="px-14 pt-32 pb-10 mx-auto bg-black text-white min-h-screen">
      {/* Grid principal con 5 columnas y alturas automáticas */}
      <h1 className="text-[200px] font-bold mb-4 uppercase ">
        Wë <span className="text-[#E136C3]">develop</span>
      </h1>
      <div className="grid grid-cols-6 gap-4 h-full">
        {/* Sección principal - ocupa 3 columnas */}
        <div className="col-span-3 grid grid-rows-2 gap-4">
          {/* Texto principal sobre blog y desarrollo web*/}
          <div className="bg-gray-200 text-black p-8 rounded-lg flex flex-col justify-center hover:scale-105 transition-all duration-300 hover:z-10">
            <h1 className="text-6xl font-bold mb-4">
              BLOG <br />
              DEVELOPMENT <br />
              WEB
            </h1>
            <p className="text-lg mt-24">
              We are a team of developers who are passionate about creating
              beautiful and functional websites.
            </p>
          </div>

          {/* Grid inferior con 2 imágenes */}
          <div className="grid grid-cols-2 gap-4 ">
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300 bg-[#4B1DF2]">
              {/* <img
                src="/project3.png"
                alt=""
                className="w-full h-full object-cover "
              /> */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-2xl font-bold">#SOAPLANDING</h3>
              </div>
            </div>
            <div className="relative overflow-hidden rounded-lg hover:scale-105 transition-all duration-300 bg-[#DA42EF]">
              {/* <img
                src="/project2.png"
                alt=""
                className="w-full h-full object-cover "
              /> */}
              <div className="absolute top-4 right-4 text-white">
                <h3 className="text-2xl font-bold ">#POSTHUMAN</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Imagen grande lateral */}
        <div className="col-span-3 relative overflow-hidden rounded-lg ">
          <img src="/bg1.jpg" alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

          {/* Botones superpuestos */}
          <div className="absolute top-1/2 right-8 transform -translate-y-1/2 space-y-4">
            <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-white/30 hover:bg-white/30 transition-all flex items-center gap-2">
              LEARN MORE
              <ArrowRight className="w-6 h-6 arrow-right" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
