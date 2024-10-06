"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <motion.div
        variants={slideInFromTop}
        initial="hidden"
        animate="visible"
        className="flex items-center py-2 px-3 border border-purple-400/70 bg-opacity-90 rounded-md"
      >
        <SparklesIcon className="text-purple-300 mr-2 h-5 w-5" />
        <h1 className="text-sm text-purple-100">
          Think better with Next.js
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        initial="hidden"
        animate="visible"
        className="text-3xl font-medium text-white mt-4 mb-6 text-center"
      >
        Building apps with cutting-edge technologies.
      </motion.div>

      <motion.div
        variants={slideInFromRight(0.5)}
        initial="hidden"
        animate="visible"
        className="text-lg text-gray-300 font-light text-center"
      >
        Stay on top of your tasks, deadlines, and ideas effortlessly.
      </motion.div>
    </div>
  );
};
