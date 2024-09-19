import numeral from "numeral";
import { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { HiArrowDownRight } from "react-icons/hi2";
import { SlArrowLeft } from "react-icons/sl";
import { SlArrowRight } from "react-icons/sl";
import { motion } from "framer-motion";

function WorkDetail() {
  const [count, setCount] = useState(0);
  //   const [direction, setDirection] = useState("right");

  const projects = [
    {
      id: 1,
      title: "Frontend Project",
      description:
        "I am happy to show my front end project. This is my first project. I worked with 2 others for successfully finished this",
      technologies: "React JS, Tailwind CSS, github pages",
      link: "/test.png",
      img: "/test3.jpg",
    },
    {
      id: 2,
      title: "Full Stack Project",
      description:
        "This project is a collaborative effort to create an admin dashboard. I focused on implementing responsive layouts and dynamic data visualization.",
      technologies: "React JS, MongoDB, Chart.js",
      link: "/test2.png",
      img: "/test2.png",
    },
    {
      id: 3,
      title: "E-commerce Frontend",
      description:
        "This e-commerce frontend project allowed me to work on user interface design and integration with APIs for dynamic product listings and cart functionality.",
      technologies: "Next JS, MongoDB, REST API, AWS",
      link: "/test3.jpg",
      img: "/test.png",
    },
  ];

  const rightArrowClicked = () => {
    // setDirection("right");
    setCount((count + 1) % projects.length);
  };

  const leftArrowClicked = () => {
    // setDirection("left");
    setCount((count - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      className="w-8/12 ml-auto mr-auto bg-darkBlue flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
    >
      {" "}
      <div className=" grid grid-cols-2 font-mono text-white">
        <div className="flex flex-col justify-between pt-2 pr-3">
          <div className="text-5xl font-bold">
            {numeral(projects[count].id).format("00")}
          </div>
          <div className="text-4xl font-bold">{projects[count].title}</div>
          <div className="text-sm opacity-80">
            {projects[count].description}
          </div>
          <div className="text-base text-green-400">
            {projects[count].technologies}
          </div>
          <div className="flex border-t-2 border-gray-800 p-1">
            <div className="border-white rounded-full bg-gray-800 m-2 p-3 rotate-[-90deg] hover:cursor-pointer">
              <HiArrowDownRight color="white" size={22} />
            </div>
            <div className="border-white rounded-full bg-gray-800 p-3 hover:cursor-pointer m-2">
              <FaGithub color="white" size={24} />
            </div>
          </div>
        </div>
        {/* add images with size 960*720 (same ratio is ok)*/}
        <motion.img
          src={projects[count].img}
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-auto mr-0 text-white pt-3">
        <button
          className="bg-green-400 hover:bg-green-500 p-2 mr-2"
          onClick={leftArrowClicked}
        >
          <SlArrowLeft color="black" size={12} />
        </button>
        <button
          className="bg-green-400 hover:bg-green-500 p-2"
          onClick={rightArrowClicked}
        >
          <SlArrowRight color="black" size={12} />
        </button>
      </div>
    </motion.div>
  );
}

export default WorkDetail;
