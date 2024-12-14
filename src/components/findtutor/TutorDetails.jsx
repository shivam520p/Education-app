import React from 'react';
import { motion } from 'framer-motion';
import { FaTwitter, FaInstagram, FaPinterest, FaGlobe } from 'react-icons/fa';
import Tutors from './Tutors';

const TutorDetails = () => {
 const tutorDetails = JSON.parse(localStorage.getItem("tutorDetails"));

  return (
    <>
    <section className="mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">Instructor Details</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
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
    <div>
      {
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-start justify-center gap-10 px-16 py-10">
            {/* Left Side - Profile Image */}
            <div className="md:w-1/3 max-w-[400px] flex-shrink-0 px-3 py-3 bg-blue-100">
              <div className="bg-white rounded-lg overflow-hidden">
                <img
                  src={tutorDetails.image}
                  alt="Instructor"
                  className="w-full h-full object-cover"
                  />
              </div>
              
              {/* Social Links */}
              <div className="flex justify-center gap-4 mt-8">
                <motion.a
                  whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                  href="#"
                  className="text-gray-600 hover:text-blue-400"
                  >
                  <FaTwitter size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#E4405F" }}
                  href="#"
                  className="text-gray-600 hover:text-pink-500"
                  >
                  <FaInstagram size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#E60023" }}
                  href="#"
                  className="text-gray-600 hover:text-red-600"
                  >
                  <FaPinterest size={24} />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.2, color: "#0077B5" }}
                  href="#"
                  className="text-gray-600 hover:text-blue-600"
                  >
                  <FaGlobe size={24} />
                </motion.a>
              </div>
            </div>

            {/* Right Side - Information */}
            <div className="space-y-4 w-2/3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                >
                <p className='text-blue-400 font-bold'>Instructor</p>
                <h2 className="text-3xl font-bold text-gray-800">
                  {tutorDetails.name}
                </h2>
                <p className="text-gray-600">{tutorDetails.role}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
                >
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                  <p className="font-semibold">{tutorDetails.specialty}</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Courses</p>
                  <p className="font-semibold">{tutorDetails.courses} Course</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Students</p>
                  <p className="font-semibold">{tutorDetails.students}k Students</p>
                </div>
                <div className="bg-yellow-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-600">Rating</p>
                  <p className="font-semibold">{tutorDetails.rating} ({tutorDetails.reviews}k)</p>
                </div>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="space-y-3 py-8 border-dotted border-b-2 border-blue-400 w-2/3"
                >
                <h3 className="text-xl font-semibold">Contact</h3>
                <p className="flex items-center gap-2 text-lg">
                  <span className="text-gray-600 px-2 py-1 bg-blue-100 border border-gray-300 rounded-md"><i className="fa-solid fa-phone"></i></span>
                  +91 {tutorDetails.phone}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <span className="text-gray-600 px-2 py-1 bg-blue-100 border border-gray-300 rounded-md"><i className="fa-solid fa-envelope"></i></span>
                  {tutorDetails.email}
                </p>
                <p className="flex items-center gap-2 text-lg">
                  <span className="text-gray-600 px-2.5 py-1 bg-blue-100 border border-gray-300 rounded-md"><i className="fa-solid fa-location-dot"></i></span>
                  {tutorDetails.address}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="space-y-2 border-dotted border-b-2 border-blue-400 w-2/3"
                >
                <h3 className="text-xl font-semibold">About</h3>
                <p className="text-gray-600 py-3">{tutorDetails.about}</p>
              </motion.div>
            </div>
          </div>
        </div>
      }
    </div>
    <Tutors/>
      </>
  );
};

export default TutorDetails;