import Image from 'next/image'
import Link from 'next/link'
import { Cursor, Typewriter, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import { PageInfo } from '@/typings'
import { urlFor } from '@/sanity'

type Props = {
    pageInfo: PageInfo;
}

function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: ["Developer", "Creator", "Home Cook"],
        loop: true,
        delaySpeed: 2000,
    })

    
    
    
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
       
        
        <Image src={urlFor(pageInfo?.heroImage).url()} width={100} height={100} className="relative rounded-full mx-auto object-cover" alt="" />

        <div className="z-20">
            <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">{pageInfo?.name}</h2>
            <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                <span className='mr-3'>{text}</span>
                <Cursor cursorColor='#D1B7F5'/>
            </h1>

            <div className='pt-5'>
                <Link href="#about">
                     <button className='heroButton'>About</button>
                </Link>
                <Link href="#experience">
                     <button className='heroButton'>Experience</button>
                </Link>
                <Link href="#skills">
                     <button className='heroButton'>Skills</button>
                </Link>
                <Link href="#projects">
                     <button className='heroButton'>Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Hero