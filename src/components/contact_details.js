import { motion } from "framer-motion";
import { IoIosCall } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { useState } from "react";
import emailjs from "emailjs-com";

function ContactDetails() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const service_id = process.env.REACT_APP_SERVICE_ID;
  const template_id = process.env.REACT_APP_TEMPLATE_ID;
  const public_key = process.env.REACT_APP_PUBLIC_KEY;

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(service_id, template_id, e.target, public_key).then(
      (result) => {
        console.log(result.text);
        alert("Message Sent Successfully");
      },
      (error) => {
        console.log(error.text);
        alert("Something went wrong!");
      }
    );
    e.target.reset();
  };

  return (
    <motion.div
      className="flex w-8/12 font-mono mr-auto ml-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      transition={{ duration: 1 }}
    >
      <div className="w-full grid grid-cols-2">
        <div className="text-white bg-gray-800 flex flex-col gap-5 p-5 rounded-sm">
          <div className="text-3xl text-green-400 font-bold">
            Let's work together
          </div>
          <div className="text-sm opacity-80">
            Happy to do your projects and collaborate for good projects.
          </div>
          <div>
            <form
              autoComplete="off"
              className="flex flex-col gap-6"
              onSubmit={handleOnSubmit}
            >
              <div className="grid grid-cols-2 gap-x-4 gap-y-6">
                <input
                  autoComplete="off"
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  onChange={handleChange}
                  value={formData.firstName}
                  required
                  className="bg-darkBlue border-transparent border-2 rounded-md pl-2 pt-1 pb-1  focus:border-green-400 focus:outline-none"
                />

                <input
                  autoComplete="off"
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-darkBlue border-transparent border-2 rounded-md pl-2 pt-1 pb-1  focus:border-green-400 focus:outline-none"
                />
                <input
                  autoComplete="off"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-darkBlue border-transparent border-2 rounded-md pl-2 pt-1 pb-1  focus:border-green-400 focus:outline-none"
                />
                <input
                  autoComplete="off"
                  type="text"
                  name="phoneNumber"
                  onChange={handleChange}
                  value={formData.phoneNumber}
                  //   pattern="^\+?[0-9]{1,4}?[-.\s]?(\(?\d{1,3}?\)?[-.\s]?)?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$"
                  placeholder="Phone Number"
                  required
                  className="bg-darkBlue border-transparent border-2 rounded-md pl-2 pt-1 pb-1  focus:border-green-400 focus:outline-none"
                />
              </div>
              <select
                className="bg-darkBlue border-transparent border-2 rounded-md pl-2 pt-1 pb-1  focus:border-green-400 focus:outline-none"
                name="service"
                onChange={handleChange}
                value={formData.service}
                required
              >
                <option value="" disabled hidden>
                  Select a service
                </option>
                <option value="web development">web development</option>
                <option value="mobile app development">
                  mobile app development
                </option>
                <option value="machine learning">machine learning</option>
              </select>

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here."
                required
                className="bg-darkBlue border-transparent border-2 rounded-md h-32 pl-2 pt-1 pb-1 focus:border-green-400 focus:outline-none resize-none"
              />
              <input
                type="submit"
                value="Send Message"
                className="bg-green-400 text-black font-semibold w-fit pl-3 pr-3 pt-2 pb-2 rounded-3xl hover:bg-green-500"
              />
            </form>
          </div>
        </div>
        <div className="text-white bg-darkBlue flex justify-center items-center">
          <div className="w-4/5 flex flex-col gap-5">
            <div className="flex items-center">
              <IoIosCall style={{ color: "lightgreen" }} size={30} />
              <div className="pl-4 flex flex-col">
                <p className="text-xs opacity-70">Phone</p>
                <p className="opacity-90">(+94) 77 37 50 264</p>
              </div>
            </div>
            <div className="flex items-center">
              <IoMail style={{ color: "lightgreen" }} size={30} />

              <div className="pl-4 flex flex-col">
                <p className="text-xs opacity-70">Email</p>
                <p className="opacity-90">lakshanpd.cse21@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaLocationDot style={{ color: "lightgreen" }} size={30} />

              <div className="pl-4 flex flex-col">
                <p className="text-xs opacity-70">Address</p>
                <p className="opacity-90">
                  314/F, Ekamuthumawatha, Jalthara, Ranala.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ContactDetails;
