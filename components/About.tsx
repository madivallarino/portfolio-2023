import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import maddyduck from '../pictures/maddyduck.jpg'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'


type Props = {
  pageInfo: PageInfo;
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

        <motion.div
        initial={{
            x: -200,
        }}
        transition={{
            duration: 1.2,
        }}
        whileInView={{opacity: 1, x: 0}}
        viewport={{ once: true}}
        className="-mb-10 md:mb-0 flex-shrink-0 w-40 h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]"
        >
         <img src={urlFor(pageInfo?.profilePic).url()} alt='' style={{objectFit: 'cover'}}/>
        </motion.div>
       
       <div className='space-y-2 px-0 md:px-10'>
          <h4 className='text-4xl font-semibold'>Here is my background:</h4>

          <p className='text-base'>{pageInfo?.backgroundInformation}</p>
       </div>

    </motion.div>
  )
}

export default About