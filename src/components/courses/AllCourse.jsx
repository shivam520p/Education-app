import React, { useContext, useEffect } from "react";
import { motion } from "framer-motion";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import toast from "react-hot-toast";

const AllCourse = () => {
  const { allCourses, getAllCourses } = useContext(AdminContext);
  useEffect(() => {
    getAllCourses();
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
      <section className="mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">All Courses</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/courses" className="text-amber-500">
              Courses
            </a>
          </div>
        </div>
      </section>
      <div className="my-8 md:my-16 py-6 md:py-10 px-4">
        <motion.div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {allCourses.map((course, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              variants={cardVariants}
              whileHover="hover"
            >
              <div className="relative">
                <motion.img
                  src={course.courseImage}
                  alt={course.course_title}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover object-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-lg font-semibold mb-3 md:mb-4">
                  Course Name:
                  <span className="text-gray-500 ml-3">{course.course_title}</span>
                </h3>
                <h3 className="text-lg md:text-lg font-semibold mb-3 md:mb-4">
                  Course Price:
                  <span className="text-gray-500 ml-3">{course.coursePrice}</span>
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center py-6 md:py-10 space-x-4"
        >
          <button onClick={()=>{toast.error("No more courses are available")}} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
            <svg
              className="w-6 h-6 text-gray-600"
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
          <button onClick={()=>{toast.error("No more courses are available")}} className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
            <svg
              className="w-6 h-6 text-gray-600"
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

export default AllCourse;
