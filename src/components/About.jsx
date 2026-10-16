import React from 'react'

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

                    {/* Statement */}
                    <p className="lg:col-span-2 indent-10 lg:indent-16 text-xl
                    sm:text-2xl xl:text-[28px] font-medium leading-[1.45]" >
                        As a Full Stack developer, I believe great software is more than code.
                        It solves real problems, feels fast, and is a pleasure to use. My goal
                        is to build web apps that people enjoy and businesses rely on.
                    </p>



                </div>

            </div>



        </section>



    );
}

export default About;