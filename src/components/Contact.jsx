import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";


function Contact() {

    // Contact details shown on the left
    const details = [
        { label: "Email:", value: "ahmadali151023@gmail.com" },
        { label: "Phone:", value: "+92 314 4688612" },
        { label: "Location:", value: "Lahore,Pakistan" },
    ];

    const socials = [
        { name: "Github", href: "https://github.com/ahmad-008", icon: FaGithub },
        { name: "LinkedIn", href: "https://www.linkedin.com/in/ahmadali007/", icon: FaLinkedinIn },
        { name: "Email", href: "mailto:ahmadali151023@gmail.com", icon: MdOutlineEmail },
    ];



    return (
        <section
            id='contact'
            className='px-[5vw] py-12 md:py-16'
        >

            {/* Container: 1 column on mobile, 2 columns on large screens */}
            <div className='max-w-[1320px] mx-auto grid gap-10 lg:grid-cols-2 lg:gap-16'>
                {/* Left side */}
                <div>
                    <h2 className='text-[34px] md:text-[50px] lg:text-[65px] font-bold leading-[1.1]' >
                        Get in touch
                    </h2>

                    {/* Details list */}
                    <ul className='mt-8 flex flex-col gap-5' >
                        {details.map((item) => (
                            <li key={item.label} >
                                <p className='text-sm text-gray-text' >{item.label}</p>
                                <p className='mt-1 text-base sm:text-lg font-bold' >{item.value}</p>
                            </li>
                        ))}
                    </ul>

                    {/* Socials */}
                    <p className="mt-8 text-sm text-gray-text" >Follow me</p>
                    <ul className="mt-3 flex items-center gap-3" >
                        {socials.map((social) => {
                            const Icon = social.icon;
                            return (
                                <li key={social.name} >
                                    <a
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={social.name}
                                        className="flex items-center justify-center size-10 rounded-full
                                    bg-dark text-light hover:bg-accent transition duration-300"


                                    >
                                        <Icon />
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>

                {/*Right Side: form */}
                <form className="grid gap-5 sm:grid-cols-2" >

                    {/* Name */}
                    <label className="flex flex-col gap-2 text-sm font-bold" >
                        Your Name
                        <input
                            type="text"
                            name="name"
                            placeholder="Your full name"
                            required
                            className="rounded-xl bg-light-gray px-4 py-3.5 font-normal
                            outline-none focus:ring-2 focus:ring-accent"
                        />

                    </label>


                    {/* Email */}
                    <label className="flex flex-col gap-2 text-sm font-bold" >
                        Email address
                        <input
                            type="email"
                            name="email"
                            placeholder="Your email address"
                            required
                            className="rounded-xl bg-light-gray px-4 py-3.5 font-normal
                            outline-none focus:ring-2 focus:ring-accent"
                        />

                    </label>

                    {/* Message: full width */}
                    <label className="flex flex-col gap-2 text-sm font-bold sm:col-span-2" >
                        Message
                        <textarea
                            name="message"
                            rows="6"
                            placeholder="Write something"
                            required
                            className="resize-none rounded-xl bg-light-gray px-4 py-3.5 font-normal
                            outline-none focus:ring-2 focus:ring-accent"

                        />


                    </label>


                    {/* Submit button: full width */}
                    <button
                        type="submit"
                        className="sm:col-span-2 rounded-xl bg-dark py-4 text-light font-bold
                        hover:bg-accent transition duration-300 cursor-pointer"
                    >

                        Send Message
                    </button>





                </form>



            </div>


        </section>



    );
}

export default Contact;