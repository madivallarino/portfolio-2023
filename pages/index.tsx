import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'
import Image from 'next/image'




export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>Portfolio 2023</title>
      </Head>
    
     
      <Header />
      {/* Hero  */}
      <section id="hero" className='snap-start'>
        <Hero />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About />
      </section>
      {/* Experiences */}
      <section id="experience" className='snap-center'>
        <WorkExperience />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills />
      </section>

      <section id="projects" className='snap-start'>
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}
