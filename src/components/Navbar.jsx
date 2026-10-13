import React from 'react'

function Navbar() {
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
            </nav>

        </header>
  );
}

export default Navbar;