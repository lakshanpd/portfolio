import ContactDetails from "../components/contact_details";
import Navbar from "../components/navbar";

function Contact() {
  return (
    <div className="w-screen h-screen bg-darkBlue">
      <Navbar option="Contact" />
      <div className="h-40"></div>
      <ContactDetails />
      <div className="sm:h-0 screen-3:h-20"></div>
    </div>
  );
}

export default Contact;
