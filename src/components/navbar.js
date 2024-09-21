import { useNavigate } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

function Navbar(props) {
  const navbar_options = ["Home", "Services", "Resume", "Projects", "Contact"];
  const [hamburgerClicked, setHamburgerClicked] = useState(false);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const navigate = useNavigate();

  const handleClick = (option) => {
    if (option === "Home") {
      navigate("/");
    } else {
      navigate("/" + option.toLowerCase());
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex w-full min-h-20 text-white items-center font-mono fixed z-50">
      <div
        className="flex w-5/12 items-start sm:pl-12 screen-3:pl-4 text-4xl font-bold hover:cursor-pointer"
        onClick={() => handleClick("Home")}
      >
        Danuka<span className="text-green-400">.</span>
      </div>

      <div className="flex items-start w-7/12 h-full">
        {screenWidth > 800 && (
          <div className="flex justify-around items-center  h-full w-11/12">
            {navbar_options.map((option) => {
              return (
                <div
                  key={option}
                  className={`hover:text-green-400 hover:cursor-pointer  transition-all duration-400 ${
                    props.option === option
                      ? "text-green-400 screen-2:text-2xl text-xl"
                      : "text-white screen-2:text-xl"
                  }`}
                  onClick={() => handleClick(option)}
                >
                  {option}
                </div>
              );
            })}
            <button
              className="bg-green-400 hover:bg-green-600 text-black py-2 px-4 rounded-full text-lg"
              onClick={() => handleClick("Contact")}
            >
              Hire me
            </button>
          </div>
        )}
      </div>

      {/* {!hamburgerClicked ? (

      ) : null} */}
      {screenWidth < 800 && (
        <div
          className="screen-2:invisible lg:pr-6 screen-3:pr-4 hover:cursor-pointer hover:text-green-400 transition duration-300"
          onClick={() => setHamburgerClicked(true)}
        >
          <RxHamburgerMenu size={40} />
        </div>
      )}
      <AnimatePresence>
        {hamburgerClicked && (
          <>
            <div
              className="fixed inset-0 bg-black opacity-50 blurred-background"
              onClick={() => setHamburgerClicked(false)}
            />
            <motion.div
              className="screen-2:invisible fixed flex flex-col items-start top-0 right-0 w-64 shadow-lg h-full bg-gray-800 gap-40"
              initial={{ x: "100%" }} // Start off-screen to the right
              animate={{ x: 0 }} // Slide into view
              exit={{ x: "100%" }} // Slide out of view to the right
              transition={{ type: "tween", duration: 0.3 }} // Animation settings
            >
              <button
                onClick={() => setHamburgerClicked(false)} // Close the sidebar
                className="text-white p-6 "
              >
                <IoMdClose
                  size={30}
                  className=" hover:text-green-500 transition-colors duration-300"
                />
              </button>
              <ul className="w-full flex flex-col justify-center items-center">
                <li className="flex w-full justify-center text-white py-5 hover:bg-green-400 hover:cursor-pointer hover:text-black hover:font-bold transition duration-300 ease-in-out">
                  <a href="./">Home</a>
                </li>

                <li className="flex w-full justify-center text-white py-5 hover:bg-green-400 hover:cursor-pointer hover:text-black hover:font-bold transition duration-300 ease-in-out">
                  <a href="./services">Services</a>
                </li>
                <li className="flex w-full justify-center text-white py-5 hover:bg-green-400 hover:cursor-pointer hover:text-black hover:font-bold transition duration-300 ease-in-out">
                  <a href="/home">Resume</a>
                </li>
                <li className="flex w-full justify-center text-white py-5 hover:bg-green-400 hover:cursor-pointer hover:text-black hover:font-bold transition duration-300 ease-in-out">
                  <a href="/home">Projects</a>
                </li>
                <li className="flex w-full justify-center text-white py-5 hover:bg-green-400 hover:cursor-pointer hover:text-black hover:font-bold transition duration-300 ease-in-out">
                  <a href="/home">Contact</a>
                </li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;
