import Navbar from "../components/navbar";
import ServiceGrid from "../components/service_grid";

function Services() {
  return (
    <div className="w-screen min-h-screen bg-darkBlue">
      <Navbar option="Services" />
      <div className="sm:h-40 screen-3:h-32"></div>
      <ServiceGrid />
      <div className="sm:h-0 screen-3:h-10"></div>
    </div>
  );
}

export default Services;
