import { RxArrowTopRight } from "react-icons/rx";
import profilepic from "../assets/profile-pic.png";
import profilebg from "../assets/profile-pic-bg.png";


function Hero() {
    return (

        <section
            id="home"
            className="relative overflow-hidden px-[5vw] pt-5 xl:pt-20
            pb-16 lg:pb-0 lg:min-h-[700px] xl:min-h-[850px]"
        >

            <div className="max-w-[1320px] mx-auto" >

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

                    <img src={profilebg} alt="" className="w-full" />
                    <img src={profilepic} alt="Ahmad Ali" className="absolute bottom-1 left-[23%] w-[77%]" />
                </div>

                {/* Intro and Buttons */}

                <div className="mt-6 lg:mt-[30px] lg:ml-[33.33%] lg:max-w-[640px]">

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
                            className="inline-flex items-center ml-1 gap-2 py-3.5 px-4 sm:py-[17px] sm:px-[35px] rounded-full border 
                            border-dark bg-light text-dark hover:bg-dark hover:text-light text-sm sm:text-base font-bold 
                            transition duration-300"
                        >
                            Download CV <RxArrowTopRight />
                        </a>


                    </div>




                </div>

            





         </div>







            





        </section>


    );
}

export default Hero;