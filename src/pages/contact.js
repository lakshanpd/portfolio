import ContactDetails from "../components/contact_details";
import Navbar from "../components/navbar";

function Contact() {
  return (
    <div className="w-screen h-screen bg-darkBlue">
      <Navbar option="Contact" />
      <div className="h-40"></div>
      <ContactDetails />
    </div>
  );
}

export default Contact;
