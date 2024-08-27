import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const navbar_options = ["Home", "Services", "Resume", "Work", "Contact"];

  const navigate = useNavigate();

  const handleClick = (option) => {
    navigate("/" + option.toLowerCase());
  };

  return (
    <div className="flex w-full h-20 text-white items-center font-mono fixed">
      <div className="flex w-5/12 items-start pl-10 text-3xl font-bold">
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
                    ? "text-green-400 text-lg"
                    : "text-white"
                }`}
                onClick={() => handleClick(option)}
              >
                {option}
              </div>
            );
          })}
          <button className="bg-green-400 hover:bg-green-600 text-black py-2 px-4 rounded-full">
            Hire me
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
