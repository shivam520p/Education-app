import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";

const AllUser = () => {
  const { getAllUsers, allStudent, allTutor } = useContext(AdminContext);
  useEffect(() => {
    getAllUsers();
  },[]);

  return (
    <>
      <div className="w-full h-auto p-2 md:p-4 rounded-lg">
        <h1 className="text-xl md:text-3xl text-center pb-3 md:pb-5 px-1">
          All Users
        </h1>

        {/* Tutors Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold pb-4">Tutors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-hidden">
            {/* Tutors mapping */}
            {allTutor &&
              allTutor.map((tutor, index) => (
                <div
                  key={index}
                  className="flex flex-col justify-center items-center bg-blue-100 shadow-md rounded-lg p-3"
                >
                  <div className="w-full bg-white p-4 rounded-lg">
                    <div className="flex flex-col justify-between items-center pb-2">
                      <img
                        src={tutor.userId.avatar}
                        alt=""
                        className="w-32 h-32 border object-cover rounded-full shadow-lg"
                      />
                    </div>
                    <div className="w-full flex justify-start items-start border-t-2 border-red-300 pt-2">
                      <div className="">
                        <h3 className="text-xl">
                          Name:{" "}
                          <span className="text-gray-700 text-lg">
                            {tutor.userId.fullName}
                          </span>
                        </h3>
                        <p className="text-xl">
                          Email:
                          <span className="text-gray-700 text-lg">
                            {tutor.userId.email}
                          </span>
                        </p>
                        <p className="text-xl">
                          Mobile:
                          <span className="text-gray-700 text-lg">
                            {tutor.userId.mobile}
                          </span>
                        </p>
                        <p className="text-xl">
                          Date Of Birth:
                          <span className="text-gray-700 text-lg">
                            {tutor.address.dateOfBirth}
                          </span>
                        </p>
                        <p className="text-xl">
                          Gender:
                          <span className="text-gray-700 text-lg">
                            {tutor.address.gender}
                          </span>
                        </p>
                        <p className="text-xl">
                          Address:
                          <span className="text-gray-700 text-lg">
                            {tutor.address.city},{tutor.address.state}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Students Section */}
        <div>
          <h2 className="text-2xl font-semibold pb-4">Students</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {/* Students mapping */}
            {allStudent &&
              allStudent.map((student, index) => (
                <div
                  key={student.userId._id}
                  className="flex flex-col justify-center items-center bg-blue-100 shadow-md rounded-lg p-3"
                >
                  <div className="w-full bg-white p-4 rounded-lg">
                    <div className="flex flex-col justify-between items-center pb-2">
                      <img
                        src={student.userId.avatar}
                        alt=""
                        className="w-32 h-32 border object-cover rounded-full shadow-lg"
                      />
                    </div>
                    <div className="w-full flex justify-start items-start border-t-2 border-red-300 pt-2">
                      <div className="">
                        <h3 className="text-xl">
                          Name:{" "}
                          <span className="text-gray-700 text-lg">
                            {student.userId.fullName}
                          </span>
                        </h3>
                        <p className="text-xl">
                          Email:
                          <span className="text-gray-700 text-lg">
                            {student.userId.email}
                          </span>
                        </p>
                        <p className="text-xl">
                          Mobile:
                          <span className="text-gray-700 text-lg">
                            {student.userId.mobile}
                          </span>
                        </p>
                        <p className="text-xl">
                          Date Of Birth:
                          <span className="text-gray-700 text-lg">
                            {student.dateOfBirth}
                          </span>
                        </p>
                        <p className="text-xl">
                          Gender:
                          <span className="text-gray-700 text-lg">
                            {student.gender}
                          </span>
                        </p>
                        <p className="text-xl">
                          Address:
                          <span className="text-gray-700 text-lg">
                            {student.address.city},{student.address.state}
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUser;
