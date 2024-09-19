import Service from "./service";
import { motion } from "framer-motion";

function ServiceGrid() {
  return (
    <motion.div
      className="flex justify-center overflow-hidden"
      // animate={{ x: 0 }}
      // transition={{ duration: 0.5 }}
      // exit={{ x: "-100%" }}
    >
      <div className="grid grid-cols-2 gap-x-20 gap-y-10">
        <Service
          number="01"
          skill="Web Development"
          description="Skilled in building responsive, user-friendly websites and web apps that deliver a seamless experience."
          delay={0.1}
        />
        <Service
          number="02"
          skill="UI/UX Design"
          description="Expert in creating intuitive and engaging interfaces that enhance user satisfaction and interaction."
          delay={0.2}
        />
        <Service
          number="03"
          skill="ML Engineering"
          description="Proficient in designing and implementing machine learning models to solve complex problems and analyze data."
          delay={0.3}
        />
        <Service
          number="04"
          skill="Mobile App Development"
          description="Experienced in developing robust mobile apps for Android and iOS, focusing on performance and usability."
          delay={0.4}
        />
      </div>
    </motion.div>
  );
}

export default ServiceGrid;
