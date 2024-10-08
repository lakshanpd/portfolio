import About from "../components/about";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="w-screen min-h-screen bg-darkBlue ">
      <Navbar option="Home" />
      <div className="xs:p-16 lg:p-20 screen-2:p-24"></div>
      <About />
      <div className="sm:h-0 screen-3:h-10"></div>
    </div>
  );
}

export default Home;
