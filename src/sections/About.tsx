'use client'
import { Card } from "@/components/Card";
import { SectionHeader } from "@/components/SectionHeader";
import { CardHeader } from "@/components/CardHeader";
import { motion } from "framer-motion";
import {Fragment, useRef} from "react";

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
  const skills = [
    {
      id: 1,
      skill: "React",
    },
    {
      id: 2,
      skill: "Next.js",
    },
    {
      id: 3,
      skill: "JavaScript",
    },
    {
      id: 4,
      skill: "Node.js",
    },
    {
      id: 5,
      skill: "Python",
    },
    {
      id: 6,
      skill: "C++",
    },
    {
      id: 7,
      skill: "Java",
    },

  ];
  const skills2 = [
    {
      id: 8,
      skill: "MongoDB",
    },
    {
      id: 9,
      skill: "Typescript",
    },
    {
      id: 10,
      skill: "SQL",
    },
    {
      id: 11,
      skill: "HTML",
    },
    {
      id: 12,
      skill: "TailwindCSS",
    },
    {
      id: 13,
      skill: "GitHub",
    },
    {
      id: 14,
      skill: "Figma",
    },
  ];
  const constraintRef = useRef(null);
  return (
      <div id="about" className="py-12 md:py-0">
        <div className="container">
          <SectionHeader
              title="About Me"
              subtitle="A Glimpse Into My World"
              description="Learn more about who I am and what I do"
          />
          <div className={"mt-10"}>
            <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-1">
              <CardHeader title="Beyond the Code"
                          description="Exmplore my interest and hobbies beyond the digital realm"
                          className="px-6 pt-6"/>
              <div className="relative flex-1 " ref={constraintRef}>
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
            <Card className={"h-[320px] p-0"}>
              <CardHeader title="My Toolbox"
                          description="Exmplore the technologies and tools I use to build exceptional applications"
                          className="px-6 pt-6"/>
              <div className="flex flex-none mt-6 gap-4 animate-move-left [animation-duration:20s]">
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                      {skills.map((skill) => (
                          <div key={skill.skill}
                               className="inline-flex items-center gap-4 py-2 px-3 border-2 border-white/15 rounded-lg bg-white/5">
                            <span className={"font-medium text-lg"}>{skill.skill}</span>
                          </div>
                      ))}
                    </Fragment>
                ))}
              </div>
              <div className="flex flex-none mt-6 gap-4 animate-move-right [animation-duration:20s]">
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                      {skills2.map((skill) => (
                          <div key={skill.id}
                               className="inline-flex items-center gap-4 py-2 px-3 border-2 border-white/15 rounded-lg bg-white/5">
                            <span className={"font-medium text-lg"}>{skill.skill}</span>
                          </div>
                      ))}
                    </Fragment>
                ))}
              </div>
            </Card>
            </div>

          </div>
        </div>
      </div>

  );
};
