import { FaGit } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

interface Props {
  title: string;
  description: string;
  image: string;
  link: string | null;
  github: string | null;
  tech: string[];
}

export default function Project({
  title,
  description,
  image,
  link,
  github,
  tech,
}: Props) {
  return (
    <motion.div whileHover={{ scale: 1.1 }} className="drop-shadow-lg my-4 mb-8 font-Bold p-4 h-56 w-40 sm:h-60 sm:w-48 md:h-64 md:w-56 lg:h-64 lg:w-56 justify-center text-center rounded-xl border-white border-1 border bg-zinc-900 mx-2 sm:mx-4">
      <div className="flex flex-row items-end">
        <img className="w-10 h-10 sm:w-12 sm:h-12 mx-2 sm:mx-4" src={image} />
        <h1 className="font-medium text-sm sm:text-base text-white">{title}</h1>
      </div>
      <div className="mt-8 sm:mt-10 mb-4 sm:mb-6 h-20 sm:h-24">
        <p className="font-light text-left text-xs sm:text-sm text-white">{description}</p>
      </div>
      <div className="w-6 h-6 flex flex-row">
        {github && (
          <a className="w-5 h-5 sm:w-6 sm:h-6 mx-1" href={github} target="_blank">
            <FaGit className="text-white" />
          </a>
        )}
        {link && (
          <a className="w-5 h-5 sm:w-6 sm:h-6 mx-1" href={link} target="_blank">
            <FaLink className="text-white" />
          </a>
        )}
      </div>
      <div className="mt-4 sm:mt-6 w-40 sm:w-56 text-zinc-400 text-ellipsis text-left text-xs h-12 bg-red-00 flex object-contain">
        {tech.join(", ")}
      </div>
    </motion.div>
  );
}
