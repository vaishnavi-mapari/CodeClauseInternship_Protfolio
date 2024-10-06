"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col md:flex-row items-center justify-center px-6 md:px-20 mt-20 md:mt-40 w-full z-20"
    >
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center text-center md:text-start">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="flex items-center justify-center md:justify-start py-2 px-4 border border-purple-400/60 bg-opacity-90 rounded-lg"
        >
          <SparklesIcon className="text-purple-300 mr-2 h-5 w-5" />
          <h1 className="text-sm text-purple-100">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="text-4xl md:text-6xl font-bold text-white mt-6 leading-tight"
        >
          <span>
            Providing{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              the best
            </span>{" "}
            project experience.
          </span>
        </motion.div>

        {/* Subtext */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base md:text-lg text-gray-400 mt-4 md:mt-5 max-w-lg mx-auto md:mx-0"
        >
          I&apos;m a Full Stack Software Engineer with experience in Website,
          Mobile, and Software development. Check out my projects and skills.
        </motion.p>

        {/* Call to Action Button */}
        <motion.a
          variants={slideInFromLeft(1)}
          href="#projects"  // Update with your anchor or URL
          className="py-2 px-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white text-center font-medium rounded-lg max-w-xs mx-auto md:mx-0 mt-6"
        >
          Learn more
        </motion.a>
      </div>

      {/* Image Section */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full md:w-1/2 flex justify-center items-center mt-10 md:mt-0"
      >
        <Image
          src="/hero-bg.svg"
          alt="work icons"
          height={650}
          width={650}
          draggable={false}
          className="select-none"
        />
      </motion.div>
    </motion.div>
  );
};
