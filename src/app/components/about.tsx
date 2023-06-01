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
import UilGithub from "@iconscout/react-unicons/icons/uil-github";
import UilLinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";

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
      className="relative mt-96 pt-48 h-screen flex flex-col bg-red-00"
    >
      {/* <div className="mt-44 border-white"> */}
      <h1
        //   style={{ fontFamily: "ClashDisplay-Medium" }}
        className=" text-left mx-auto max-w-4xl font-display text-6xl font-medium tracking-normal text-white sm:text-5xl"
      >
        About Me
      </h1>
      <div className="flex flex-row mt-12 mx-48">
        <div>
          <span className="w-96 h-96 absolute bg-slate-500 translate-x-44 ml-2 -translate-y-0 mb-4 z-0" />
          <Image
            unoptimized
            alt="portrait"
            src="/me.jpg"
            width={300}
            height={300}
            className="mt-2 w-96 h-96 object-cover mx-48 z-5 drop-shadow-lg"
          />
        </div>
        {/* <div className="absolute top-0 bg-slate-800 h-screen w-1/2 z-999" /> */}
        <div className="flex flex-col">

          <h2 className="text-left mt-8 max-w-xl bg-slate text-lg sm:text-white leading-7 z-5">
            My name is William Beck-Askenaizer, and I'm a full-stack software
            engineer! I love to build things. I'm constantly chasing the feeling
            of getting absorbed into a project, and I'm always looking for new
            technologies to learn.
          </h2>
          <h2 className="mt-4 text-left max-w-xl text-lg z-5">
            Outside of programming, I love traveling with my wife, hiking,
            playing Overwatch, and getting together with friends for board
            games!
          </h2>
          {/* <span className="w-96 h-96 absolute bg-slate-500 translate-x-44 ml-2 -translate-y-0 mb-4 z-1" /> */}
          <div className="flex flex-row">
            <a
              className="h-12 w-12 mx-4"
              href="https://github.com/williambeckaskenaizer"
            >
              <UilGithub className="w-12 h-12 mt-36 mr-6" />
            </a>
            <a
              className="h-12 w-12 mx-4"
              href="https://www.linkedin.com/in/william-beck-askenaizer/"
            >
              <UilLinkedIn className="w-12 h-12 mt-36" />
            </a>
          </div>
        </div>
        {/* </div> */}
      </div>
      <p className="absolute bottom-8 -translate-x-3 text-zinc-400 left-1/2 w-8 h-8">
        Projects
      </p>
      <ChevronDownIcon className="absolute bottom-1 left-1/2 w-8 h-8 animate-bounce" />
    </div>
    // </motion.section>
  );
}

export default About;
