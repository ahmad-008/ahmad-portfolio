import { RxArrowTopRight, RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useState } from "react";



function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Home", href: "#home" },
        { name: "About", href: "#about" },
        { name: "Skills", href: "#skills" },
        { name: "Projects", href: "#projects" },
        { name: "Contact", href: "#contact" },
    ];


    return (
        <header className="relative border-b border-dark/10">

            <nav className='flex items-center justify-between' >
                {/* Logo cell */}
                <a
                    href='#home'
                    className='flex items-center h-[73px] xl:h-[103px] 
                    w-[150px] xl:w-[212px] ml-[5vw]
                    xl:border-r xl:border-dark/10 
                    text-[28px] xl:text-[32px] font-bold'
                >
                    Ahm<span className='text-accent' >a</span>d
                </a>


                {/* Links */}
                <ul className="hidden lg:flex items-center gap-[14px]" >
                    {links.map((link) => (

                        <li key={link.name} >
                            <a
                                href={link.href}
                                className="block py-4 px-1 xl:px-2.5
                                2xl:px-4 text-sm 2xl:text-base font-bold
                                capitalize leading-[1.62] hover:text-accent transition"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))
                    }
                </ul>

                {/* Right Side */}
                <div className="flex items-center self-stretch lg:mr-[5vw] xl:mr-0" >
                    <a
                        href="#contact"
                        className="hidden xl:flex items-center gap-2 self-stretch 
                        px-10 border-l border-dark/10 text-base font-bold
                        capitalize leading-[1.62] hover:text-accent 
                        transition duration-400"
                    >
                        Let's Talk
                        <RxArrowTopRight />
                    </a>

                    {/* Menu button - mobile only */}

                    <button
                        type="button"
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                        aria-expanded={isOpen}
                        onClick={() => setIsOpen(!isOpen)}
                        className="lg:hidden flex items-center
                        justify-center w-[60px] h-[73px] bg-dark cursor-pointer"

                    >
                        {isOpen ? (
                            <RxCross2 className="text-white text-[25px]" />
                        ) : (
                            <RxHamburgerMenu
                                className="text-white text-[25px]"
                            />
                        )}

                    </button>
                </div>
            </nav>

            {/* Mobile menu */}

            {isOpen && (

                <ul className="lg:hidden absolute top-full left-0
                w-full bg-light p-[15px] border-b
                border-dark/10 shadow-lg" >
                    {links.map((link)=>(
                        <li key={link.name} className="border-b p-[15px] border-dark/10
                        last:border-b-0" >
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="block px-2.5 pt-2 pb-1.5 text-sm
                                font-bold capitalize hover:text-accent transition"
                            >
                                {link.name}
                            </a>
                        </li>

                    ))



                    }

                </ul>






            )}

        </header>
    );
}

export default Navbar;