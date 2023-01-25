/* eslint-disable @next/next/no-img-element */
import { motion } from 'framer-motion';
import React from 'react';
import { urlFor } from '../sanity';
import { Achievements } from '../typing';
type Props = {
  achievement: Achievements;
};
const Achievements_card = ({ achievement }: Props) => {
  return (
    <article className="mt-20 md:mt-32 flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[360px] h-[360px]  max-sm:w-[screen]  max-sm:h-[screen] md:w-[600px] md:h-[500px] xl:w-[900px] xl:h-[screen]  snap-center bg-[#292929] p-10 hover:opacity-100 opacity-10 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.img
        initial={{
          y: -100,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="w-20 h-20 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center "
        src={urlFor(achievement?.image).url()}
        alt="fullstack_icon"
      />
      <div className="px-0 md:px-10 ">
        <h4 className="text-2xl md:text-4xl font-light">
          Java Full Stack Developer
        </h4>
        <p className="font-bold text-2xl"></p>
        <div className="flex space-x-2 my-2 ">
          {achievement.technologies.map((technology) => (
            <img
              key={technology._id}
              className="h-10 w-10  rounded-full "
              src={urlFor(technology.image).url()}
              alt="technology Name"
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-500 ">
          {new Date(achievement.dateStarted).toDateString()}-
          {achievement.isCurrentlyCompleted
            ? new Date(achievement.dateEnded).toDateString()
            : 'Present'}
        </p>

        <ul className="list-disc space-y-4 ml-5 text-lg max-h-96  scrollbar-thin  scrollbar-track-black scrollbar-thumb-[#F7AB0A]/80">
          {achievement.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default Achievements_card;
