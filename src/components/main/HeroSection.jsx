import React, { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import home from "../../assets/images/home.png";
import Tutors from "../findtutor/Tutors";
import AllSubjects from "../courses/AllSubjects";
import AllClasses from "../courses/AllClasses";
import AllLanguages from "../courses/AllLanguage";
import TitleSection from "./TitleSection";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState("subjects");
  const tabs = [
    { id: "subjects", label: "Subjects", component: AllSubjects },
    { id: "classes", label: "Classes", component: AllClasses },
    { id: "languages", label: "Languages", component: AllLanguages },
  ];
  const {getAllLeadsFromUser}= useContext(AdminContext);
  useEffect(()=>{
    getAllLeadsFromUser();
  },[])

  return (
    <>
      <div className="container mx-auto my-24 px-4 flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              className="inline-flex items-center bg-blue-50 rounded-full px-4 py-2 text-blue-600"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
            >
              <span className="text-2xl">• Your Future, Achieve Success</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Find Your <span className="text-orange-500">Ideal</span> Course,
              Build <span className="text-blue-600">Skills</span>
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              Welcome to Education, where learning knows no bounds. Whether
              you're a student, professional, or lifelong learner...
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.a
                href="#courses"
                className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition flex items-center cursor-pointer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Browse Courses
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
              <motion.a
                href="/about"
                className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About Us
                <svg
                  className="w-4 h-4 ml-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="relative">
              <motion.img
                src={home}
                alt="home img"
                className="rounded-2xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
              />
              {/* Discount Badge */}
              <motion.div
                className="absolute bottom-4 left-4 bg-purple-600 text-white rounded-lg px-4 py-2"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
              >
                <div className="text-sm font-bold">20% OFF</div>
                <div className="text-xs">For All Courses</div>
              </motion.div>

              {/* Support Badge */}
              <motion.div
                className="absolute bottom-4 right-4 bg-white rounded-lg px-4 py-2 shadow-lg"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <div className="text-sm font-medium">Online Support</div>
                <div className="text-blue-600">(704) 555-0127</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* Tutors section */}
      
      <Tutors />

      {/* Subject, Class and Language section */}
      <div className="container mx-auto px-4" id="courses">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center pb-8 md:pb-12">
          Tutors According to your needs
        </h1>
        <div className="flex flex-col sm:flex-row w-full sm:w-2/3 mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`border-2 py-2 md:py-3 mb-2 sm:mb-0 w-full sm:w-1/3 transition-colors font-semibold text-sm md:text-base ${
                activeTab === tab.id 
                  ? "bg-blue-600 text-white" 
                  : "bg-white text-blue-600 hover:bg-blue-50"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="mt-4 md:mt-6">
          {tabs.map((tab) => 
            activeTab === tab.id && <tab.component key={tab.id} />
          )}
        </div>
      </div>

      <TitleSection/>
    </>
  );
};

export default HeroSection;
