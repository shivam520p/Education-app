import React from "react";
import { motion } from "framer-motion";

const FeatureList = () => {
  const features = [
    {
      title: "Global Reach and Inclusivity",
      description: "Connecting learners with expert tutors for equal education access.",
    },
    {
      title: "Personalized Learning Journeys",
      description: "Creating customized learning experiences tailored to each student's needs.",
    },
    {
      title: "Building a Community of Excellence",
      description: "Fostering a vibrant community of learners and educators for lifelong growth.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      className="space-y-3 max-w-full px-4"
      variants={container}
      initial="hidden"
      animate="show"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex items-start mt-4 gap-2"
          variants={item}
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="text-orange-500 flex-shrink-0">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-5 h-6"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15-5-5h3V7h4v5h3l-5 5z" />
            </svg>
          </div>
          <div className="min-w-0">
            <h3 className="text-m font-semibold text-slate-700">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-500">{feature.description}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default FeatureList;