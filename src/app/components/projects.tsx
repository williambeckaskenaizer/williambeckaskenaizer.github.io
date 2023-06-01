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
  useInView,
} from "framer-motion";
import Project from "./project";

interface Props {
  children?: React.ReactNode;
}

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

const projects = [
  {
    title: "Latent Labs",
    description: "An AI Design Tool for Non-Designers",
    image:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/typescript/typescript.png",
    link: "https://latentlabs.art/",
    github: null,
    tech: [
      "React",
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "Framer Motion",
      "Postgres",
    ],
  },
  {
    title: "Reimagine Bot",
    description: "A Discord bot allowing users to generate 3D Meshes using AI",
    image:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
    link: "https://discord.gg/CZRVT49naa",
    github: null,
    tech: [
      "Python",
      "Discord.py",
      "PyTorch",
      "Replicate",
      "OCI Cloud",
      "Postgres",
    ],
  },
  {
    title: "Audiofrog",
    description:
      "A music streaming discord bot using a Lavalink server and PyCord",
    image:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
    link: null,
    github: "https://github.com/williambeckaskenaizer/AudioFrog",
    tech: ["Python", "Wavelink", "Lavalink", "PyCord"],
  },
  {
    title: "Addmeon",
    description: "An Android app for sharing social media profiles",
    image:
      "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/java/java.png",
    link: null,
    github: "https://github.com/williambeckaskenaizer/Addmeon",
    tech: ["Java", "Gradle", "Android Studio"],
  },
  {
    title: "Geocode Script",
    description: "A Python script for geocoding addresses to assist in data analysis",
    image: "https://cdn.jsdelivr.net/npm/programming-languages-logos/src/python/python.png",
    link: null,
    github: "https://github.com/williambeckaskenaizer/wqts-geocode-script",
    tech: ["Python", "Pandas", "Geopy", "ArcGis"],
  }
];

const projectVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 4,
      staggerChildren: 0.2,
    },
  },
};

const variant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
  },
};

function Projects({ children }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    // <motion.section className="bg-red-900 w-screen h-screen flex flex-col text-center text-white">
    <div id="projects" className="mt-48 z-10 h-screen flex flex-col items-center bg-red-00">
      <h1
        //   style={{ fontFamily: "ClashDisplay-Medium" }}
        className="mt-44 mx-auto max-w-4xl font-display text-6xl font-medium tracking-normal text-white sm:text-5xl"
      >
        Projects
      </h1>
      <div className="flex flex-col mt-12 justify-center items-center">
        <h2 className="mt-8 mx-24 max-w-xl text-center text-lg sm:text-white leading-7 mb-24">
          I love to build things. I'm always looking for new projects to dig
          into, and I love making things that people like using! Check out some of my work below.
        </h2>
        <motion.div
          ref={ref}
          style={{
            transform: isInView ? "none" : "translateY(100px)",
            opacity: isInView ? 1 : 0,
            transition: "0.05s cubic-bezier(0.17, 0.17, 0.17, 0.17) 0.05s",
          }}
          variants={projectVariants}
          initial="hidden"
          animate={["visible"]}
          className="md:flex md:flex-row sm:grid sm:grid-cols-2"
        >
          {projects.map((p) => {
            return (
              <motion.div variants={variant} key={p.title + "-" + p.description}>
                <Project
                  title={p.title}
                  description={p.description}
                  image={p.image}
                  link={p.link}
                  github={p.github}
                  tech={p.tech}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
    // </motion.section>
  );
}

export default Projects;
