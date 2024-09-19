import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navbar_options = ["Home", "Services", "Resume", "Projects", "Contact"];

  const navigate = useNavigate();

  const handleClick = (option) => {
    if (option === "Home") {
      navigate("/");
    } else {
      navigate("/" + option.toLowerCase());
    }
  };

  return (
    <div className="flex w-full h-20 text-white items-center font-mono fixed">
      <div
        className="flex w-5/12 items-start pl-12 text-4xl font-bold hover:cursor-pointer"
        onClick={() => handleClick("Home")}
      >
        Danuka<span className="text-green-400">.</span>
      </div>

      <div className="flex items-start w-7/12 h-full ">
        <div className="flex justify-around items-center  h-full w-11/12">
          {navbar_options.map((option) => {
            return (
              <div
                key={option}
                className={`hover:text-green-400 hover:cursor-pointer  transition-all duration-400 ${
                  props.option === option
                    ? "text-green-400 text-2xl"
                    : "text-white text-xl"
                }`}
                onClick={() => handleClick(option)}
              >
                {option}
              </div>
            );
          })}
          <button className="bg-green-400 hover:bg-green-600 text-black py-2 px-4 rounded-full text-lg">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
