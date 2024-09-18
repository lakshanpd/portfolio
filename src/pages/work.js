import WorkDetail from "../components/work_details";
import Navbar from "../components/navbar";

function Work() {
  return (
    <div className="w-screen h-screen bg-darkBlue">
      <Navbar option="Projects" />
      <div className="h-40"></div>
      <WorkDetail />
    </div>
  );
}

export default Work;
