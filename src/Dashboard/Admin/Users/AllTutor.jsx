import React, { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import ToggleBtn from "../PopUp/ToggleBtn";

const AllUser = () => {
  const { getAllUsers, allTutor, tutorDelete, tutorVerify } =
    useContext(AdminContext);
  useEffect(() => {
    getAllUsers();
  }, [allTutor]);

  return (
    <>
      <div className="p-2 md:p-5">
        <h2 className="text-2xl font-semibold pb-4">Tutors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Tutors mapping */}
          {allTutor &&
            allTutor.map((tutor, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center bg-blue-100 shadow-md rounded-lg p-3"
              >
                <div className="w-full bg-white p-4 rounded-lg">
                  <div className="w-full flex justify-end">
                    <button
                      onClick={tutorDelete}
                      className="text-red-500 hover:text-red-700"
                    >
                      <FaTrash className="text-lg" />
                    </button>
                  </div>
                  <div className="flex flex-col justify-between items-center pb-2">
                    <img
                      src={tutor.userId.avatar}
                      alt=""
                      className="w-32 h-32 border object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <div className="w-full flex flex-col justify-start items-start border-t-2 border-red-300 pt-2">
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
                    <div className="w-full flex items-center justify-end gap-5">
                      <span>
                        <ToggleBtn tutor={tutor} tutorVerify={tutorVerify} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default AllUser;
