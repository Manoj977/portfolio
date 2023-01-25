import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typing';
import { urlFor } from '../sanity';
type Props = {
  skill: Skill;
  directionLeft?: boolean;
};
const Skill = ({ skill, directionLeft }: Props) => {
  return (
    <div className="group relative flex cursor-pointer top-14">
      <motion.img
        initial={{
          x: 0,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ opacity: 1, x: 0 }}
        src={urlFor(skill.image).url()}
        className="rounded-full border border-gray-500 object-cover p-5 w-24 max-sm:w-16 h-24 max-sm:h-16 md:w-24 md:h-24 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
      />
      <div className="absolute opacity-0 group-hover:opacity-80 transistion duration-300 ease-in-out group-hover:bg-white h-16 w-16 md:w-24 md:h-24 xl:w-32 xl:h-32 rounded-full z-0">
        <div className="flex items-center justify-center h-full">
          <div className="text-3xl font-bold text-black opacity-100 ">
            <p>{skill.progress}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
