import WorkDetail from "../components/work_details";
import Navbar from "../components/navbar";

function Work() {
  return (
    <div className="w-screen min-h-screen bg-darkBlue">
      <Navbar option="Projects" />
      <div className="md:h-48 h-32"></div>
      <WorkDetail />
      <div className="md:h-0 screen-3:h-10"></div>
    </div>
  );
}

export default Work;
