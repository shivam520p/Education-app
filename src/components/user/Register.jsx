import React, { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SignInImg from "../../assets/images/account-img.png";
import { CommonComponent } from "../../hooks/CommonState";

const Register = () => {
  const { setCommonState } = useContext(CommonComponent);
  return (
    <>
    <section className="mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">Sign Up</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/register" className="text-amber-500">
              Sign Up
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white px-4 py-16">
        <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">
          {/* Left Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="rounded-lg shadow-lg w-full lg:w-1/3 py-3 px-3"
          >
            <div className="bg-white px-6 md:px-10 py-10 rounded-lg">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
                Let's Get Started!
              </h1>
              <p className="text-gray-500 mt-2">
                Please Enter your Email Address to Start
              </p>

              {/* Form */}
              <div className="mt-6">
                <label className="block text-base md:text-lg font-medium text-gray-700">
                  Enter Full Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Full Name..."
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="block text-base md:text-lg font-medium text-gray-700 mt-4">
                  Enter Email ID
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email..."
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="block text-base md:text-lg font-medium text-gray-700 mt-4">
                  Enter Mobile Number
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Mobile Number..."
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <label className="block text-base md:text-lg font-medium text-gray-700 mt-4">
                  Enter Password
                </label>
                <input
                  type="password"
                  placeholder="Enter Your Password..."
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  Sign Up
                </motion.button>

                <p className="text-lg text-gray-500 text-center mt-4">
                  Already have an account?{" "}
                  <Link to="/login">
                    <button className="text-blue-500 hover:underline" onClick={() => setCommonState("Sign In")}>
                      Sign In
                    </button>
                  </Link>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:flex items-center justify-center w-full lg:w-2/3"
          >
            <img
              src={SignInImg}
              alt="Welcome Illustration"
              className="max-w-full md:max-w-xl"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Register;
