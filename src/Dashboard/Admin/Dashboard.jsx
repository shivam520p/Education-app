import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faPen,
  faTachometerAlt,
  faUsers,
  faSignOutAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faCaretDown,
  faCaretRight,
  faList,
  faBook,
  faChevronDown,
  faChevronRight,
  faBookOpen,
  faLanguage,
  faChalkboard,
  faUser,
  faHome,
  faInfoCircle,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import AllUser from "./Users/AllUser";
import AllStudent from "./Users/AllStudent";
import AllTutor from "./Users/AllTutor";
import AllSubjects from "./Courses/AllSubjects";
import AllClasses from "./Courses/AllClasses";
import AllLanguage from "./Courses/AllLanguage";
import WriteContent from "./WriteContent";
import ContactForm from "./Users/ContactForm";
import AllLeads from "./Users/AllLeads";

const Dashboard = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [usersOpen, setUsersOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [pageOpen, setPageOpen] = useState(false);
  const [handleLink, setHandleLink] = useState("contactForm");
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="flex flex-col h-full">
      <div>
        <div className="py-5 text-xl font-bold border-b">Admin Panel</div>
        <ul className="space-y-2 py-5 cursor-pointer">
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => {
              setHandleLink("contactForm");
            }}
          >
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
            <span>Inquiries</span>
          </li>
          <li
            className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
            onClick={() => {
              setHandleLink("allLeads");
            }}
          >
            <FontAwesomeIcon icon={faList} className="mr-3" />
            <span>Leads</span>
          </li>

          <li
            className="flex items-center p-2 hover:Bg-white rounded-md cursor-pointer"
            onClick={() => setUsersOpen(!usersOpen)}
          >
            <FontAwesomeIcon icon={faUsers} className="mr-3" />
            <span>Users</span>
            <FontAwesomeIcon
              icon={usersOpen ? faCaretDown : faCaretRight}
              className="ml-auto"
            />
          </li>
          {usersOpen && (
            <ul className="pl-8 space-y-2">
              <li
                className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
                onClick={() => setHandleLink("allusers")}
              >
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                <span>All Users</span>
              </li>
              <li
                className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
                onClick={() => {
                  setHandleLink("allstudents");
                }}
              >
                <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
                <span>Students</span>
              </li>
              <li
                className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
                onClick={() => {
                  setHandleLink("alltutors");
                }}
              >
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />
                <span>Tutors</span>
              </li>
            </ul>
          )}
          <li
            className="flex items-center p-2 hover:Bg-white rounded-md cursor-pointer"
            onClick={() => setCourseOpen(!courseOpen)}
          >
            <FontAwesomeIcon icon={faBook} className="mr-3" />{" "}
            <span>All Subject</span>
            <FontAwesomeIcon
              icon={courseOpen ? faChevronDown : faChevronRight}
              className="ml-auto"
            />
          </li>

          {courseOpen && (
            <ul className="pl-8 space-y-2">
              <li
                className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
                onClick={() => {
                  setHandleLink("allsubjects");
                }}
              >
                <FontAwesomeIcon icon={faBookOpen} className="mr-3" />
                <span>Subjects</span>
              </li>
              <li
                className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
                onClick={() => {
                  setHandleLink("allclasses");
                }}
              >
                <FontAwesomeIcon icon={faChalkboard} className="mr-3" />
                <span> Classes</span>
              </li>
              <li
                className="flex items-center p-2 hover:bg-white hover:text-black rounded-md"
                onClick={() => {
                  setHandleLink("alllanguages");
                }}
              >
                <FontAwesomeIcon icon={faLanguage} className="mr-3" />
                <span>Languages</span>
              </li>
            </ul>
          )}
          <li
            className="flex items-center p-2 hover:Bg-white rounded-md cursor-pointer"
            onClick={() => setPageOpen(!pageOpen)}
          >
            <FontAwesomeIcon icon={faChalkboard} className="mr-3" />
            <span>Pages</span>
            <FontAwesomeIcon
              icon={pageOpen ? faCaretDown : faCaretRight}
              className="ml-auto"
            />
          </li>
          {pageOpen && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
                <FontAwesomeIcon icon={faHome} className="mr-3" />
                <Link to="/"> Home</Link>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />
                <Link to="/findtutor">Find Tutor</Link>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
                <FontAwesomeIcon icon={faInfoCircle} className="mr-3" />
                <Link to="/about">About</Link>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
                <FontAwesomeIcon icon={faEnvelope} className="mr-3" />
                <Link to="/contact">Contact Us</Link>
              </li>
            </ul>
          )}
          <li
            className="flex items-center p-2 hover:Bg-white rounded-md cursor-pointer"
            onClick={() => {
              setHandleLink("writeContent");
            }}
          >
            <FontAwesomeIcon icon={faPen} className="mr-3" />
            <span>Write Content</span>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <ul>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
            <button
              onClick={() => {
                localStorage.clear();
                navigate("/");
              }}
            >
              Logout
            </button>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full">
      {/* Mobile Drawer - Updated with transition */}
      <div
        className={`fixed inset-0 z-10 md:hidden transition-all duration-300 ease-in-out ${
          mobileOpen ? "visible" : "invisible"
        }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${
            mobileOpen ? "opacity-50" : "opacity-0"
          }`}
          onClick={handleDrawerToggle}
        ></div>

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          {drawer}
        </div>
      </div>

      {/* Desktop Drawer */}
      <div className="hidden md:block">
        <div className="w-64 bg-blue-800 text-white p-4 h-full fixed">
          {drawer}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col md:ml-64">
        {/* Header */}
        <header className="bg-blue-800 text-white p-4 flex items-center justify-between">
          <button className="text-white md:hidden" onClick={handleDrawerToggle}>
            <FontAwesomeIcon icon={faBars} />
          </button>
          <div className="text-xl font-bold">
            <Link to="/">
              <FontAwesomeIcon icon={faHome} className="mr-2" />Home
            </Link>
          </div>
        </header>

        {/* Main Content Area */}
        <main>
          {handleLink === "contactForm" && <ContactForm />}
          {handleLink === "allLeads" && <AllLeads />}
          {handleLink === "allusers" && <AllUser />}
          {handleLink === "allstudents" && <AllStudent />}
          {handleLink === "alltutors" && <AllTutor />}
          {handleLink === "allsubjects" && <AllSubjects />}
          {handleLink === "allclasses" && <AllClasses />}
          {handleLink === "alllanguages" && <AllLanguage />}
          {handleLink === "writeContent" && <WriteContent />}
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
