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
    <motion.div whileHover={{ scale: 1.1 }} className="drop-shadow-lg my-4 font-Bold p-4 h-80 w-64 justify-center text-center rounded-xl border-white border-1 border bg-zinc-900 mx-4">
      <div className="flex flex-row items-end">
        <img className="w-12 h-12 mx-4" src={image} />
        <h1 className="font-medium">{title}</h1>
      </div>
      <div className="mt-10 mb-6 h-24">
        <p className="font-light text-left">{description}</p>
      </div>
      <div className="w-6 h-6 flex flex-row">
        {github && (
          <a className="w-6 h-6 mx-1" href={github} target="_blank">
            <FaGit />
          </a>
        )}
        {link && (
          <a className="w-6 h-6 mx-1" href={link} target="_blank">
            <FaLink />
          </a>
        )}
      </div>
      <div className="mt-6 w-56 text-zinc-400 text-ellipsis text-left text-xs h-12 bg-red-00 flex object-contain">
        {tech.join(", ")}
      </div>
    </motion.div>
  );
}
