import React, { useRef } from "react";
import ResumeButton from "./resume-button";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { FaLinkedin } from "react-icons/fa";
import { FaGit } from "react-icons/fa";

interface Props {
  children?: React.ReactNode;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function About({ children }: Props) {
  const targetRef = useRef<HTMLDivElement>(null);

  return (
    // <motion.section className="bg-red-900 w-screen h-screen flex flex-col text-center text-white">
    <div
      id="about"
      className="relative pt-8 sm:pt-20 min-h-screen flex flex-col bg-red-00 px-4 sm:px-0"
    >
      {/* <div className="mt-44 border-white"> */}
      <h1
        //   style={{ fontFamily: "ClashDisplay-Medium" }}
        className="text-left mx-auto max-w-4xl font-display text-4xl sm:text-5xl lg:text-6xl font-medium tracking-normal text-white"
      >
        About Me
      </h1>
      <div className="flex flex-col lg:flex-row mt-4 sm:mt-8 mx-auto gap-6 sm:gap-12 items-center lg:items-start px-4 sm:px-0">
        <div className="relative flex-shrink-0">
          <span className="w-48 h-48 sm:w-80 lg:w-96 sm:h-80 lg:h-96 absolute bg-slate-500 -translate-x-2 -translate-y-2 z-0" />
          <img
            alt="portrait"
            src="/me.jpg"
            width={300}
            height={300}
            className="w-48 h-48 sm:w-80 lg:w-96 sm:h-80 lg:h-96 object-cover z-5 drop-shadow-lg relative"
          />
        </div>
        {/* <div className="absolute top-0 bg-slate-800 h-screen w-1/2 z-999" /> */}
        <div className="flex flex-col max-w-xl">

          <h2 className="text-left text-base sm:text-lg text-white leading-7 z-5">
            My name is William Beck-Askenaizer, and I'm a full-stack software
            engineer! I love to build things. I'm constantly chasing the feeling
            of getting absorbed into a project, and I'm always looking for new
            technologies to learn.
          </h2>
          <h2 className="mt-4 text-left text-base sm:text-lg text-white z-5">
            Outside of programming, I love traveling with my wife, hiking,
            playing Overwatch, and getting together with friends for board
            games!
          </h2>
          {/* <span className="w-96 h-96 absolute bg-slate-500 translate-x-44 ml-2 -translate-y-0 mb-4 z-1" /> */}
          <div className="flex flex-row mt-6 sm:mt-8">
            <a
              className="h-10 w-10 sm:h-12 sm:w-12 mx-3 sm:mx-4"
              href="https://github.com/williambeckaskenaizer"
            >
              <FaGit className="w-full h-full text-white" />
            </a>
            <a
              className="h-10 w-10 sm:h-12 sm:w-12 mx-3 sm:mx-4"
              href="https://www.linkedin.com/in/william-beck-askenaizer/"
            >
              <FaLinkedin className="w-full h-full text-white" />
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
      <p className="absolute bottom-12 -translate-x-3 text-zinc-400 left-1/2 w-8 h-8 text-xs">
        Projects
      </p>
      <ChevronDownIcon className="absolute bottom-3 left-1/2 w-6 h-6 sm:w-8 sm:h-8 animate-bounce text-white" />
    </div>
    // </motion.section>
  );
}

export default About;
