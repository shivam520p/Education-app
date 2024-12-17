import React, { useContext } from "react";
import { motion } from "framer-motion";
import { FaTwitter, FaInstagram, FaPinterest, FaGlobe } from "react-icons/fa";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";
import BookSession from "../models/BookSession";

const TutorDetails = () => {
  const { popUp, setPopUp, tutor } = useContext(TutorContext);

  return (
    <>
      <section className="mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-8 sm:py-16">
          <h1 className="text-3xl sm:text-5xl font-bold text-gray-700 text-center">
            Instructor Details
          </h1>
          <div className="flex justify-center items-center gap-2 text-base sm:text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/findtutor" className="text-amber-500">
              Instructor Details
            </a>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-start justify-center gap-6 sm:gap-10 px-4 sm:px-8 lg:px-16 py-6 sm:py-10">
          {/* Left Side - Profile Image */}
          <div className="w-full lg:w-1/3 max-w-[400px] mx-auto lg:mx-0 flex-shrink-0 px-3 py-3 bg-blue-100">
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={tutor?.userId?.avatar}
                alt="Instructor"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-6">
              <motion.a
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                href="#"
                className="text-gray-600 hover:text-blue-400"
              >
                <FaTwitter size={20} className="sm:text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#E4405F" }}
                href="#"
                className="text-gray-600 hover:text-pink-500"
              >
                <FaInstagram size={20} className="sm:text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#E60023" }}
                href="#"
                className="text-gray-600 hover:text-red-600"
              >
                <FaPinterest size={20} className="sm:text-2xl" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.2, color: "#0077B5" }}
                href="#"
                className="text-gray-600 hover:text-blue-600"
              >
                <FaGlobe size={20} className="sm:text-2xl" />
              </motion.a>
            </div>
          </div>

          {/* Right Side - Information */}
          <div className="space-y-4 w-full lg:w-2/3">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center lg:text-left"
            >
              <p className="text-blue-400 font-bold">Instructor</p>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                {tutor?.userId?.fullName}
              </h2>
              <p className="text-gray-600">{tutor?.userId?.email}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4"
            >
              <div className="bg-blue-50 p-3 rounded-lg">
                <p className="text-xs sm:text-sm font-semibold">Profession:
                 <span className="font-semibold text-gray-600 ml-3">{tutor?.experience[0]?.role}</span> 
                </p>
                <p className="text-xs sm:text-sm font-semibold">Institution:
                  <span className="font-semibold text-gray-600 ml-3">{tutor?.experience[0]?.institutionName}</span> 
                </p>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p className="text-xs sm:text-sm font-semibold">College:
                  <span className="font-semibold text-gray-600 ml-3">{tutor?.qualifications[0]?.institution}</span> 
                </p>
                <p className="text-xs sm:text-sm font-semibold">Degree:
                  <span className="font-semibold text-gray-600 ml-3">{tutor?.qualifications[0]?.degree}</span> 
                </p>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-3 py-6 sm:py-8 flex flex-col lg:flex-row justify-between border-dotted border-b-2 border-blue-400 w-full lg:w-2/3"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-lg sm:text-xl font-semibold">Contact</h3>
                <p className="flex items-center gap-2 text-sm sm:text-lg">
                  <span className="text-gray-600 px-2 py-1 bg-blue-100 border border-gray-300 rounded-md">
                    <i className="fa-solid fa-phone"></i>
                  </span>
                  +91 {tutor?.userId?.mobile}
                </p>
                <p className="flex items-center gap-2 text-sm sm:text-lg">
                  <span className="text-gray-600 px-2 py-1 bg-blue-100 border border-gray-300 rounded-md">
                    <i className="fa-solid fa-envelope"></i>
                  </span>
                  {tutor?.userId?.email}
                </p>
                <p className="flex items-center gap-2 text-sm sm:text-lg">
                  <span className="text-gray-600 px-2.5 py-1 bg-blue-100 border border-gray-300 rounded-md">
                    <i className="fa-solid fa-location-dot"></i>
                  </span>
                  {tutor?.address.city}
                </p>
              </div>
              <div className="flex justify-center lg:justify-end lg:items-end mt-4 lg:mt-0">
                <button
                  onClick={() => {
                    setPopUp(true);
                  }}
                  className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                  Book a Session
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="space-y-2 border-dotted border-b-2 border-blue-400 w-full lg:w-2/3"
            >
              <h3 className="text-lg sm:text-xl font-semibold">About</h3>
              <p className="text-gray-600 py-3 text-sm sm:text-base">
                {tutor?.address?.about}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
      {popUp && <BookSession tutor={tutor} />}
    </>
  );
};

export default TutorDetails;
