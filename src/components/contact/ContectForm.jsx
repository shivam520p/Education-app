import React from "react";
import waveBg from "../../assets/images/wave-bg.png";
import { motion } from "framer-motion";

const ContectForm = () => {
  return (
    <>
      <section className="py-8 md:py-16 relative">
        <img
          src={waveBg}
          alt="wave-bg"
          className="w-full h-full object-cover absolute top-0 left-0 z-0"
        />

        <div className="container mx-auto px-4 md:px-8 lg:px-24 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
            {/* Left side content */}
            <motion.div
              initial={{ opacity: 0, x: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 text-center lg:text-left"
            >
              <div className="mb-6">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className="text-blue-500 text-lg md:text-xl"
                >
                  Contact Us
                </motion.span>
                <motion.h2
                  whileHover={{ scale: 1.02 }}
                  className="text-3xl md:text-4xl font-bold mt-2 mb-4 text-gray-700"
                >
                  Have questions? don't hesitate to contact us
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-gray-600 text-sm md:text-base"
                >
                  We are passionate about transforming lives through education.
                  Founded with a vision to make learning accessible to all, we
                  believe in the power of knowledge to unlock opportunities and
                  shape the future.
                </motion.p>
              </div>

              {/* Reviews section */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center gap-4 justify-center lg:justify-start"
              >
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4, 5, 6].map((item) => (
                    <motion.div
                      key={item}
                      whileHover={{ scale: 1.1, zIndex: 10 }}
                      className="w-8 md:w-10 h-8 md:h-10 rounded-full bg-gray-300 border-2 border-white"
                    />
                  ))}
                </div>
                <motion.div whileHover={{ scale: 1.05 }}>
                  <div className="flex text-yellow-400 mb-1">
                    {"★".repeat(4)}
                    {"★".slice(0, 0.5)}
                  </div>
                  <p className="text-xs md:text-sm text-gray-600">
                    2.5k+ reviews (4.95 of 5)
                  </p>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side form */}
            <motion.div
              initial={{ opacity: 0, x: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2 bg-white rounded-lg p-4 mx-0 md:mx-4 lg:mx-20 shadow-lg mt-8 lg:mt-0"
            >
              <div className="p-4 md:p-6 bg-blue-50 rounded-lg">
                <motion.h2
                  whileHover={{ scale: 1.02 }}
                  className="text-xl md:text-2xl font-bold mb-6 border-dashed border-b-2 border-gray-200 pb-2"
                >
                  Get In Touch
                </motion.h2>

                <form>
                  <div className="mb-4">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Name
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="text"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                      placeholder="Enter Name..."
                    />
                  </div>

                  <div className="mb-4">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Email
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                      placeholder="Enter Email..."
                    />
                  </div>

                  <div className="mb-4">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Phone
                    </motion.label>
                    <motion.input
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      type="tel"
                      className="w-full px-3 md:px-4 py-2 md:py-3 border rounded-lg focus:outline-none focus:border-blue-500 text-sm md:text-base"
                      placeholder="Enter Your Number..."
                    />
                  </div>

                  <div className="mb-6">
                    <motion.label
                      whileHover={{ scale: 1.02 }}
                      className="block text-gray-700 mb-2 text-sm md:text-base"
                    >
                      Message
                    </motion.label>
                    <motion.textarea
                      whileFocus={{ scale: 1.02 }}
                      whileHover={{ scale: 1.01 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className="w-full px-3 md:px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-500 h-24 md:h-32 text-sm md:text-base"
                      placeholder="Enter Your Message..."
                    />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-1/2 bg-blue-600 text-white py-2 md:py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm md:text-base"
                    type="submit"
                  >
                    Send Message<i className="fa-solid fa-arrow-right ml-2"></i>
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContectForm;
