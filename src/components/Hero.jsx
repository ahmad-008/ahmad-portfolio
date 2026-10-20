import { RxArrowTopRight } from "react-icons/rx";
import profilepic from "../assets/profile-pic.png";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import contactRing from "../assets/contact-me-txt.svg";


function Hero() {

    const socials = [
        { name: "Github", href: "https://github.com/ahmad-008", icon: FaGithub },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmadali007/", icon: FaLinkedinIn },
        { name: "Email", href: "mailto:ahmadali151023@gmail.com", icon: MdOutlineEmail },
    ];


    return (

        <section
            id="home"
            className="relative overflow-hidden px-[5vw] pt-5 xl:pt-20
            pb-16 lg:pb-0 lg:min-h-[calc(220px+28vw)] 2xl:min-h-[calc(240px+31vw)]"
        >

            <div className="max-w-[1320px] mx-auto" >
               
               {/* Badge anchor */}
                <div className="relative" >

                    {/* Background line */}
                    <div className="hidden lg:block absolute -z-10 h-px bg-dark/10 rotate-[147deg] w-[1440px] top-[218px]
                    -left-[394px] 2xl:w-[1514px] 2xl:top-[265px] 2xl:-left-[420px]">

                        <span className="absolute left-1/2 top-1/2 -translate-y-1/2
                        size-[54px] 2xl:size[74px] rounded-full border-2 border-light-gray bg-light"></span>
                    </div>


                    {/* Rotating contact badge */}
                <div className="hidden md:flex absolute top-0 right-0
                items-center justify-center size-[100px] xl:size-[128px]">

                    {/* Spinning ring */}
                    <img
                        src={contactRing}
                        alt=""
                        className="absolute inset-0 w-full h-full animate-[spin_10s_linear_infinite]"
                    />

                    {/* Button in the middle */}
                    <a
                        href="#contact"
                        aria-label="Contact me"
                        className="relative flex items-center justify-center w-[58px] 
                        h-[58px] xl:w-[74px] xl:h-[74px] rounded-full bg-dark hover:bg-accent transition duration-300"
                    >
                        <svg width="20" height="40" viewBox="0 0 20 40" fill="none" aria-hidden="true">
      <path d="M8 1V38C10 34 14 28 19 26" stroke="white" strokeWidth="2" strokeLinecap="round" />
    </svg>
                    </a>


                </div>
                </div>
                





                {/* Greeting */}
                <div className="flex items-center gap-2" >
                    <h6 className="text-base sm:text-xl font-bold leading-[1.3]" >Hi there!</h6>
                    <span className="text-xl" aria-hidden="true">👋</span>
                    <h6 className="text-base sm:text-xl font-bold leading-[1.3]">I'm</h6>
                </div>

                {/* Name */}
                <h1 className="mt-1 md:mt-6 -ml-1 text-[44px] md:text-[50px]
                  lg:text-[65px] xl:text-[80px] 2xl:text-[92px] 
                  font-bold leading-[1.1]" >
                    Ahmad Ali
                </h1>


                {/*Photo*/}
                <div className="relative w-[85%] max-w-[450px] -ml-[5vw] mt-6 lg:absolute lg:left-0 
                lg:ml-0 lg:mt-0 lg:w-[30vw] 2xl:w-[34vw] lg:max-w-[652px]">

                    {/* Same box size as the old black shape, photo fits inside it */}
                    <img src={profilepic} alt="Ahmad Ali" className="w-full aspect-[652/594] object-contain object-bottom" />
                </div>

                {/* Intro and Buttons */}

                <div className="mt-6 lg:mt-[30px] lg:ml-[33.33%]">

                    <p className="my-[15px] sm:mb-[42px] text-base sm:text-xl
                    font-bold leading-[1.3] text-gray-text" >
                        I'm a Full Stack developer who builds fast, responsive web apps
                        including backend & frontend with clean code and a focus
                        on great user experience.

                    </p>

                    <div className="flex flex-wrap items-center gap-[15px]" >
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 py-3.5 px-4 
                    sm:py-[17px] sm:px-[35px] rounded-full border-dark bg-dark 
                    text-light hover:text-light text-sm sm:text-base font-bold
                    hover:bg-accent transition duration-300"
                        >
                            Let's Talk <RxArrowTopRight />
                        </a>

                        <a
                            href="/Ahmad Ali CV.pdf"
                            target="_blank"
                            className="inline-flex items-center ml-1 gap-2 py-3.5 px-4 sm:py-[17px] sm:px-[35px] rounded-full border 
                            border-dark bg-light text-dark hover:bg-dark hover:text-light text-sm sm:text-base font-bold 
                            transition duration-300"
                        >
                            Download CV <RxArrowTopRight />
                        </a>


                        {/* Arrow pointing to socials */}
                        <svg
                            className="hidden 2xl:block text-dark"
                            width="133"
                            height="20"
                            viewBox="0 0 133 20"
                            fill="none"
                            aria-hidden="true"
                        >
                            <path d="M0 19.5H132C128 17.67 118.7 11.4 113.5 1" stroke="currentColor" />
                        </svg>

                        <ul className="flex items-center gap-[15px]" >
                            {socials.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <li key={social.name}>
                                        <a
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.name}
                                            className="flex items-center justify-center w-[50px]
                                        h-[50px] sm:h-[60px] rounded-full bg-light-gray text-dark
                                        text-xl sm:text-[22px] hover:bg-accent hover:text-light transition duration-300"
                                        >
                                            <Icon />
                                        </a>

                                    </li>


                                );
                            })



                            }


                        </ul>

                    </div>




                </div>

                {/* Outline title with reflection */}
                
                <div className="mt-10 lg:mt-16 lg:ml-[33.33%] whitespace-nowrap
                font-bold uppercase leading-none select-none text-transparent
                [-webkit-text-stroke:1px_rgba(17,17,17,0.25)] text-[8vw] md:text-[50px]
                lg:text-[60px] xl:text-[79px] 2xl:text-[102px]" >
                        <p>
                            Full Stack Dev
                        </p>

                        <p
                            aria-hidden="true"
                            className="-mt-[0.2em] -scale-y-100 opacity-50 [mask-image:linear-gradient(to_bottom,transparent_30%,black)]"
                        >
                            Full Stack Dev
                        </p>

                </div>






            </div>













        </section>


    );
}

export default Hero;