import { FaGithub } from "react-icons/fa6";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";
import TextRevealTW from "./animated_text";

function About() {
  const toGithub = () => {
    window.location.href = "https://github.com/lakshanpd";
  };
  const toInstagram = () => {
    window.location.href = "https://www.example.com";
  };
  const toLinkedin = () => {
    window.location.href = "www.linkedin.com/in/danuka-lakshan-b92b91247";
  };
  return (
    <div className=" flex w-full h-full justify-center font-mono text-white">
      <div className="w-4/5 h-full flex">
        {/*Description*/}
        <div className="w-3/5 flex flex-col items-start justify-center ">
          <h2>Computer Science Engineer</h2>
          <div className="h-2"></div>
          <p className="text-6xl">Hello I'm</p>

          <TextRevealTW text={"Danuka Lakshan"} />

          <div className="h-5"></div>
          <p className="w-11/12 opacity-0  animate-text-reveal-2">
            I excel at crafting elegant digital experiences and I am proficient
            in various programming languages and technologies. So, Let's work
            together.
          </p>
          <div className="h-10"></div>
          <div className="flex items-center">
            <button class="bg-transparent hover:bg-green-500 text-green-500 font-semibold hover:text-black py-2 px-4 border border-green-500 hover:border-transparent rounded-full transition-colors duration-500 ease-in-out">
              Download CV
            </button>
            <div className="w-12"></div>
            <div
              style={{ color: "green" }}
              onClick={toGithub}
              className="hover:cursor-pointer"
            >
              <FaGithub size={28} />
            </div>
            <div className="w-4"></div>
            <div
              style={{ color: "green" }}
              onClick={toLinkedin}
              className="hover:cursor-pointer"
            >
              <TiSocialLinkedinCircular size={40} />
            </div>
            <div className="w-4"></div>
            <div
              style={{ color: "green" }}
              onClick={toInstagram}
              className="hover:cursor-pointer"
            >
              <FaInstagram size={28} />
            </div>
          </div>
        </div>
        {/*My Picture*/}
        <div className="w-2/5 flex justify-center items-center ">
          <div
            className="relative w-5/6 aspect-square rounded-full bg-transparent border-4 border-transparent 
                shadow-glow"
          >
            <img
              src="/me.png"
              alt=""
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
