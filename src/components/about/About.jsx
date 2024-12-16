import React from "react";
import FeatureList from "../about/FeatureList";
import AboutImg1 from "../../assets/images/Blogs4.jpg";
import AboutImg2 from "../../assets/images/blogs5.jpg";
import FeatureList2 from "../about/FeatureList2";
import AboutCards from "../about/AboutCards";
import { motion } from "framer-motion";

export const AboutPage = () => {
  return (
    <>
     <section className="mt-24 px-4 bg-blue-50">
        <div className="container mx-auto flex flex-col justify-center items-center gap-5 py-16">
          <h1 className="text-5xl font-bold text-gray-700">About</h1>
          <div className="flex justify-center items-center gap-2 text-lg">
            <a href="/">
              <i className="fa-solid fa-house mr-2"></i>Home
            </a>
            <em>
              <i className="fa-solid fa-chevron-right"></i>
            </em>
            <a href="/about" className="text-amber-500">
              About
            </a>
          </div>
        </div>
      </section>
    <section className="py-5">
      <div className="container mx-auto flex flex-col gap-10">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex flex-col md:flex-row gap-10"
        >
          {/* Left Side Container */}
          <div className="w-full md:w-1/2 h-full flex flex-col lg:p-8 p-2">
            <div className="p-5">
              <span className="text-primary text-2xl font-normal">
                -- Mission --
              </span>
              <h1 className="lg:text-3xl text-2xl font-semibold tracking-wider py-2">
                Our Commitment: Empowering Learners
              </h1>
              <p className="lg:text-base text-sm text-slate-500 tracking-wide py-4">
                To empower learners of all ages and backgrounds by connecting
                them with expert tutors worldwide, fostering personalized and
                effective learning experiences that inspire growth, confidence,
                and lifelong success.
              </p>
              <FeatureList />
            </div>
          </div>

          {/* Right Side Container */}
          <div className="w-full md:w-1/2 h-full lg:p-10 p-4 pt-0">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={AboutImg1}
              alt="Mission Image"
              className="object-cover bg-center h-full w-full"
            />
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-5 flex flex-col md:flex-row gap-10"
        >
          {/* Left Side Container */}
          <div className="w-full md:w-1/2 h-full lg:p-10 p-4 pt-0">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              src={AboutImg2}
              alt="Vision Image"
              className="object-cover bg-center h-full w-full"
            />
          </div>

          {/* Right Side Container */}
          <div className="w-full md:w-1/2 h-full flex flex-col lg:p-8 p-2">
            <div className="p-5 pt-0">
              <span className="text-primary text-2xl font-normal">
                -- Vision --
              </span>
              <h1 className="lg:text-3xl text-2xl font-semibold tracking-wider py-2">
                Our Vision: Drive Learning Growth
              </h1>
              <p className="lg:text-base text-sm text-slate-500 tracking-wide py-4">
                To be the leading global platform for personalized education,
                where every student has access to the highest quality tutoring
                and every tutor can reach and impact learners across the globe,
                creating a future where education is tailored, accessible, and
                transformative for all.
              </p>
              <FeatureList2 />
              <button className="px-8 py-2 text-l bg-blue-500 m-5 rounded-lg text-white hover:shadow-md">
                Discover More
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center lg:p-10 p-5 gap-4"
      >
        <span className="text-cyan-500 text-2xl font-normal">
          -- Experienced tutors --
        </span>
        <h1 className="lg:text-4xl text-2xl font-semibold tracking-wider">
          Meet Our Top Educators
        </h1>
        <p className="text-m text-slate-500 tracking-wide">
          Discover how Lernen is making a difference in the lives of students
          and
        </p>
        <p className="lg:text-m text-sm text-slate-500 tracking-wide -mt-4">
          educational institutions. Hear from our satisfied users:
        </p>
      </motion.div>
      <AboutCards />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center justify-center lg:p-10 p-5 gap-4"
      >
        <span className="text-2xl font-normal text-green-600">
          -- Key Achievements --
        </span>
        <h1 className="lg:text-4xl text-2xl font-bold tracking-widest">
          Our Commitment to Excellence
        </h1>
        <p className="text-m text-slate-500 tracking-wide">
          These figures highlight our ongoing efforts to maintain high standards <br /> and continuous improvement in all we do.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="container mx-auto lg:py-10 w-full"
        >
          <div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 lg:px-5">
            <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center p-6 shadow-md cursor-pointer">
              <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 2v20m10-10H2"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">40+</h3>
              <p className="text-gray-300">Active subjects</p>
            </div>

            <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center lg:p-6 p-2 shadow-md cursor-pointer">
              <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">124,234</h3>
              <p className="text-gray-300">Students enrolled</p>
            </div>

            <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center p-6 shadow-md cursor-pointer">
              <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M16 12v4m0-2H8m8-2l-4-4m0 0l-4 4"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">500+</h3>
              <p className="text-gray-300">Tutors available</p>
            </div>

            <div className="bg-slate-400 rounded-lg flex flex-col items-center justify-center p-6 shadow-md cursor-pointer">
              <div className="bg-slate-300 w-16 h-16 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-white w-8 h-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 17l-5 3 1-5-4-4 5-1 2-5 2 5 5 1-4 4 1 5-5-3z"></path>
                </svg>
              </div>
              <h3 className="text-3xl font-bold text-white">56,234</h3>
              <p className="text-gray-300">5 star reviews</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mt-5"
        >
          <h1 className="lg:text-4xl text-2xl font-semibold text-center tracking-wider -mb-10">
            What Our Users Are Saying
          </h1>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-10 lg:pt-10 pt-5">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                We have tried several tutoring platforms, but none compare to
                Lernen. The tutors are top-notch, and the booking process is
                incredibly smooth.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Arlene M</h3>
                  <p className="text-sm text-gray-500">Agile District</p>
                </div>
                <div className="text-yellow-500 flex">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                Lernen has been a game-changer for our students. The variety of
                tutors and ease of booking sessions make it a breeze for parents
                and students alike.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Marvin M</h3>
                  <p className="text-sm text-gray-500">Tutoring Specialist</p>
                </div>
                <div className="text-yellow-500 flex">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                Lernen is a fantastic resource for our students. The diverse
                range of tutors ensures that we can find the perfect match for
                each student's needs.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Devon L</h3>
                  <p className="text-sm text-gray-500">Classroom Teacher</p>
                </div>
                <div className="text-yellow-500 flex">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                Lernen is a dependable and effective tool for our agency,
                offering knowledgeable and dedicated tutors.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Ronald R</h3>
                  <p className="text-sm text-gray-500">
                    Educational Consultant
                  </p>
                </div>
                <div className="text-yellow-500 flex">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                Our experience with Lernen has been outstanding. The platform is
                user-friendly, and the tutors are highly qualified.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Darlene R</h3>
                  <p className="text-sm text-gray-500">Academic Advisor</p>
                </div>
                <div className="text-yellow-500 flex">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-lg">
              <p className="text-gray-700 mb-4">
                We’re delighted with Lernen. Its top-notch tutors and
                user-friendly platform have greatly boosted our students.
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-gray-900">Courtney H</h3>
                  <p className="text-sm text-gray-500">School Counselor</p>
                </div>
                <div className="text-yellow-500 flex">
                  <span>★★★★★</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
    </>
  );
};

export default AboutPage;
