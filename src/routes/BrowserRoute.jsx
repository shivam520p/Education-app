import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/main/Navbar";
import HeroSection from "../components/main/HeroSection";
import Footer from "../components/main/Footer";
import About from "../components/about/About";
import TutorSection from "../components/TutorSection/TutorSection";
import Contact from "../components/contact/Contact";
import { FindTutor } from "../components/findtutor/FindTutor";
import GetStarted from "../components/user/GetStarted";
import Register from "../components/user/Register";
import AllCourse from "../components/courses/AllCourse";
import AllLanguage from "../components/courses/AllLanguage";
import AllSubjects from "../components/courses/AllSubjects";
import AllClasses from "../components/courses/AllClasses";
import TutorDetails from "../components/findtutor/TutorDetails";
import Dashboard from "../Dashboard/Admin/Dashboard";
import TutorDashboard from "../Dashboard/Tutor/TutorDashboard";
import StudentDashboard from "../Dashboard/Student/StudentDashboard";

export const BrowserRoute = () => {
  const location = useLocation();
  const isLocation= location.pathname ==='/Dashboard' || location.pathname ==='/tutordashboard' || location.pathname ==='/studentdashboard';
  return (
    <>
      {!isLocation && <Navbar />}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/findtutor" element={<FindTutor />} />
        <Route path="/instructordetails" element={<TutorDetails />} />
        <Route path="/courses" element={<AllCourse />} />
        <Route path="/courses/languages" element={<AllLanguage />} />
        <Route path="/courses/subjects" element={<AllSubjects />} />
        <Route path="/courses/classes" element={<AllClasses />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorsection" element={<TutorSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<GetStarted />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/tutordashboard" element={<TutorDashboard />} />
        <Route path="/studentdashboard" element={<StudentDashboard />} />
      </Routes>
      {!isLocation && <Footer />}
    </>
  );
};
