import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

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
      className={`transition-all duration-500 ease-in-out py-3 ${
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
            <li className="font-semibold hover:text-blue-600">
              <Link to="/">Home</Link>
            </li>
            <li className="font-semibold hover:text-blue-600">
              <Link to="/findtutor">Find Tutor</Link>
            </li>
            <li 
              className="relative font-semibold hover:text-blue-600"
              onMouseEnter={() => setIsCoursesDropdownOpen(true)}
              onMouseLeave={() => setIsCoursesDropdownOpen(false)}
            >
              <Link to="/courses" className="flex items-center">
                Courses
                <svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </Link>
              
              {/* Dropdown Menu */}
              {isCoursesDropdownOpen && (
                <div className="absolute left-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Link
                      to="/courses"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Courses
                    </Link>
                    <Link
                      to="/courses/subjects"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Subjects
                    </Link>
                    <Link
                      to="/courses/languages"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Languages
                    </Link>
                    <Link
                      to="/courses/programming"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Programming
                    </Link>
                  </div>
                </div>
              )}
            </li>
            <li className="font-semibold hover:text-blue-600">
              <Link to="/about">About</Link>
            </li>
            <li className="font-semibold hover:text-blue-600">
              <Link to="/tutorsection">Become a Tutor</Link>
            </li>
            <li className="font-semibold hover:text-blue-600">
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
          ><Link to ="/login">
            Get Started
          </Link>
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
