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
      className="flex justify-center  font-mono  pt-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
    >
      <div className="xl:grid xl:grid-cols-3 w-4/5 ">
        <div className="flex flex-col col-span-1 gap-7  items-center">
          <p className=" text-4xl text-white font-bold">Why hire me?</p>
          <p className="text-sm text-white xl:w-3/4 w-64">
            Check my resume and you will find what I am capable of.
          </p>
          <div className="flex flex-col gap-4">
            <div
              className={`  text-lg flex justify-center rounded-md pt-1 pb-1 w-64 ${
                clicked === "education"
                  ? "bg-green-400 text-black"
                  : "text-white bg-gray-800"
              }  transition duration-300 ease-in-out hover:cursor-pointer`}
              onClick={() => setClicked("education")}
            >
              Education
            </div>
            <div
              className={`  text-lg flex justify-center rounded-md pt-1 pb-1 w-64 ${
                clicked === "skills"
                  ? "bg-green-400 text-black"
                  : "text-white bg-gray-800"
              }  transition duration-300 ease-in-out hover:cursor-pointer`}
              onClick={() => setClicked("skills")}
            >
              Skills
            </div>
            <div
              className={`  text-lg flex justify-center rounded-md pt-1 pb-1 w-64 ${
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

        <div className="xl:col-span-2 flex justify-center xl:mt-0 mt-10 ">
          {clicked === "education" && (
            <motion.div
              className="text-white flex flex-col gap-7  xl:items-start items-center "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold">My Education</div>
              <div className="text-sm flex justify-center">
                Currently, I am studying Data Science Engineering at University
                of Moratuwa.
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 sm:w-9/12 xs:w-full">
                <div>
                  <EducationCard
                    period="2017"
                    education="GCE O/Ls"
                    points={["9A's"]}
                  />
                </div>
                <div>
                  <EducationCard
                    period="2020"
                    education="GCE A/Ls"
                    points={["3A's", "Island Rank: 181"]}
                  />
                </div>
                <div>
                  <EducationCard
                    period="2018-2020"
                    education="Royal College, Colombo"
                    points={["Physical Science Stream"]}
                  />
                </div>
                <div>
                  <EducationCard
                    period="2021-present"
                    education="University of Moratuwa"
                    points={[
                      "Computer Science Engineering Undergraduate",
                      "Stream: Data Science & Engineering",
                    ]}
                  />
                </div>
              </div>
            </motion.div>
          )}
          {clicked === "skills" && (
            <motion.div
              className="text-white flex flex-col xl:items-start items-center gap-7"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-4xl font-bold">My Skills</div>
              <div className="text-sm">
                I am expert at various technologies related to Data Science and
                Software Engineering.
              </div>
              <div className="grid lg:grid-cols-4 screen-3:grid-cols-2 gap-3 w-9/12">
                <div class="has-tooltip flex justify-center ">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    React JS
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl ">
                    <IoLogoReact color="white" size={70} />
                  </div>
                </div>

                <div class="has-tooltip flex justify-center ">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    Python
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                    <AiOutlinePython color="white" size={70} />
                  </div>
                </div>

                <div class="has-tooltip flex justify-center">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    JavaScript
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                    <DiJavascript1 color="white" size={70} />
                  </div>
                </div>

                <div class="has-tooltip flex justify-center">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    Tailwind
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                    <SiTailwindcss color="white" size={70} />
                  </div>
                </div>

                <div class="has-tooltip flex justify-center">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    Flask
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                    <BiLogoFlask color="white" size={70} />
                  </div>
                </div>

                <div class="has-tooltip flex justify-center">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    Node JS
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                    <FaNodeJs color="white" size={70} />
                  </div>
                </div>

                <div class="has-tooltip flex justify-center">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    MySQL
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                    <SiMysql color="white" size={70} />
                  </div>
                </div>

                <div class="has-tooltip flex justify-center">
                  <span class="tooltip rounded shadow-lg p-1 bg-gray-100 text-black -mt-6">
                    Tensorflow
                  </span>
                  <div className=" bg-gray-900 w-fit p-5 rounded-xl">
                    <SiTensorflow color="white" size={70} />
                  </div>
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
              <div className="text-4xl font-bold flex justify-center">
                About me
              </div>
              <div className="text-sm flex">
                Passionate about learning new things and eager to collaborate
                with others to <br></br> achieve shared goals.
              </div>

              <div className="grid sm:grid-cols-2 screen-3:grid-cols-1 ">
                <div className="flex flex-col gap-5">
                  <div>
                    <span className="text-sm opacity-60 block">Name: </span>{" "}
                    <span className="">Danuka Lakshan</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-60 block">Age: </span>{" "}
                    <span className="">22 years old</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-60 block">Country: </span>{" "}
                    <span className="">Sri Lanka</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-60 block">
                      Freelance:{" "}
                    </span>{" "}
                    <span className="">Available</span>
                  </div>
                </div>

                <div className="flex flex-col  gap-5 sm:mt-0 screen-3:mt-5 ">
                  {" "}
                  <div>
                    <span className="text-sm opacity-60 block">Phone: </span>{" "}
                    <span className="">(+94) 77 37 50 264</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-60 block">Email: </span>{" "}
                    <span className="">lakshanpd.cse21@gmail.com</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-60 block">
                      Languages:{" "}
                    </span>{" "}
                    <span className="">English, Sinhala</span>
                  </div>
                  <div>
                    <span className="text-sm opacity-60 block">Seeking: </span>{" "}
                    <span className="">Internship</span>
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
