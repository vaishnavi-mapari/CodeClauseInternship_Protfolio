"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen w-full h-full bg-gradient-to-br from-[#0f2027] via-[#203a43] to-[#2c5364]">
      {/* Top text animation */}
      <div className="absolute top-0 z-10 w-full flex justify-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={slideInFromTop}
          className="text-3xl md:text-5xl font-medium text-center text-blue-200"
        >
          Performance{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-teal-400">
            &amp;
          </span>{" "}
          Security
        </motion.div>
      </div>

      {/* Lock animation */}
      <div className="flex flex-col items-center justify-center absolute top-1/2 transform -translate-y-1/2 z-20">
        <div className="flex flex-col items-center group cursor-pointer">
          <Image
            src="/lock-top.png"
            alt="Lock top"
            width={50}
            height={50}
            className="transition-transform duration-300 group-hover:translate-y-6"
          />
          <Image
            src="/lock-main.png"
            alt="Lock main"
            width={70}
            height={70}
            className="z-10"
          />
        </div>

        <div className="border border-teal-400/60 bg-opacity-90 px-4 py-1 mt-5 rounded-md z-20">
          <h1 className="text-xs text-teal-100">Encryption</h1>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-10 z-20 px-4 text-center">
        <div className="text-lg md:text-xl font-medium text-teal-200">
          Secure your data with end-to-end encryption.
        </div>
      </div>

      {/* Background video */}
      <div className="absolute inset-0 z-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          loop
          muted
          autoPlay
          playsInline
          preload="auto"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
};
