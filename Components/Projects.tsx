/* eslint-disable @next/next/no-img-element */

import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../typing';
import { urlFor } from '../sanity';
import Link from 'next/link';
type Props = {
  projects: Project[];
};
const Projects = ({ projects }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen  relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly items-center z-0 "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="mt-20 md:mt-44 relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20   scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 ">
        {projects.map((pro, item) => (
          <div
            key={item}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44  h-screen"
          >
            <motion.img
              // initial={{
              //   y: -300,
              //   opacity: 0,
              // }}
              transition={{
                duration: 1.2,
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(pro?.image).url()}
              alt=""
              className="md:w-[400px]"
            />
            <div className="space-y-3 px-10 md:px-10 max-w-6xl">
              <h4 className="text-base  w-full md:text-4xl font-semibold text-center ">
                <span className="underline decoration-[#F7AB0A]/50  ">
                  Case Study {item + 1} of {projects.length} :
                </span>
                {pro.title}
              </h4>
              <div className="py-4 md:mt-32 flex items-center space-x-2 justify-center">
                {pro.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-8 w-8 md:h-10 md:w-10 rounded-full "
                    src={urlFor(technology.image).url()}
                    alt="technology Name"
                  />
                ))}
              </div>
              <div className="pb-12 w-screen px-4 grid md:grid-cols-2">
                <p className="text-base flex py-2 mx-auto items-center justify-center md:text-lg text-center w-[90%] md:text-left">
                  {pro.summary}
                </p>
                <Link
                  href={pro.linkToBuild}
                  className="text-lg flex py-2 mx-auto items-center justify-center text-center md:text-left"
                >
                  {pro.linkToBuild}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[40%] bg-[#F7AB0A]/10 left-0 h-[350px] -skew-y-12" />
    </motion.div>
  );
};

export default Projects;
