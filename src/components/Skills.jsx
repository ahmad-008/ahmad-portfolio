import { SiReact, SiNodedotjs, SiExpress, SiMongodb, SiJavascript, SiTailwindcss, SiGit, SiGithub } from "react-icons/si";


// Skills list: name, level (%), icon and brand color
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
       
       {/* Cards wrapper (temporary, Swiper replaces this in Step D) */}
        <div className="flex flex-wrap justify-center gap-6" >
            {skills.map((skill)=>{
                const Icon = skill.icon;
                return (

                     // Skill card
                    <div
                    key={skill.name}
                    className="flex flex-col items-center pt-6 px-[30px] w-[196px] h-[290px] sm:h-[347px] border 
                    border-dark/10 rounded-[15px] sm:rounded-full"
                >

                    {/* Icon circle */}
                   <div className="flex items-center justify-center 
                            size-[136px] rounded-full bg-light-gray" >
                        <Icon className="text-[60px] " style={{color: skill.color}} />
                   </div>

                     {/* Level and name */}
                    <div className="mt-10 text-center" >
                        <h4 className="text-[32px] font-bold leading-[1.31]" >{skill.level}%</h4>
                        <span className="text-gray-text uppercase" >{skill.name}</span>
                    </div>

                </div>
                );
                

            })}

        </div>
    </section>



  );
}

export default Skills;