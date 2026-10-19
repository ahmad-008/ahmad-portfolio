import InfiniteMenu from "./InfiniteMenu";
import { useState } from "react";


// Projects: sphere shows image, title, description. Popup shows everything.
const projects = [
    {
        image: "/projects/one-pager.png",
        liveUrl: "https://one-pager-brown.vercel.app/",
        title: "One Pager",
        description: "Company website with login, signup and contact, built on the MERN stack.",
        githubUrl: "",
        tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        features: [
            "User signup and login",
            "Contact form saved to the database",
            "Backend built with MVC architecture",
            "Fully responsive design",
        ],
    },
    {
        image: "/projects/study-ally.png",
        liveUrl: "https://mystudyally.com/",
        title: "My Study Ally",
        description: "Tutoring agency website with secure, rate-limited forms. Built with Next.js.",
        githubUrl: "",
        tech: ["React", "Next.js", "Tailwind CSS", "Shadcn UI", "Cloudflare", "Express", "Node.js"],
        features: [
            "Cloudflare-protected forms",
            "IP rate limiting",
            "Fully responsive design"
        ],
    },
    {
        image: "/projects/freelancer-crm.png",
        liveUrl: "https://freelancercrmbd.vercel.app/",
        title: "Freelancer CRM",
        description: "Dashboard for freelancers to manage leads, revenue and proposals.",
        githubUrl: "",
        tech: ["Next.js", "React", "Tailwind CSS", "Radix UI", "Node.js", "Supabase"],
        features: [
            "Lead and follow-up tracking",
            "Revenue dashboard",
            "Proposal pipeline",
            "PDF and CSV export",
        ],
    },
];



function Projects() {

    const [selectedProject, setSelectedProject] = useState(null);

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
                    onItemClick={(project) => setSelectedProject(project)}
                />



            </div>

            {/* Project popup (temporary test) */}
            {selectedProject && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/70" >
                    <div className="bg-light p-8 rounded-[20px]" >
                        <h3 className="text-2xl font-bold" >
                            {selectedProject.title}
                        </h3>

                        <button onClick={() => setSelectedProject(null)} className="mt-4 underline" >
                            Close
                        </button>
                    </div>
                </div>





            )




            }



        </section>


    );
}

export default Projects;