import { urlFor } from "@/sanity";
import { Experience } from "@/typings"
import { motion } from "framer-motion"
import Image from "next/image"
type Props = {
  experience: Experience;
}

function ExperienceCard({ experience }: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opaxity duration-200 overflow-hidden">
      
     <motion.div  initial={{ y: -100, opacity: 0}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true}}
        >
            <Image 
            className="rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            height={32} width={32} src={urlFor(experience?.companyImage).url()} alt=""/>
        </motion.div>
       <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">{experience?.jobTitle}</h4>
          <p className="font-bold text-2xl mt-1">Above & Beyond Studios</p>
          <div className="flex space-x-2 my-2">
            {experience.technologies.map(technology => (
              <Image 
                key={technology._id}
                className='rounded-full'
                alt=""
                height={70}
                width={70}
                src={urlFor(technology.image).url()}
              />
            ))}
          </div>
          <p className="uppercase py-5 text-gray-300 ">
            {new Date(experience.dateStarted).toDateString()} - {experience.    isCurrentlyWorkingHere ? "Present" : 
              new Date(experience.dateEnded).toDateString()
            }
          </p>

          <ul className="list-disc space-y-4 ml-5 text-lg">
            {experience.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
       </div>

    </article>
  )
}

export default ExperienceCard