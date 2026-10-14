

function Hero() {
  return (
    <section id="#home" className="relative overflow-hidden px-[5vw]
    pt-5 xl:pt-20" >

        {/* Greeting */}
        <div className="flex items-center gap-2" >
            <h6 className="text-base sm:text-xl font-bold leading-[1.3]" >Hi there!</h6>
            <span className="text-xl" aria-hidden="true">👋</span>
            <h6 className="text-base sm:text-xl font-bold leading-[1.3]">I'm</h6>
        </div>

        {/* Name */}
        <h1 className="mt-1 md:mt-6 -ml-1 text-[44px] md:text[50px]
        lg:text-[65px] xl:text-[80px] 2xl:text-[92px] 
        font-bold leading-[1.1]" >
            Ahmad Ali
        </h1>

    </section>



  );
}

export default Hero