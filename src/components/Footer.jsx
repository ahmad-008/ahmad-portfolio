import { RxArrowTopRight } from "react-icons/rx";

function Footer() {

        // Links on the bottom right
    const links = [
        { name: "About", href: "#about" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];


  return (
    
    <footer className="px-[5vw] pt-16 pb-6 overflow-hidden" >
        <div className="max-w-[1320px] mx-auto" >

            {/* Get in Touch button */}
            <div className="flex justify-center" >
                <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 py-3.5 px-6 sm:py-[17px] sm:px-[35px]
                    rounded-full bg-dark text-light text-sm sm:text-base font-bold
                    hover:bg-accent transition duration-300"
                >
                    Get in Touch <RxArrowTopRight/> 
                </a>
            </div>


             {/* Big faded name */}
             <h2
                aria-hidden="true"
                className="mt-10 -ml-6 md:-ml-6 text-center whitespace-nowrap font-bold leading-none select-none
                text-[17vw] 2xl:text-[240px] bg-linear-to-b from-dark/15 to-transparent bg-clip-text text-transparent"
             
             >
                Ahmad Ali
             </h2>

            {/* Bottom row: copyright + links */}
             <div className="-mt-2 pt-6 border-t border-dark/10 flex flex-col-reverse
             items-center gap-4 sm:flex-row sm:justify-between text-sm text-gray-text" >


                <p>© {new Date().getFullYear()} Ahmad Ali. All rights reserved.</p>

                
                <ul className="flex items-center gap-6" >
                        {links.map((link)=>(
                            <li key={link.name} >
                                <a href={link.href} className="hover:text-accent transition duration-300">
                                    {link.name}
                                </a>
                            </li>
                        ))

                        }
                </ul>


             </div>


        </div>



    </footer>


  );
}

export default Footer