import React, { useState } from "react";
import RecentClass from "./RecentClass";
import HowWorks from "./HowWorks";
import Frequently from "./Frequently";
import TutorSlider from "./TutorSlider";
import PerfectSection from "./PerfectSection";
import FAQ from "./FAQ";
import { motion } from "framer-motion";

const TutorSection = () => {
  const [isRegistering, setIsRegistering] = useState(true);

  return (
    <>
      <section className="lg:pt-16 pt-8">
      <div className="container mx-auto lg:py-16 py-8 px-4 lg:px-0">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:text-5xl text-2xl font-normal text-center"
        >
          Providing Home Tuition Opportunities
        </motion.h1>
        <div className="flex flex-col lg:h-[600px] lg:flex-row items-center lg:items-start lg:p-10 gap-8">
          <div className="flex flex-col lg:flex-row items-center justify-center lg:items-start w-full lg:w-1/2">
            <div className="space-y-8 lg:space-y-16 shiv relative">
              {/* Steps */}
              {[
                "Become a Teacher",
                "Share Your Knowledge",
                "Work Part-Time",
                "Earn Extra Income",
              ].map((text, index) => (
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center space-x-4 relative"
                  key={index}
                >
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center text-white text-3xl z-10">
                    {["👨‍🏫", "📖", "🕒", "💸"][index]}
                  </div>
                  <p className="text-lg lg:text-xl font-semibold">{text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/3 border-2 border-gray-800 lg:p-8 p-4 rounded-lg shadow-md mx-auto"
            id="tutor-form"
          >
            {/* Toggle Buttons */}
            <div className="text-center mb-6 flex flex-wrap justify-center gap-2">
              <button
                onClick={() => setIsRegistering(false)}
                className={`px-4 py-2 rounded-l-lg ${
                  !isRegistering
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Login to Your Profile
              </button>
              <button
                onClick={() => setIsRegistering(true)}
                className={`px-4 py-2 rounded-r-lg ${
                  isRegistering
                    ? "bg-gray-800 text-white"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                Register as a Tutor
              </button>
            </div>

            {/* Form */}
            {isRegistering ? (
              // Registration Form
              <form className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="fullName"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="mobile"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="text"
                    name="mobile"
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your mobile number"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="Password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 rounded-lg hover:shadow-md transition"
                >
                  Register Now
                </button>
              </form>
            ) : (
              // Login Form
              <form className="space-y-4">
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    className="w-full border rounded-lg p-2 focus:outline-primary"
                    placeholder="Enter your password"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-blue-600 transition"
                >
                  Login Now
                </button>
              </form>
            )}

            {/* Link to switch */}
            <p className="text-center mt-4 text-sm">
              {isRegistering ? (
                <>
                  Already have an account?{" "}
                  <button
                    onClick={() => setIsRegistering(false)}
                    className="text-blue-500 hover:underline"
                  >
                    Sign In here!
                  </button>
                </>
              ) : (
                <>
                  New to the platform?{" "}
                  <button
                    onClick={() => setIsRegistering(true)}
                    className="text-blue-500 hover:underline"
                  >
                    Register here!
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="bg-red-100 py-8 lg:py-10"
      >
        <h1 className="text-3xl text-center mb-8 lg:pb-6">
          Earning Potential
        </h1>
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Minimum Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-end justify-center lg:pr-16 border-b-2 lg:border-b-0 lg:border-r-4 border-black gap-4 text-center lg:text-right">
            <h2 className="text-xl lg:text-2xl font-normal">Minimum</h2>
            <span className="text-lg">
              <i className="fa-solid fa-indian-rupee-sign"></i> 10,000+
            </span>
            <p className="text-sm lg:text-base">per month @2hr/day</p>
          </div>

          {/* Maximum Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start justify-center gap-4 text-center lg:text-left">
            <h2 className="text-xl lg:text-2xl font-normal">Maximum</h2>
            <span className="text-lg">
              <i className="fa-solid fa-indian-rupee-sign"></i> 25,000+
            </span>
            <p className="text-sm lg:text-base">per month @3-5hr/day</p>
          </div>
        </div>
        <div className="flex justify-center pt-6 pr-12">
          <a
            href="#tutor-form"
            className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:shadow-md transition duration-300 hover:bg-gray-900"
          >
            Register Now
          </a>
        </div>
      </motion.div>

      <RecentClass />
      <HowWorks />
      <Frequently />
      <TutorSlider />
      <PerfectSection />
      <FAQ />
      </section>
    </>
  );
};

export default TutorSection;
