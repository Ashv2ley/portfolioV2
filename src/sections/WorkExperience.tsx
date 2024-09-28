"use client"
import Image from "next/image";
import honeywellLogo from "@/assets/images/honeywell-logo.jpg"
import wbbuciLogo from "@/assets/images/wbbuci-logo.jpg"
import { ChevronRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export const WorkSection = () => {
  const experiences = [
    {
      id: 1,
      company: "Honeywell Aerospace",
      role: "Software Engineering Intern",
      logo: honeywellLogo,
      dates: "June 2024 - Sept 2024",
      description:"During my internship at Honeywell, I got to experience software engineering at an industry level. I met a lot of amazing people during my time there and had an amazing experience. I strengthened my skills in coding in Python, Java, and SQL through the projects and Jira tickets I was able to work on. My most noticeable accomplishment waas winning 3rd place in the Honeywell intern hackathon."
    
    },
    {
      id: 2,
      company: "Women's Club Baketball at UCI",
      role: "Treasurer",
      logo: wbbuciLogo,
      dates: "May 2024 - Present",
      description: "I joined the UC Irvine Women’s Club Basketball team to contribute to its growth and long-term success. Since the club was founded just two years ago, I wanted to help build a solid financial foundation and ensure its sustainability."
    },
  ];

  const [openSections, setOpenSections] = useState<{ [key: number]: boolean }>(
    {}
  );

  const handleToggle = (id: number) => {
    setOpenSections((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
  };

  return (
    <div className="container relative max-w-2xl mx-auto py-20 md:py-24">
      <h1 className="font-calistoga text-3xl md:text-4xl">Experience</h1>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <div
            className="flex items-start justify-between py-5 group cursor-pointer"
            onClick={() => handleToggle(experience.id)}
          >
            <div className="flex items-start gap-6">
              <Image
                src={experience.logo}
                alt={`${experience.company} logo`}
                className="size-12 md:size-16 rounded-full border-2 border-gray-700"
              />
              <div className="relative">
                <p className="text-[0.8rem] flex items-center font-md md:text-xl">
                  {experience.company}
                  {!openSections[experience.id] ? (
                    <ChevronRight
                      className="ml-1 transform transition-transform duration-500 ease-in-out opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  ) : (
                    <ChevronDown
                      className="ml-1 transform transition-transform duration-500 ease-in-out opacity-100"
                    />
                  )}
                </p>
                <p className="text-[0.7rem] md:text-lg font-extralight text-gray-400">
                  {experience.role}
                </p>
              </div>
            </div>
            <p className="text-right text-[0.7rem] md:text-lg font-extralight text-gray-400">
              {experience.dates}
            </p>
          </div>

          <div
            className={`transition-[max-height] duration-700 ease-in-out overflow-hidden ${
              openSections[experience.id] ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="pl-20 text-sm md:text-lg text-gray-400 transition-opacity duration-700 ease-in-out">
              <p>{experience.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};