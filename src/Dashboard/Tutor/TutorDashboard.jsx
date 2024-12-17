import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTachometerAlt,
  faUsers,
  faCog,
  faSignOutAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faCaretDown,
  faCaretRight,
  faBook,
  faBookOpen,
  faLanguage,
  faChalkboard,
  faUser
} from '@fortawesome/free-solid-svg-icons';


const TutorDashboard = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [courseOpen, setCourseOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
  const [handleLink, setHandleLink] = useState('');
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div className="flex flex-col h-full">
      <div>
        <div className="py-5 text-xl font-bold border-b">Tutor Panel</div>
        <ul className="space-y-2 py-5 cursor-pointer">
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
            <FontAwesomeIcon icon={faTachometerAlt} className="mr-3" />
            <Link to="/">Dashboard</Link>
          </li>
          <li className="flex items-center p-2 hover:Bg-white rounded-md cursor-pointer" onClick={() => setProfileOpen(!profileOpen)}>
            <FontAwesomeIcon icon={faUsers} className="mr-3" />
            <span>Profile Settings</span>
            <FontAwesomeIcon
              icon={profileOpen ? faCaretDown : faCaretRight}
              className="ml-auto"
            />
          </li>
          {profileOpen && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={() => setHandleLink('personaldetails')}>
                <FontAwesomeIcon icon={faUser} className="mr-3" />
                <span>Personal Details</span>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={() => { setHandleLink('addressdetails') }}>
                <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
                <span>Address Details</span>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={() => { setHandleLink('educationdetails') }}>
                <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />
                <span>Education Details</span>
              </li>
            </ul>
          )}
          <li className="flex items-center p-2 hover:Bg-white rounded-md cursor-pointer" onClick={() => setCourseOpen(!courseOpen)}>
            <FontAwesomeIcon icon={faUsers} className="mr-3" />
            <span>All Subject</span>
            <FontAwesomeIcon
              icon={courseOpen ? faCaretDown : faCaretRight}
              className="ml-auto"
            />
          </li>
          {courseOpen && (
            <ul className="pl-8 space-y-2">
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={() => { setHandleLink('allcourses') }}>
                <FontAwesomeIcon icon={faBook} className="mr-3" />
                <span> Courses</span>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={() => { setHandleLink('allsubjects') }} >
                <FontAwesomeIcon icon={faBookOpen} className="mr-3" />
                <span>Subjects</span>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={() => { setHandleLink('allclasses') }}>
                <FontAwesomeIcon icon={faChalkboard} className="mr-3" />
                <span> Classes</span>
              </li>
              <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={() => { setHandleLink('alllanguages') }}>
                <FontAwesomeIcon icon={faLanguage} className="mr-3" />
                <span>Languages</span>
              </li>
            </ul>
          )}
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
            <FontAwesomeIcon icon={faCog} className="mr-3" />
            <Link to="/settings">Settings</Link>
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <ul>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full">
      {/* Mobile Drawer - Updated with transition */}
      <div
        className={`fixed inset-0 z-10 md:hidden transition-all duration-300 ease-in-out ${mobileOpen ? 'visible' : 'invisible'
          }`}
      >
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-black transition-opacity duration-300 ${mobileOpen ? 'opacity-50' : 'opacity-0'
            }`}
          onClick={handleDrawerToggle}
        ></div>

        {/* Drawer Panel */}
        <div
          className={`fixed top-0 left-0 h-full w-64 bg-white transform transition-transform duration-300 ease-in-out ${mobileOpen ? 'translate-x-0' : '-translate-x-full'
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
          <div className="text-xl font-bold">Profile</div>
        </header>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* {handleLink === 'allusers' && <AllUser />}
          {handleLink === 'allstudents' && <AllStudent />}
          {handleLink === 'alltutors' && <AllTutor />}
          {handleLink === 'allcourses' && <AllCourses />}
          {handleLink === 'allsubjects' && <AllSubjects />}
          {handleLink === 'allclasses' && <AllClasses />}
          {handleLink === 'alllanguages' && <AllLanguage />} */}
        </main>
      </div>
    </div>
  );
};

export default TutorDashboard;
