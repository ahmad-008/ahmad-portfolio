import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";

const skills = [
  { name: "React", level: 85, icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", level: 75, icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", level: 75, icon: SiExpress, color: "#111111" },
  { name: "MongoDB", level: 70, icon: SiMongodb, color: "#47A248" },
  { name: "JavaScript", level: 85, icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind", level: 90, icon: SiTailwindcss, color: "#06B6D4" },
  { name: "Git", level: 80, icon: SiGit, color: "#F05032" },
  { name: "GitHub", level: 80, icon: SiGithub, color: "#111111" },
];

function Skills() {
  return (
    
    <section id="skills" className="px-[5vw] py-16 lg:py-20" >
        <div className="flex flex-wrap justify-center gap-6" >
            {skills.map((skill)=>(
                <div
                    key={skill.name}
                    className="w-[196px] h-[290px] sm:h-[347px] border 
                    border-dark/10 rounded-[15px] sm:rounded-full"
                >
                    {skill.name}
                </div>

            ))}
        </div>
    </section>



  );
}

export default Skills;