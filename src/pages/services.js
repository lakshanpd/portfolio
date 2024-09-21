import Navbar from "../components/navbar";
import ServiceGrid from "../components/service_grid";

function Services() {
  return (
    <div className="w-screen min-h-screen bg-darkBlue">
      <Navbar option="Services" />
      <div className="h-40"></div>
      <ServiceGrid />
    </div>
  );
}

export default Services;
