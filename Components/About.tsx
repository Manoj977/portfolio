import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../sanity';
import { PageInfo } from '../typing';
type Props = {
  pageInfo: PageInfo;
};
const About = ({ pageInfo }: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 max-sm: uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        viewport={{ once: true }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{
          duration: 1.2,
        }}
        src={urlFor(pageInfo?.profilePic).url()}
        className="-mb-20 mt-12 md:mb-0 flex-shrink-0 w-40 h-40   rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[300px] xl:h-[400px] bg-gray-200  p-5 max-sm:w-40 max-sm:h-40 max-sm:mt-24 
        "
      />
      <div className="space-y-10  md:px-10 max-sm:mt-[40px] mb-6">
        <h4 className="text-2xl md:text-4xl font-semibold ">
          Here is a{' '}
          <span className="underline decoration-[#F7AB0A]/50">Little</span>{' '}
          Background
        </h4>
        <p className="text-base">{pageInfo?.backgroundInformation}</p>
      </div>
    </motion.div>
  );
};

export default About;
