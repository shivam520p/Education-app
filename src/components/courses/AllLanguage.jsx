import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import toast from "react-hot-toast";

const AllLanguage = () => {
  const { allLanguage, getAllLanguage } = useContext(AdminContext);
  useEffect(() => {
    getAllLanguage();
  }, []);
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <section className="mt-16 md:mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-3 md:gap-5 py-8 md:py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-700 text-center">
            All Languages
          </h1>
          <div className="flex justify-center items-center gap-2 text-base md:text-lg">
            <a href="/" className="hover:text-blue-600 transition-colors">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/courses" className="text-amber-500 hover:text-amber-600 transition-colors">
              Courses
            </a>
          </div>
        </div>
      </section>
      <div className="py-8 md:py-16 px-4">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allLanguage.map((language, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="p-3 md:p-4">
                <h3 className="text-sm md:text-base lg:text-lg font-semibold text-center">
                  {language.languageName}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center items-center gap-4 mt-8 md:mt-12"
        >
          <button onClick={()=>{toast.error("No more languages are available")}} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 active:scale-95">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button onClick={()=>{toast.error("No more languages are available")}} className="p-3 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300 active:scale-95">
            <svg
              className="w-5 h-5 md:w-6 md:h-6 text-gray-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </>
  );
};

export default AllLanguage;
