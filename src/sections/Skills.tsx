import {Asterisk} from "lucide-react"
import StarIcon from "@/assets/icons/star.svg";
import {Fragment} from "react";
export const SkillSection = () => {
        const courses = [
          {
            id: 1,
            course: "Software Design",
          },
          {
            id: 2,
            course: "Data Structure Implementation & Analysis",
          },
          {
            id: 3,
            course: "Software Testing & Quality Assurance",
          },
          {
            id: 4,
            course: "Principles of Operating Systems",
          },
          {
            id: 5,
            course: "Computer and Communication Networks",
          },
          {
            id: 6,
            course: "Design & Analysis of Algorithms",
          },
        ];
    
        return (
            <div className="py-10 lg:py-24 overflow-x-clip">
              <p className="container relative max-w-6xl justify-center flex text-xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text pb-14">Relevant Coursework</p>
              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 py-3 overflow-x-clip -rotate-2 -mx-1">
                <div className="flex">
                  <div className="flex flex-none gap-4 py-3 pr-4 animate-move-left [animation-duration:20s]">
                      {[...new Array(2)].fill(0).map((_, index) => (
                          <Fragment key={index}>
                              {courses.map((course) => (
                                  <div className={"inline-flex gap-4 items-center"} key={course.id}>
                                      <div className="text-black text-sm md:text-lg">
                                          <span className={"font-semibold uppercase md:text-lg"}>{course.course}</span>
                                      </div>
                                      <StarIcon className={"animate-spin text-black"}/>
                                  </div>
                              ))}
                          </Fragment>
                      ))}
                  </div>
                </div>
              </div>
            </div>
        );
};