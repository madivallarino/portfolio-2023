import { motion } from "framer-motion"
import Image from "next/image"
type Props = {}

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opaxity duration-200 overflow-hidden">
      
     <motion.div  initial={{ y: -100, opacity: 0}}
        whileInView={{ opacity: 1, y: 0}}
        viewport={{once: true}}
        >
            <Image 
            className="rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
            height={32} width={32} src="https://media.licdn.com/dms/image/C4E0BAQEVMkpCw2CJRA/company-logo_200_200/0/1660576723514?e=2147483647&v=beta&t=O4r6BolMtfUejr-O4p-6w6r1rywD0UZLLdJxXpVHI4c" alt=""/>
        </motion.div>
       <div className="px-0 md:px-10">
          <h4 className="text-4xl font-light">Software Engineer Intern</h4>
          <p className="font-bold text-2xl mt-1">Above & Beyond Studios</p>
          <div className="flex my-2">
            <Image src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" width={70} height={70} />
            <Image src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" width={70} height={70} />
            <Image src="https://www.freepnglogos.com/uploads/javascript-png/javascript-logo-transparent-logo-javascript-images-3.png" alt="" width={70} height={70} />
          </div>
          <p className="uppercase py-5 text-gray-300 ">Started work.. -Ended..</p>

          <ul className="list-disc space-y-4 ml-5 text-lg">
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
            <li>Summary points</li>
          </ul>
       </div>

    </article>
  )
}

export default ExperienceCard