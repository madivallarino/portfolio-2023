import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import maddyduck from '../pictures/maddyduck.jpg'


type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.div
        initial={{
            x: -200,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{ once: true}}
        className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        >
         <Image src={maddyduck} alt='' style={{objectFit: 'cover'}}/>
        </motion.div>
       
       <div className='space-y-10 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here is a <span className='underline decoration-[#F7AB0A]/50'>little</span> background</h4>

          <p className='text-base'>An entry level software engineer with a tenacity of finding solutions and communicating problems. I excel at working independently on collaborative projects with minimal problems. Eager to work, I continue to spend my time building my knowledge and my craft. I study algorithms, alongside my current pursuit of work.</p>
       </div>

    </motion.div>
  )
}

export default About