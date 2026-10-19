import InfiniteMenu from "./InfiniteMenu";


// Projects shown on the sphere
const projects = [
    {
        image: "/projects/one-pager.png",
        link: "https://one-pager-brown.vercel.app/",
        title: "One Pager",
        description: "Company website with login, signup and contact, built on the MERN stack.",
    },
    {
        image: "/projects/study-ally.png",
        link: "https://mystudyally.com/",
        title: "My Study Ally",
        description: "Tutoring agency website with secure, rate-limited forms. Built with Next.js.",
    },
    {
        image: "/projects/freelancer-crm.png",
        link: "https://freelancercrmbd.vercel.app/",
        title: "Freelancer CRM",
        description: "Dashboard for freelancers to manage leads, revenue and proposals.",
    },
];



function Projects() {
    return (

        <section id='projects' className=' py-16 lg:py-24' >



            {/* Section label */}
            <div className='px-[5vw]'>
                <div className='max-w-[1320px] mx-auto' >

                    <span className='inline-block px-3 py-1 border border-dark/10 text-xs
            font-bold uppercase tracking-wider' >
                        Projects
                    </span>

                </div>
            </div>

            {/* Full-screen sphere area */}
            <div className='relative mt-8 w-full h-[75svh] lg:h-svh bg-dark' >
                
                <InfiniteMenu
                    items={projects}
                    theme="dark"
                    accentColor="#ff5c00"
                    autoplay={3}
                    grayscale={true}
                    dim={0.5}
                />



            </div>



        </section>


    );
}

export default Projects;