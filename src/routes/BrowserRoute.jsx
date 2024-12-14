import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import About from "../components/about/About";
import TutorSection from "../components/TutorSection/TutorSection";
import Contact from "../components/contact/Contact";
import { FindTutor } from "../components/findtutor/FindTutor";
import GetStarted from "../components/user/GetStarted"
import Register from "../components/user/Register";
import AllCourse from "../components/courses/AllCourse";
import AllLanguage from "../components/courses/AllLanguage";
import AllSubjects from "../components/courses/AllSubjects";
import Programming from "../components/courses/Programming";

export const BrowserRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/findtutor" element={<FindTutor />} />
        <Route path="/courses" element={<AllCourse />} />
        <Route path="/courses/languages" element={<AllLanguage />} />
        <Route path="/courses/subjects" element={<AllSubjects />} />
        <Route path="/courses/programming" element={<Programming />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorsection" element={<TutorSection />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<GetStarted/>}/>
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <Footer />
    </>
  );
};
