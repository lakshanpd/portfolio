import { useState } from "react";
import EducationCard from "./education_card";
import { IoLogoReact } from "react-icons/io5";
import { AiOutlinePython } from "react-icons/ai";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoFlask } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import { SiTensorflow } from "react-icons/si";
import { motion } from "framer-motion";

function ResumeDetails() {
  const [clicked, setClicked] = useState("education");
  return (
    <motion.div
      className="flex bg-darkBlue w-4/5 font-mono pl-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
    >
      <div className="grid grid-cols-3">
        <div className="flex flex-col col-span-1 gap-6">
          <p className=" text-4xl text-white font-bold">Why hire me?</p>
          <p className="text-xs text-white w-2/3">
            Check my resume and you will find what I am capable of.
          </p>
          <div className="flex flex-col gap-4">
            <div
              className={`  text-sm flex justify-center rounded-md pt-1 pb-1 w-56 ${
                clicked === "education"
                  ? "bg-green-400 text-black"
                  : "text-white bg-gray-800"
              }  transition duration-300 ease-in-out hover:cursor-pointer`}
              onClick={() => setClicked("education")}
            >
              Education
            </div>
            <div
              className={`  text-sm flex justify-center rounded-md pt-1 pb-1 w-56 ${
                clicked === "skills"
                  ? "bg-green-400 text-black"
                  : "text-white bg-gray-800"
              }  transition duration-300 ease-in-out hover:cursor-pointer`}
              onClick={() => setClicked("skills")}
            >
              Skills
            </div>
            <div
              className={`  text-sm flex justify-center rounded-md pt-1 pb-1 w-56 ${
                clicked === "about"
                  ? "bg-green-400 text-black"
                  : "text-white bg-gray-800"
              }  transition duration-300 ease-in-out hover:cursor-pointer`}
              onClick={() => setClicked("about")}
            >
              About me
            </div>
          </div>
        </div>

        <div className="col-span-2">
          {clicked === "education" && (
            <motion.div
              className="text-white flex flex-col gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl">My Education</div>
              <div className="text-xs">
                Currently, I am studying Data Science Engineering at University
                of Moratuwa.
              </div>
              <div className="grid grid-cols-2 gap-4 w-9/12">
                <div>
                  <EducationCard
                    period="2023"
                    education="Web Development"
                    points={["Island ranked"]}
                  />
                </div>
                <div>
                  <EducationCard
                    period="2023"
                    education="Web Development"
                    points={["Island ranked"]}
                  />
                </div>
                <div>
                  <EducationCard
                    period="2023"
                    education="Web Development"
                    points={["Island ranked"]}
                  />
                </div>
              </div>
            </motion.div>
          )}
          {clicked === "skills" && (
            <motion.div
              className="text-white flex flex-col gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl">My Skills</div>
              <div className="text-xs">
                I am expert at various technologies related to Data Science and
                Software Engineering.
              </div>
              <div className="grid grid-cols-4 gap-3 w-9/12">
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <IoLogoReact color="white" size={60} />
                </div>
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <AiOutlinePython color="white" size={60} />
                </div>
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <DiJavascript1 color="white" size={60} />
                </div>
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <SiTailwindcss color="white" size={60} />
                </div>
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <BiLogoFlask color="white" size={60} />
                </div>
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <FaNodeJs color="white" size={60} />
                </div>
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <SiMysql color="white" size={60} />
                </div>
                <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                  <SiTensorflow color="white" size={60} />
                </div>
              </div>
            </motion.div>
          )}
          {clicked === "about" && (
            <motion.div
              className="text-white flex flex-col gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-3xl">About me</div>
              <div className="text-xs">
                Passionate about learning new things and eager to collaborate
                with others to achieve shared goals.
              </div>

              <div className="grid grid-cols-7 text-base w-4/5">
                <div className="flex flex-col col-span-3 gap-5  ">
                  <div>
                    <span className="text-xs opacity-60">Name: </span>{" "}
                    <span className="ml-2">Danuka Lakshan</span>
                  </div>
                  <div>
                    <span className="text-xs opacity-60">Age: </span>{" "}
                    <span className="ml-2">22 years old</span>
                  </div>
                  <div>
                    <span className="text-xs opacity-60">Country: </span>{" "}
                    <span className="ml-2">Sri Lanka</span>
                  </div>
                  <div>
                    <span className="text-xs opacity-60">Freelance: </span>{" "}
                    <span className="ml-2">Available</span>
                  </div>
                </div>

                <div className="flex flex-col col-span-4 gap-5 ">
                  {" "}
                  <div>
                    <span className="text-xs opacity-60">Phone: </span>{" "}
                    <span className="ml-2">(+94) 77 37 50 264</span>
                  </div>
                  <div>
                    <span className="text-xs opacity-60">Email: </span>{" "}
                    <span className="ml-2">lakshanpd.cse21@gmail.com</span>
                  </div>
                  <div>
                    <span className="text-xs opacity-60">Languages: </span>{" "}
                    <span className="ml-2">English, Sinhala</span>
                  </div>
                  <div>
                    <span className="text-xs opacity-60">Seeking: </span>{" "}
                    <span className="ml-2">Internship</span>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ResumeDetails;
