import { RxArrowRight } from "react-icons/rx";


// Circles under the statement: 3 stats and 1 short text
const stats = [
    {value: "1+", label: "Year of Coding"},
    {text: "I enjoy turning complex problems into simple, clean and responsive web experiences."},
    { value: "10+", label: "Projects Built" },
    { value: "8+", label: "Technologies" },
];



function About() {
    return (
        <section id="about" className="px-[5vw] py-16 lg:py-24" >

            <div className="max-w-[1320px] mx-auto border-t border-dark/10 pt-10 lg:pt-12" >
                {/* Label and statement */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

                    {/* Label */}
                    <div>
                        <span className="inline-block px-3 py-1 border border-dark/10 text-xs
                    font-bold uppercase tracking-wider" >
                            About Me
                        </span>
                    </div>

                    <div className="lg:col-span-2">
                        {/* Statement and button */}
                    <p className="indent-10 lg:indent-16 text-xl
                    sm:text-2xl xl:text-[28px] font-medium leading-[1.45]" >
                        As a Full Stack developer, I believe great software is more than code.
                        It solves real problems, feels fast, and is a pleasure to use. My goal
                        is to build web apps that people enjoy and businesses rely on.
                    </p>

                    {/* More About Me button */}
                    <a
                        href="https://www.linkedin.com/in/ahmadali007/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-4 mt-8 lg:mt-10 p-1 pr-6 rounded-full bg-dark 
                        text-light text-sm font-bold hover:bg-accent transition duration-300"
                    >

                        <span className="flex items-center justify-center size-9 rounded-full bg-light text-dark
                        group-hover:translate-x-1 transition duration-300" >
                            <RxArrowRight />
                        </span>

                        More About Me

                    </a>
                    </div>

                   
                </div>

                 {/* Stats circles */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16 lg:mt-24" >
                        {stats.map((stat, index) => (

                            <div
                            key={index}
                            className="flex flex-col items-center justify-center w-full max-w-[300px]
                            mx-auto aspect-square rounded-full border border-dark/10 text-center p-8"
                            >
                                {stat.text ? (
                                    <p className="text-sm text-gray-text leading-relaxed" >{stat.text}</p>

                                ) : (
                                    <>
                                    <h4 className="text-5xl xl:text-[64px] font-bold leading-none">{stat.value}</h4>
                                    <span className="mt-3 text-xs uppercase tracking-wider text-gray-text" >{stat.label}</span>
                                    </>

                                )}

                            </div>

                        ))}

                    </div>


            </div>


        </section>
    );

}


export default About;