/* eslint-disable @next/next/no-img-element */

import { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../Components/About';
import Achievement from '../Components/Achievements';
import ContactMe from '../Components/ContactMe';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import Projects from '../Components/Projects';
import Skills from '../Components/Skills';
import { Achievements, PageInfo, Project, Skill, Social } from '../typing';
import { fetchAchievements } from '../utility/fetchAchievements';
import { fetchpageInfo } from '../utility/fetchPageInfo';
import { fetchprojects } from '../utility/fetchProjects';
import { fetchSkills } from '../utility/fetchSkills';
import { fetchSocials } from '../utility/fetchSocials';
type Props = {
  pageInfo: PageInfo;
  achievements: Achievements[];
  skills: Skill[];
  projects: Project[];
  socials: Social[];
};

const Home: NextPage<Props> = ({
  pageInfo,
  achievements,
  skills,
  socials,
  projects,
}: Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>{pageInfo.name} Portfolio </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon1.ico" />
      </Head>
      <Header socials={socials} />
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="achievements" className="snap-center">
        <Achievement achievements={achievements} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 ml-[1090px]  cursor-pointer ">
          <div className="flex items-center justify-center">
            <img
              className="w-10 h-10 p-1 bg-slate-300 rounded-full cursor-pointer filter grayscale hover:grayscale-0"
              src="/favicon.ico"
              alt=""
            />
          </div>
        </footer>
      </Link>
    </div>
  );
};
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchpageInfo();
  const achievements: Achievements[] = await fetchAchievements();
  const socials: Social[] = await fetchSocials();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchprojects();
  return {
    props: {
      pageInfo,
      achievements,
      socials,
      skills,
      projects,
    },
    revalidate: 10,
  };
};
