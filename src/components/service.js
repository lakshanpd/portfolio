import { HiArrowDownRight } from "react-icons/hi2";
import { useState } from "react";
import { motion } from "framer-motion";

function Service(props) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  return (
    <motion.div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex flex-col overflow-hidden max-w-md bg-darkBlue shadow-3xl p-8 text-white font-mono hover:text-green-400 transition duration-500 ease-in-out hover:cursor-pointer "
      initial={{ opacity: 0, y: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: props.delay,
      }}
      //   exit={{ y: "-100%" }}
    >
      <div className="flex justify-between">
        <div className="text-4xl font-bold">{props.number}</div>
        <div
          className={`flex  items-center p-3 rounded-full  ${
            isHovered ? " bg-green-400" : "bg-white"
          } hover:rotate-[-45deg] transition duration-500`}
        >
          <HiArrowDownRight color="black" size={18} />
        </div>
      </div>

      <div className="h-1"></div>
      <div className="font-bold text-3xl">{props.skill}</div>
      <div className="h-2"></div>
      <div className="text-sm text-white opacity-70">{props.description}</div>
    </motion.div>
  );
}

export default Service;
