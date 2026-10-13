import { RxArrowTopRight } from "react-icons/rx";

function Navbar() {

    const links = [
        {name: "Home" , href: "#"},
        {name:"About", href:"#about"},
        {name: "Skills" , href: "#skills"},
        {name:"Projects", href:"#projects"},
        {name:"Contact", href:"#contaxt"},
    ];


  return (
        <header className="border-b border-dark/10">
           
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
                    {links.map((link)=>(
                        
                        <li key={link.name} >
                            <a 
                                href={link.href}
                                className="block py-4 px-1 xl:px-2.5
                                2xl:px-4 text-sm 2xl:text-base font-bold
                                captilize leading-[1.62] hover:text-accent transition" 
                            >
                                {link.name}
                            </a>
                        </li>
                    ))
                    }
                </ul>    

                {/* Right Side */}
                <div className="flex items-center self-stretch" >
                    <a
                        href="#contact"
                        className="hidden xl:flex items-center gap-2 self-stretch 
                        px-10 border-l border-dark/10 text-base font-bold
                        captalize leading-[1.62] hover:text-accent 
                        transition duration-400"
                    >
                        Let's Talk 
                        <RxArrowTopRight/>
                    </a>
                </div>


            </nav>

        </header>
  );
}

export default Navbar;