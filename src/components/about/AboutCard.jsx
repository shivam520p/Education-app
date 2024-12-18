import React from "react";
import { motion } from "framer-motion";
import StarIco from "../../assets/Icons/StarIco";

const AboutCard = ({ cardName, price, image }) => {
  return (
    <motion.a 
      className="roomCard w-full border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="rounded-xl customOverlay relative w-full">
        <img
          src={image}
          alt={cardName}
          className="w-full h-48 object-cover rounded-xl"
        />
        
      </div>
      <div className="text-sm mt-2 flex justify-between items-center">
        <span className="font-semibold block">{cardName}</span>
        <span className="font-xs flex items-center gap-2">
          <StarIco width="15px" height="15px" /> 4.26
        </span>
      </div>
      {/* <div className="text-sm text-lighttext">
        {available ? 'Available' : 'Unavailable'}
      </div> */}
      <div className="text-sm text-lighttext">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas
          laboriosam alias inventore suscipit sed.
        </p>
      </div>
      <div className="text-sm font-semibold">${price} /hr</div>
    </motion.a>
  );
};
export default AboutCard;
