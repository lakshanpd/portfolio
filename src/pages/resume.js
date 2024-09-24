import ResumeDetails from "../components/resume_details";
import Navbar from "../components/navbar";

function Resume() {
  return (
    <div className="w-screen min-h-screen bg-darkBlue">
      <Navbar option="Resume" />
      <div className="sm:h-40 screen-3:h-32"></div>
      <ResumeDetails />
      <div className="sm:h-0 screen-3:h-10"></div>
    </div>
  );
}

export default Resume;
