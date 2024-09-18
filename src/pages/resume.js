import ResumeDetails from "../components/resume_details";
import Navbar from "../components/navbar";

function Resume() {
  return (
    <div className="w-screen h-screen bg-darkBlue">
      <Navbar option="Resume" />
      <div className="h-40"></div>
      <div className="flex justify-center">
        <ResumeDetails />
      </div>
    </div>
  );
}

export default Resume;
