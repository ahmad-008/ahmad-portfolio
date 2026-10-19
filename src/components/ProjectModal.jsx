import { RxCross2, RxArrowTopRight } from "react-icons/rx";
import { FaGithub } from "react-icons/fa";
import { MdCheck } from "react-icons/md";
import { useEffect } from "react";





function ProjectModal({ project, onClose }) {

    useEffect(()=>{
        document.body.style.overflow = "hidden";

        return () =>{
            document.body.style.overflow = "";
        };
    }, []);

    return (

        // Dark overlay (click outside the box to close)
        <div onClick={onClose}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/70 p-4"
        >

            {/* Popup box */}
            <div
                onClick={(e) => e.stopPropagation()}
                role="dialog"
                aria-modal='true'
                aria-label={project.title}
                className="relative w-full max-w-[720px] max-h-[90svh] overflow-y-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
                 bg-light
                rounded-[20px] p-5 sm:p-8"

            >

                {/* Close button */}
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absilute top-4 right-4 flex items-center justify-center size-10 rounded-full
                    bg-light-gray hover:bg-dark hover:text-light transition duration-300"

                >
                    <RxCross2 />
                </button>

                {/* Screenshot */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full aspect-video object-cover object-top rounded-[14px]"
                />

                {/* Title and description */}
                <h3 className="mt-6 text-2xl sm:text-[32px] font-bold leading-tight" >{project.title}</h3>
                <p className="mt-3 text-gray-text leading-relaxed" >{project.description}</p>


                {/* Tech tags */}
                <ul className="flex flex-wrap gap-2 mt-5">
                    {project.tech.map((item) => (
                        <li key={item} className="px-3 py-1 rounded-full bg-light-gray text-sm font-bold" >
                            {item}
                        </li>
                    ))}
                </ul>

                {/* Features */}
                <ul className="mt-6 space-y-3" >
                    {project.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3" >
                            <MdCheck className="mt-1 shrink-0 text-accent" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Links */}
                <div className="flex flex-wrap gap-3 mt-8" >
                    <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferre"
                        className="inline-flex items-center gap-2 py-3 px-6 rounded-full bg-dark text-light text-sm font-bold hover:bg-accent transition duration-300"

                    >
                        Live Site <RxArrowTopRight />

                    </a>
                    {project.githubUrl && (
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 py-3 px-6 rounded-full border border-dark text-sm font-bold hover:bg-dark hover:text-light transition duration-300"
                        >
                            <FaGithub /> Github
                        </a>
                    )}


                </div>



            </div>




        </div>



    );
}

export default ProjectModal;