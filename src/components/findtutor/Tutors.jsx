import React from 'react';
import { motion } from 'framer-motion';
import instructor1 from '../../assets/images/instructor-img1.png';
import instructor2 from '../../assets/images/instructor-img2.png';
import instructor3 from '../../assets/images/instructor-img3.png';

const Tutors = () => {
  const instructors = [
    {
      name: "Devon Lane",
      role: "Web Developer",
      courses: 7,
      students: "15k",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor1
    },
    {
      name: "John Doe",
      role: "WordPress Expert",
      courses: 6,
      students: "55k",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor2
    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor3
    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor3
    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor3
    },
    {
      name: "Alexandar",
      role: "UI/UX Designer",
      courses: 12,
      students: "36k",
      rating: 4.6,
      reviews: "2.4k",
      image: instructor3
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: 90,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <div className="px-4 py-16">
      <motion.div 
        className="text-center mb-8 md:mb-12 px-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-3 md:mb-4 text-gray-700">Course Instructors</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
          Join us on this journey of discovery, growth, and transformation. Together, let's shape a brighter future
        </p>
      </motion.div>

      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {instructors.map((instructor, index) => (
          <motion.div 
            key={index} 
            className="bg-white rounded-lg shadow-lg overflow-hidden"
            variants={cardVariants}
            whileHover="hover"
          >
            <div className="relative">
              <motion.img 
                src={instructor.image} 
                alt={instructor.name}
                className="w-full h-48 sm:h-56 md:h-64 object-cover object-center bg-yellow-300"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <motion.button 
                className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg border-2 border-gray-700"
                variants={buttonVariants}
                whileHover="hover"
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 5v14M5 12h14" />
                </svg>
              </motion.button>
            </div>

            <div className="p-4 md:p-6">
              <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{instructor.name}</h3>
              
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  <span>{instructor.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>{instructor.courses}</span>
                  <span>Course</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                  </svg>
                  <span>{instructor.students} Students</span>
                </div>
                <div className="flex items-center gap-1">
                  <span>⭐</span>
                  <span>{instructor.rating}</span>
                  <span className="text-gray-500">({instructor.reviews})</span>
                </div>
              </div>

              <motion.a 
                href="#" 
                className="text-blue-600 hover:text-blue-700 flex items-center gap-2"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                View Profile
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
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
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
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
          <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
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
  );
};

export default Tutors;
