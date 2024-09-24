import { FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
// import TextRevealTW from "./animated_text";
import { motion } from "framer-motion";

function About() {
  const toGithub = () => {
    window.location.href = "https://github.com/lakshanpd";
  };
  const toInstagram = () => {
    window.location.href = "https://www.instagram.com/";
  };
  const toLinkedin = () => {
    window.location.href =
      "https://www.linkedin.com/in/danuka-lakshan-b92b91247/";
  };
  return (
    <motion.div
      className=" flex justify-center font-mono text-white"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
    >
      <div className="screen-2:w-4/5 flex screen-2:flex-row-reverse flex-col items-center ">
        {/*My Picture*/}
        <div className="screen-2:w-2/5 flex justify-center items-center ">
          <div
            className="relative screen-2:w-9/12 xs:w-6/12 w-3/5 aspect-square rounded-full bg-transparent border-2 border-dashed border-green-400 
                shadow-glow "
          >
            <img
              src="/me.png"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
        <div className="screen-2:h-0 h-10"></div>
        {/*Description*/}
        <div className="screen-2:w-3/5 flex flex-col screen-2:items-start screen-2:text-lg items-center">
          <h2 className="screen-2:text-lg text-sm">
            Computer Science Engineer
          </h2>
          <div className="h-2"></div>
          <p className="screen-2:text-7xl text-4xl">Hello I'm</p>

          {/* <TextRevealTW text={"Danuka Lakshan"} /> */}
          <motion.p
            className="screen-2:text-7xl text-4xl text-green-400 pt-3"
            initial={{ opacity: 0 }} // Start off-screen and invisible
            animate={{ opacity: 1 }} // Fade in and move to position
            transition={{ duration: 1, delay: 0.5 }} // Animation duration
          >
            Danuka Lakshan
          </motion.p>

          <div className="h-5"></div>
          {/* animate-text-reveal-2 */}
          <motion.p
            className="screen-2:w-11/12 w-8/12 lg:text-lg text-sm screen-2:text-start text-center"
            initial={{ opacity: 0, y: 20 }} // Start off-screen and invisible
            animate={{ opacity: 1, y: 0 }} // Fade in and move to position
            transition={{ duration: 1, delay: 1.5 }} // Animation duration
          >
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies. So, Let's work
            together.
          </motion.p>

          <div className="h-10"></div>
          <div className="flex items-center">
            <a href="/cv.pdf" download="Danuka_Lakshan_CV.pdf">
              <button class="bg-transparent hover:bg-green-500 text-green-500 screen-2:text-lg font-semibold hover:text-black py-2 px-4 border border-green-500 hover:border-transparent rounded-full transition-colors duration-500 ease-in-out">
                Download CV
              </button>
            </a>
            <div className="w-12"></div>
            <div
              style={{ color: "green" }}
              onClick={toGithub}
              className="hover:cursor-pointer"
            >
              <FaGithub size={36} />
            </div>
            <div className="w-4"></div>
            <div
              style={{ color: "green" }}
              onClick={toLinkedin}
              className="hover:cursor-pointer"
            >
              <TiSocialLinkedinCircular size={50} />
            </div>
            <div className="w-4"></div>
            <div
              style={{ color: "green" }}
              onClick={toInstagram}
              className="hover:cursor-pointer"
            >
              <FaInstagram size={36} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default About;
