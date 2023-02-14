import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import type { GetStaticProps, NextPage } from 'next'
import { Experience, PageInfo, Skill, Project, Social } from '@/typings'
import { fetchPageInfo } from '@/utilis/fetchPageInfo'
import { fetchExperiences } from '@/utilis/fetchExperiences'
import { fetchSkills } from '@/utilis/fetchSkills'
import { fetchProjects } from '@/utilis/fetchProjects'
import { fetchSocials } from '@/utilis/fetchSocials'

type PageProps = {
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
}

export default function Home({ pageInfo, experiences, skills, projects, socials} : PageProps) {
 // 

// 
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-auto overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#D1B7F5]/80'>
      <Head>
        <title>Portfolio 2023</title>
      </Head>

     
     <h1>Hewo</h1>
      <Header socials={socials} />

      {/* Hero  */}
      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>
      {/* About */}
      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>
      {/* Experiences */}
      <section id="experience" className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills */}
      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="projects" className='snap-start'>
        <Projects projects={projects} />
      </section>

      {/* Contact Me */}
      <section id="contact" className='snap-start'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image 
            className='rounded-full filter grayscale hover:grayscale-0'
            src="https://miro.medium.com/max/2400/1*j8oct7dLeIL8Ruw69NfcrA.jpeg" alt="" height={25} width={25}/>
          </div>
        </footer>
      </Link>
    </div>
  )
}



export const getServerSideProps: GetStaticProps = async () => {

    const experiences: Experience[] = await fetchExperiences();
    const skills: Skill[] = await fetchSkills();
    const projects: Project[] = await fetchProjects();
    const socials: Social[] = await fetchSocials();
    const pageInfo: PageInfo = await fetchPageInfo();


    return {
      props: {
        pageInfo,
        experiences,
        skills,
        socials,
        projects,
      }
    };
}
