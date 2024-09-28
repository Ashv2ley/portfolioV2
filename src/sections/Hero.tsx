import Image from "next/image";
import outsideImage from '@/assets/images/outside.png';
import { ChevronDown } from "lucide-react";
import grainImage from '@/assets/images/grain.jpg';

export const HeroSection = () => {
  return (
  <div className="py-20 md:py-24 relative overflow-x-clip">
    <div className="absolute inset-0 -z-20 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%,transparent)]">
      <div className="absolute inset-0 -z-30 opacity-5" style={{backgroundImage: `url(${grainImage.src})`}}></div>
      <div className="size-[420px] hero-ring"></div>
      <div className="size-[620px] hero-ring"></div>
      <div className="size-[820px] hero-ring"></div>
      <div className="size-[1020px] hero-ring"></div>
      <div className="size-[1220px] hero-ring"></div>
    </div>
    <div className="container relative z-10">
      <div className="flex flex-col items-center justify-center">
        <Image src={outsideImage} alt='smiling person with hands in pocket' className="rounded-full size-[150px] border-4 border-white border-opacity-30"/>
        <div className="relative group">
          <a href="#" className=" bg-slate-900 border p-4 border-slate-800 px-4 py-2 mt-5 inline-flex items-center gap-3 rounded-lg">
            <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <div className="text-xs md:text-sm font-medium">Open to Internships / New Grad Roles</div>
          </a>
        </div>
        
      </div>
      <div className="max-w-2xl mx-auto">
        <h1 className=" font-calistoga text-3xl md:text-5xl text-center mt-8 tracking-wide">Building Exceptional Applications</h1>
        <p className="md:mx-14 mt-4 text-center text-white/60">I would love to develop at a company where I can be creative, solve meaningful problems, and see my impact
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center mt-8 gap-4">
        <button className="inline-flex items-center gap-2 border bg-slate-500/10 border-white/15 px-6 h-12 rounded-xl group hover:translate-y-1 duration-300">
          <span className="font-semibold">Explore My Work</span>
          <ChevronDown className="size-5 group-hover:translate-y-1 duration-300"/>
        </button>
        <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-900 px-6 h-12 rounded-xl group hover:translate-y-1 duration-300">
          <span className="font-semibold">Get in Touch</span>
          <span>👍</span>
        </button>
      </div>
    </div>
  </div>
  );
};
