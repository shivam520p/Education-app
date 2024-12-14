import React from "react";
import Icon1 from "../../assets/images/feature-icon1.png";
import Icon2 from "../../assets/images/feature-icon2.png";
import Icon3 from "../../assets/images/feature-icon3.png";
import { motion } from "framer-motion";

const Features = () => {
  const categories = [
    {
      icon: Icon1,
      title: "Language Learning",
      description:
        "Courses teaching languages such as English, Spanish, French, Mandarin, etc.",
      link: "#",
    },
    {
      icon: Icon2,
      title: "Creative Arts & Design",
      description:
        "Courses on graphic design, digital art, photography, video editing, etc.",
      link: "#",
    },
    {
      icon: Icon3,
      title: "Health & Fitness",
      description:
        "Courses on nutrition, fitness training, yoga, meditation, wellness coaching, etc.",
      link: "#",
    },
  ];

  return (
    <section className="py-8 sm:py-10 px-4 bg-white">
      <div className="container mx-auto text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-gray-700"
        >
          <span className="px-2 sm:px-4 py-1 sm:py-2">Explore 4,000+ Online Courses</span>
          <br />
          <span className="px-2 sm:px-4 py-1 sm:py-2 mt-2 inline-block">
            and Subjects For Students
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mb-8 sm:mb-12 text-base sm:text-lg px-2"
        >
          <span className="px-2 sm:px-4 py-1">
            Welcome to our diverse and dynamic course catalog, we're dedicated to providing
            {/* Use responsive line break */}
            <span className="hidden sm:inline"><br /></span>
            you with access to high-quality education
          </span>
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 px-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.3 }
              }}
              transition={{ duration: 0.6, delay: index * 0.2 + 0.4 }}
              className="bg-blue-50 shadow-sm rounded-lg p-4 sm:p-6 lg:p-8 flex flex-col items-center text-center group hover:bg-gray-700 transition-all duration-300"
            >
              <div className="mb-4 sm:mb-6 w-24 sm:w-28 lg:w-32 h-24 sm:h-28 lg:h-32 rounded-full flex justify-center items-center bg-white group-hover:bg-white">
                <img
                  src={category.icon}
                  alt={category.title}
                  className="object-contain w-16 sm:w-20 lg:w-24"
                />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4 text-gray-800 group-hover:text-white">
                {category.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 group-hover:text-white">
                {category.description}
              </p>
              <a
                href={category.link}
                className="text-blue-500 text-base sm:text-lg hover:text-blue-600 hover:border-b-2 hover:border-white inline-flex items-center group-hover:text-white"
              >
                View Category
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
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="flex justify-center mt-8 sm:mt-12 space-x-4"
        >
          <button className="p-1.5 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
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
          <button className="p-1.5 sm:p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition duration-300">
            <svg
              className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
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
    </section>
  );
};

export default Features;