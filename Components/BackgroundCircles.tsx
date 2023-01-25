import React from 'react';
import { motion } from 'framer-motion';

const BackgroundCircles = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ['20%', '20%', '50%', '80%', '20%'],
      }}
      transition={{ duration: 2.5 }}
      className="relative flex justify-center items-center"
    >
      <div className="absolute border border-[#333333] rounded-full w-[200px] h-[200px] max-sm:h-[120px] max-sm:w-[120px] md:h-[200px] md:w-[200px] mt-52 animate-ping" />
      <div className="rounded-full border border-[#333333] w-[300px] h-[300px] max-sm:h-[240px] max-sm:w-[240px] md:h-[300px] md:w-[300px] absolute mt-52" />
      <div className="rounded-full border border-[#333333] w-[500px] h-[500px] max-sm:h-[360px] max-sm:w-[360px] md:h-[500px] md:w-[500px] absolute mt-52" />
      <div className="rounded-full border border-[#F7AB0A] w-[600px] h-[600px] opacity-20 max-sm:h-[480px] max-sm:w-[480px] md:h-[650px] md:w-[650px] absolute mt-52 animate-pulse" />
      <div className="absolute rounded-full border border-[#333333] opacity-20 max-sm:h-[520px] max-sm:w-[520px] w-[670px] h-[670px] md:h-[800px] md:w-[800px] mt-52" />
    </motion.div>
  );
};

export default BackgroundCircles;
