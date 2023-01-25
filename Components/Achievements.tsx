import React from 'react';
import { motion } from 'framer-motion';
import Achievements_card from './Achievements_card';
import { Achievements } from '../typing';
type Props = {
  achievements: Achievements[];
};
const Achievement = ({achievements }: Props) => {

  
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{ opacity: 1 }}
      transition={{
        duration: 1.5,
      }}
      className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center"
    >
      <h3 className="absolute top-24 max-sm:text-xl max-sm:tracking-[10px] uppercase tracking-[20px] text-gray-500 text-2xl">
        Achievements
      </h3>
      <div className="w-full md:mt-32   items-center justify-center flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory   scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80  ">
        {achievements?.map((achievement) => (
          <Achievements_card key={achievement._id} achievement={achievement} />
        ))}
      </div>
    </motion.div>
  );
};

export default Achievement;
