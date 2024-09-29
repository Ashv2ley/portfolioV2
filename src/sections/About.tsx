'use client'
import { Card } from "@/components/Card";
import { SectionHeader } from "../components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const hobbbies = [
    {
      title: "Basketball",
      emoji: "🏀",
      top: "0%",
      left: "5%"
    },
    {
      title: "Thrifting",
      emoji: "👕",
      top: "60%",
      left: "5%"
    },
    {
      title: "Antiquing",
      emoji: "🪑",
      top: "20%",
      left: "35%"
    },
    {
      title: "Vintage Shopping",
      emoji: "👖",
      top: "40%",
      left: "10%"
    },
    {
      title: "Photography",
      emoji: "📷",
      top: "70%",
      left: "35%"
    },
    {
      title: "Music",
      emoji: "🎵",
      top: "0%",
      left: "50%"
    },
    {
      title: "Cooking",
      emoji: "🍳",
      top: "45%",
      left: "65%"
    },
    {
      title: "Puzzles",
      emoji: "🧩",
      top: "5%",
      left: "70%"
    }
  ]
  const constraintRef = useRef(null);
  return (
    <div id="about" className="py-12 md:py-0">
      <div className="container">
        <SectionHeader 
        title="About Me" 
        subtitle="A Glimpse Into My World" 
        description="Learn more about who I am and what I do"
        />
        <div>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader title="Beyond the Code" description="Exmplore my interest and hobbies beyond the digital realm" className="px-6 pt-6"/>
            <div className="relative flex-1" ref={constraintRef}>
              {hobbbies.map((hobby) => (
                <motion.div 
                key={hobby.title} 
                className="text-xs md:text-base inline-flex items-center gap-2 px-4 md:px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                style={{left: hobby.left, top: hobby.top}}
                drag
                dragConstraints={constraintRef}
                >
                  <span className="font-medium text-gray-950">{hobby.title}</span>
                  <span>{hobby.emoji}</span>
                </motion.div>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
    
  );
};
