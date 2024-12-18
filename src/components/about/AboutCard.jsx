import React from "react";
import { motion } from "framer-motion";
import StarIco from "../../assets/Icons/StarIco";

const AboutCard = ({ cardName, image }) => {
  return (
    <motion.a 
      className="roomCard w-full border border-gray-300 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer p-2"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5,
        ease: "easeOut"
      }}
      whileHover={{ 
        scale: 1.03,
        transition: {
          duration: 0.2,
          ease: "easeInOut"
        }
      }}
    >
      <div className="rounded-xl customOverlay relative w-full">
        <img
          src={image}
          alt={cardName}
          className="w-full h-48 object-cover rounded-xl"
        />
        
      </div>
      <motion.div 
        className="text-sm mt-2 flex justify-between items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <span className="font-semibold block">{cardName}</span>
        <span className="font-xs flex items-center gap-2">
          <StarIco width="15px" height="15px" /> 4.26
        </span>
      </motion.div>
      <motion.div 
        className="text-sm text-lighttext"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptas
          laboriosam alias inventore suscipit sed.
        </p>
      </motion.div>
    </motion.a>
  );
};
export default AboutCard;
