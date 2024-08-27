import About from "../components/about";
import Navbar from "../components/navbar";

function Home() {
  return (
    <div className="w-screen h-screen bg-darkBlue ">
      <Navbar option="Home" />
      <About />
    </div>
  );
}

export default Home;
