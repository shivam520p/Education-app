import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faTachometerAlt,
  faCog,
  faSignOutAlt,
  faUserGraduate,
  faChalkboardTeacher,
  faBook,
  faUser,
  faCaretDown,
  faPlusCircle
} from '@fortawesome/free-solid-svg-icons';
import ProfileSettings from '../../Dashboard/Tutor/ProfileSettings';
import EducationSettings from '../../Dashboard/Tutor/EducationSettings';
import ExperienceDetails from '../../Dashboard/Tutor/ExperienceDetails';
import CertificationDetails from '../../Dashboard/Tutor/CertificationDetails';
import ChangePassword from '../../Dashboard/Tutor/ChangePassword';
import AddYourCourse from './AddYourCourse';

const TutorDashboard = () => {
  const navigate=useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [handleLink, setHandleLink] = useState('profilesettings');
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
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
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={()=>{setHandleLink("profilesettings")}}>
            <FontAwesomeIcon icon={faUser} className="mr-3" />
           <span>Profile Settings</span>
          </li>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={()=>{setHandleLink("educationsettings")}}>
            <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
            <span>Education Details</span>
          </li>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={()=>{setHandleLink("experiencesettings")}}>
            <FontAwesomeIcon icon={faChalkboardTeacher} className="mr-3" />
            <span>Experience Details</span>
          </li>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={()=>{setHandleLink("certificationsettings")}}>
            <FontAwesomeIcon icon={faBook} className="mr-3" />
            <span>Certification Details</span>
          </li>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md" onClick={()=>{setHandleLink("addyourcourse")}}>
            <FontAwesomeIcon icon={faPlusCircle} className="mr-3" />
            <span>Add Your Course</span>
          </li>
          <li className="relative">
            <div 
              className="flex items-center p-2 hover:bg-white hover:text-black rounded-md cursor-pointer"
              onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            >
              <FontAwesomeIcon icon={faCog} className="mr-3" />
              <span>Settings</span>
              <FontAwesomeIcon icon={faCaretDown} className="ml-24" />
            </div>
            {isSettingsOpen && (
              <ul className="absolute left-0 w-full rounded-md mt-1">
                <li 
                  className="flex items-center p-2 hover:bg-white hover:text-black rounded-md cursor-pointer"
                  onClick={() => setHandleLink("changepassword")}
                >
                  <FontAwesomeIcon icon={faCog} className="mr-3 ml-7" />
                  <span>Change Password</span>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
      <div className="mt-auto">
        <ul>
          <li className="flex items-center p-2 hover:bg-white hover:text-black rounded-md">
            <FontAwesomeIcon icon={faSignOutAlt} className="mr-3" />
            <button onClick={()=>{localStorage.clear();
              navigate("/")
            }}>Logout</button>
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
        <main className="flex-1 overflow-y-auto">
          {handleLink === 'profilesettings' && <ProfileSettings/>}
          {handleLink === 'educationsettings' && <EducationSettings/>}
          {handleLink === 'experiencesettings' && <ExperienceDetails/>}
          {handleLink === 'certificationsettings' && <CertificationDetails/>}
          {handleLink === 'addyourcourse' && <AddYourCourse/>}
          {handleLink === 'changepassword' && <ChangePassword/>}
        </main>
      </div>
    </div>
  );
};

export default TutorDashboard;
