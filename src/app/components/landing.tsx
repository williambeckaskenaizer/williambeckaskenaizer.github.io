import React, { useRef } from "react";
import Image from "next/image";
import ResumeButton from "./resume-button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

interface Props {
  children?: React.ReactNode;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Landing({ children }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    // <motion.section className="bg-red-900 w-screen h-screen flex flex-col text-center text-white">
    <motion.div
      id="hello"
      ref={targetRef}
      className="z-10 h-screen flex flex-col items-center bg-red-00"
    >
      <h1
        //   style={{ fontFamily: "ClashDisplay-Medium" }}
        className="mt-48 mx-auto max-w-4xl font-display text-6xl font-bold tracking-normal text-white sm:text-5xl"
      >
        Hey There!
      </h1>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-center mb-20 mt-8 mx-24 max-w-xl text-lg sm:text-white leading-7">
          I'm Will, and I'm a full-stack software engineer! Thank you for
          visiting my site.
        </h2>
        <ResumeButton />
      </div>
      <p className="absolute bottom-8 -translate-x-1 text-zinc-400 left-1/2 w-8 h-8">About</p>
      <ChevronDownIcon className="absolute bottom-1 left-1/2 w-8 h-8 animate-bounce" />
    </motion.div>
    // </motion.section>
  );
}

export default Landing;
