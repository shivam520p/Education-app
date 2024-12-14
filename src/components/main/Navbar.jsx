import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCoursesDropdownOpen, setIsCoursesDropdownOpen] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobileMenuOpen && !event.target.closest('.mobile-menu-container')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const navLinks = [
    { title: "Home", path: "/" },
    { title: "Find Tutor", path: "/findtutor" },
    { title: "About", path: "/about" },
    { title: "Become a Tutor", path: "/tutorsection" },
    { title: "Contact Us", path: "/contact" },
  ];

  const courseLinks = [
    { title: "Courses", path: "/courses" },
    { title: "Subjects", path: "/courses/subjects" },
    { title: "Languages", path: "/courses/languages" },
    { title: "Programming", path: "/courses/programming" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="text-2xl md:text-3xl lg:text-4xl font-bold text-blue-500">
            Education
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Navigation Links */}
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="font-semibold text-base lg:text-lg hover:text-blue-600 transition-colors"
                    onClick={() => localStorage.setItem("heading", link.title)}
                  >
                    {link.title}
                  </Link>
                </li>
              ))}

              {/* Courses Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setIsCoursesDropdownOpen(true)}
                onMouseLeave={() => setIsCoursesDropdownOpen(false)}
              >
                <button className="flex items-center font-semibold text-base lg:text-lg hover:text-blue-600 transition-colors">
                  Courses
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform ${
                      isCoursesDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                {isCoursesDropdownOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {courseLinks.map((course) => (
                        <Link
                          key={course.path}
                          to={course.path}
                          className="block px-4 py-2 text-sm lg:text-base text-gray-700 hover:bg-gray-100 transition-colors"
                          onClick={() => localStorage.setItem("heading", course.title)}
                        >
                          {course.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </li>
            </ul>

            {/* Sign In Button */}
            <Link
              to="/login"
              className="px-6 py-2 bg-blue-600 text-white text-base lg:text-lg rounded-full hover:bg-blue-700 transition-colors"
              onClick={() => localStorage.setItem("heading", "Sign In")}
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 bg-white">
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-center p-4 border-b">
                <Link to="/" className="text-2xl font-bold text-blue-600">
                  Education
                </Link>
                <button
                  className="p-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex-1 overflow-y-auto">
                <ul className="px-4 py-2">
                  {navLinks.map((link) => (
                    <li key={link.path} className="border-b">
                      <Link
                        to={link.path}
                        className="block py-4 hover:text-blue-600 transition-colors"
                        onClick={() => {
                          localStorage.setItem("heading", link.title);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                  {courseLinks.map((course) => (
                    <li key={course.path} className="border-b">
                      <Link
                        to={course.path}
                        className="block py-4 hover:text-blue-600 transition-colors"
                        onClick={() => {
                          localStorage.setItem("heading", course.title);
                          setIsMobileMenuOpen(false);
                        }}
                      >
                        {course.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 border-t">
                <Link
                  to="/login"
                  className="block w-full py-3 text-center bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                  onClick={() => {
                    localStorage.setItem("heading", "Sign In");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
