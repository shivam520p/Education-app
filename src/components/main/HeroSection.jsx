import React from 'react';
import { motion } from 'framer-motion';
import home from '../../assets/images/home.png';
import Features from './Features';
import Features3 from './Features3';
import Features4 from './Features4';
import Features5 from './Features5';
import Features6 from './Features6';

const HeroSection = () => {
  return (
    <>
    <div className="container mx-auto my-24 px-4 flex items-center" id="home">
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
            Find Your <span className="text-orange-500">Ideal</span> Course, Build{' '}
            <span className="text-blue-600">Skills</span>
          </motion.h1>

          <motion.p
            className="text-gray-600 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            Welcome to Education, where learning knows no bounds. Whether you're a student,
            professional, or lifelong learner...
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <motion.a 
              href="/courses"
              className="bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Browse Courses
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </motion.a>
            <motion.a 
              href="/about"
              className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              About Us
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
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

            {/* Enrolled Students Card */}
            {/* <motion.div 
              className="absolute top-4 right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((_, i) => (
                  <motion.div 
                    key={i} 
                    className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1.2 + (i * 0.1) }}
                  />
                ))}
              </div>
              <span className="text-sm font-medium">36k+ Enrolled Students</span>
            </motion.div> */}

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
    <Features/>
    {/* <Features2/> */}
    <Features3/>
    <Features4/>
    <Features5/>
    <Features6/>
    </> 
  );
};

export default HeroSection;