import React from 'react'
import { motion } from 'framer-motion'
import tutorEm from "../../assets/images/tutorEm.png"

const PerfectSection = () => {
    return (
      <section className="max-w-7xl mx-auto px-4 lg:py-16 py-8 overflow-hidden">
        {/* Top buttons section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20"
        >
          <div className="text-center lg:border-r-2 border-gray-800">
            <h2 className="text-2xl font-semibold mb-4">Looking for Tutor?</h2>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Find Now
            </button>
          </div>
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Looking for Students?</h2>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Create free profile
            </button>
          </div>
        </motion.div>
  
        {/* Main content section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-12 gap-4 items-center px-2">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <h2 className="lg:text-4xl text-2xl font-semibold text-gray-800">
              A Perfect Tuition Teacher
            </h2>
            <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
              What are the criteria for a perfect Tuition Teacher? Highly Qualified,
              Experienced in teaching, capable to teach your child, etc., but there are some
              other factors you might miss. Comparing the qualifications and fees,
              availability in your locality, ability to understand a child's problem and solve it
              wisely, background check and verification, etc are the responsibilities we, at
              GharPeShiksha, pursue to provide you with the best tuition teacher.
            </p>
            <p className="lg:text-lg text-sm text-gray-600 leading-relaxed">
              Getting a kind and friendly teacher is more important than getting a qualified teacher.
              An understanding teacher will recognize your mental capabilities and speed
              so that he can mold his teaching methods and teach in such a way that the
              child gets maximum out of it. You can choose from thousands of Tuition
              Teachers available at GharPeShiksha.com according to your needs.
              Remember, you may find a tuition teacher offline, but surely not the 'Right to
              Choose' which you can only find at GharPeShiksha.
            </p>
            <button className="bg-blue-500 text-white px-8 py-3 rounded-full hover:bg-blue-600 transition-colors">
              Find Students Now
            </button>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center w-full"
          >
            <img 
              src={tutorEm} 
              alt="Tutor illustration" 
              className="max-w-full w-auto h-auto object-contain"
            />
          </motion.div>
        </div>
      </section>
    )
  }
  
  export default PerfectSection