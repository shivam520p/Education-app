import React from "react";
import { motion } from "framer-motion";
import TS1 from "../../assets/images/TS1.png";
import TS2 from "../../assets/images/TS2.png";
import TS3 from "../../assets/images/TS3.png";
import TS4 from "../../assets/images/TS4.png"; 

const HowWorks = () => {
  return (
    <>
      <div className="p-6 container mx-auto flex flex-col items-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-normal text-center mb-6"
        >
          How it Works for Teachers
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[TS1, TS2, TS3, TS4].map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-4 shadow-md rounded-lg text-center border flex flex-col items-center"
            >
              <img src={image} alt=""  className="w-24 border border-primary rounded-lg"/>
              <h5>
              Student Post Requirement
              </h5>
              <p className="text-gray-600">Student Post Tutor Requirement on <br /> GharPeShiksha Platform</p>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HowWorks;
