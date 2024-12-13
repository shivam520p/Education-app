import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition-all duration-500 ease-in-out py-5 ${
        scrolled ? "bg-gray-800 text-white" : "bg-transparent"
      } fixed top-0 left-0 w-full z-50`}
    >
      <nav className="container mx-auto flex justify-between items-center px-4">
        {/* Logo Section */}
        <div className="text-3xl font-bold">
          <Link to="/">Education</Link>
        </div>

        {/* Desktop Navigation Links Section */}
        <div className="hidden md:flex space-x-8">
          <ul className="flex space-x-8 text-lg">
            <li className="hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/findtutor">Find Tutor</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/about">About</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/tutorsection">Become a Tutor</Link>
            </li>
            <li className="hover:text-blue-600">
              <Link to="/contact">Contact Us</Link>
            </li>
            {/* <li className="hover:text-blue-600">
              <Link to="/blogs">Blogs</Link>
            </li> */}
          </ul>
        </div>

        {/* Sign Up Button for large and small screens */}
        <div className="hidden md:flex space-x-4">
          <button
            className={`px-8 py-3 bg-gray-800 rounded ${
              scrolled ? "text-black bg-white hover:bg-gray-200" : "bg-gray-800 text-white hover:shadow-md"
            }`}
          >
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className={`${scrolled ? "text-white" : "text-black"} focus:outline-none`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile Menu (Visible when toggled) */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-800 text-white py-4 px-4 space-y-4">
            <ul className="space-y-4">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/find-tutor">Find Tutor</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/tutorsection">Become a Tutor</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>

            <div className="mt-4">
              <button className="w-full px-4 py-2 bg-white rounded text-black hover:bg-gray-200">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
