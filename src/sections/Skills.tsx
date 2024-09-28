export const SkillSection = () => {
        const skills = [
          {
            id: 1,
            skill: "React.js",          
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
            skill: "React Native",
          },
        ];
    
        return (
            <div className="container relative max-w-2xl mx-auto">
                <h1 className="font-calistoga text-3xl md:text-4xl">Skills</h1>
                <div className="flex flex-wrap gap-5 mt-5">
                {skills.map((skill) => (
                    <div key={skill.id} className="text-sm md:text-lg text-center border bg-slate-500/10 border-white/15 p-1 px-2 md:p-1 md:px-4 rounded-lg">{skill.skill}</div>
                ))}
                </div>
          </div>
    );
  };