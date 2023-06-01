import { motion } from "framer-motion";
import { useState } from "react";

export default function ResumeButton() {
  const [buttonText, setButtonText] = useState("Download Resumé");
  const [showDownload, setShowDownload] = useState(true);

  function handleClick() {
    setButtonText("Thanks!");
    setTimeout(() => {
      setButtonText("Download Resumé");
    }, 2000);
  }

  return (
    // <div className="mx-0 z-999 w-48 h-12 hover:bg-black hover:border-white hover:border hover:border-1 z-50 rounded-lg cursor-pointer text-center flex items-center justify-center ">
    <a href="./BeckAskenaizerResume_2023.docx" download={"./BeckAskenaizerResume_2023.docx"}>
      <motion.button
        onClick={() => handleClick()}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
        className="w-48 h-12 outline-2 border-2 border-white flex justify-center items-center hover:text-red rounded-xl mt-12"
      >
        {buttonText}
      </motion.button>
    </a>
    // </div>
  );
}
