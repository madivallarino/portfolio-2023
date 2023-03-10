import Image from "next/image"
import { motion } from "framer-motion"
import { Project } from "@/typings"
import { urlFor } from "@/sanity";
import Link from "next/link";

type Props = {
    projects: Project[];
}

function Projects({ projects }: Props) {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1.5}}
    className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#D1B7F5]/80 scrollbar-thin">
            {projects?.map((project, i)=> (
                <div key={i} className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                    <motion.div
                    initial={{
                        y: -300,
                        opacity: 0
                    }}
                    transition={{ duration: 1.2}}
                    whileInView={{ opacity: 1, y: 0}}
                    viewport={{ once: true}}
                    >
                        <Image src={urlFor(project?.image).url()} alt="" width={300} height={300}/>
                    </motion.div>

                    <div className="space-y-2 px-0 md:px-10 max-w-6xl">
                        <h4 className="text-4xl font-semibold text-center">
                            <span className="underline decoration-[#050500]/50 text-lg">{i + 1} of {projects?.length} Projects:     </span>    
                        </h4>
                        <h4 className="text-4xl font-semibold text-center">{project?.title}</h4>

                        <p className="text-sm text-center md:text-left">
                            {project?.summary}
                        </p>
                        <p className="text-[#D1B7F5] text-center">
                        <Link href={project?.linkToBuild} >
                            Click Here To Check Out The Build!
                        </Link>
                        </p>
                       
                     </div>
                </div>
            ))}
        </div>
        <div className="w-full absolute top-[30%] bg-[#D1B7F5]/10 left-0 h-[500px] -skew-y-12"/>
    </motion.div>
  )
}

export default Projects