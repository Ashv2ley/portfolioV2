import {Asterisk} from "lucide-react"
export const SkillSection = () => {
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
          {
            id: 8,
            skill: "Next.js",
          },
          {
            id: 9,
            skill: "MongoDB",
          },
          {
            id: 10,
            skill: "Typescript",
          },
          {
            id: 11,
            skill: "SQL",
          },
          {
            id: 12,
            skill: "HTML",
          },
          {
            id: 13,
            skill: "TailwindCSS",
          },
        ];
    
        return (
            <div className="">
              <p className="container relative max-w-6xl justify-center flex pb-14 text-xl uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text">Technical Skills</p>

              <div className="bg-gradient-to-r from-emerald-300 to-sky-400 py-3 overflow-x-clip -rotate-2 -mx-1">
                <div className="flex [mask-image:linear-gradient(to_right, transparent, black_10%,black_90%,transparent)]">
                  <div className="flex flex-none gap-4 py-1">
                    {skills.map((skill) => (
                        <div className={"inline-flex gap-4 items-center"} key={skill.id}>
                          <div className="w-fit text-black text-sm md:text-lg text-center border bg-slate-500/40 border-white/10 p-1 px-2 md:p-1 md:px-4 rounded-lg">
                            <span className={"font-medium"}>{skill.skill}</span>
                          </div>
                          <Asterisk className={"animate-spin text-black"}/>
                        </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
        );
};