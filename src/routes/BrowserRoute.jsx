import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import About from "../components/about/About";
import TutorSection from "../components/TutorSection/TutorSection";
import Contact from "../components/contact/Contact";
import { FindTutor } from "../components/findtutor/FindTutor";

export const BrowserRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/findtutor" element={<FindTutor />} />
        <Route path="/about" element={<About />} />
        <Route path="/tutorsection" element={<TutorSection />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};
