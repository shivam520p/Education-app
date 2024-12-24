import React, { useContext, useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import ToggleBtn from "../PopUp/ToggleBtn";
import BlockTutor from "../PopUp/BlockTutor";

const AllTutor = () => {
  const { tutorBlock, getAllUsers, allTutor, tutorDelete, tutorVerify } =
    useContext(AdminContext);

  useEffect(() => {
    if (!localStorage.getItem("tutors")) {
      getAllUsers();
      localStorage.setItem("tutors", true);
    }
    return () => {
      localStorage.removeItem("tutors");
    };
  }, []);

  return (
    <div className="p-2 md:p-5">
      <h2 className="text-2xl font-semibold pb-4 text-center">Tutors</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Tutors mapping */}
          {allTutor &&
            allTutor.map((tutor, index) => (
              <div
                key={index}
                className={`flex flex-col justify-center items-center bg-blue-100 shadow-md rounded-lg p-3 ${
                  tutor.isBlocked && "text-gray-300 bg-gray-300"
                }`}
              >
                <span className="transform rotate-[-30deg] text-2xl text-red-400">
                  {tutor.isBlocked ? "Blocked!!" : ""}
                </span>
                <div className="w-full bg-white p-4 rounded-lg overflow-hidden">
                  {" "}
                  {/* Prevent overflow here */}
                  <div className="w-full flex justify-end">
                    <button
                      onClick={() => {
                        tutorDelete(tutor._id);
                      }}
                      className={`${
                        tutor.isBlocked ? "text-gray-300" : "text-red-500"
                      } hover:text-red-700`}
                    >
                      <FaTrash className="text-lg" />
                    </button>
                  </div>
                  <div
                    className={`${
                      tutor.isBlocked && "grayscale"
                    } flex flex-col justify-between items-center pb-2`}
                  >
                    <img
                      src={tutor.userId.avatar}
                      alt=""
                      className="w-32 h-32 border object-cover rounded-full shadow-lg"
                    />
                  </div>
                  <div
                    className={`w-full flex flex-col justify-start items-start border-t-2 ${
                      tutor.isBlocked ? "border-gray-300" : "border-red-300"
                    } pt-2`}
                  >
                    <div className="text-xl overflow-hidden">
                      {" "}
                      {/* Apply overflow-hidden to prevent content overflow */}
                      <h3 className="text-xl">
                        Name:{" "}
                        <span
                          className={`${
                            tutor.isBlocked ? "text-gray-300" : "text-gray-700"
                          } text-lg`}
                        >
                          {tutor.userId.fullName}
                        </span>
                      </h3>
                      <p className="text-xl">
                        Email:
                        <span
                          className={`${
                            tutor.isBlocked ? "text-gray-300" : "text-gray-700"
                          } text-lg`}
                        >
                          {tutor.userId.email}
                        </span>
                      </p>
                      <p className="text-xl">
                        Mobile:
                        <span
                          className={`${
                            tutor.isBlocked ? "text-gray-300" : "text-gray-700"
                          } text-lg`}
                        >
                          {tutor.userId.mobile}
                        </span>
                      </p>
                      <p className="text-xl">
                        Date Of Birth:
                        <span
                          className={`${
                            tutor.isBlocked ? "text-gray-300" : "text-gray-700"
                          } text-lg`}
                        >
                          {tutor.address.dateOfBirth}
                        </span>
                      </p>
                      <p className="text-xl">
                        Gender:
                        <span
                          className={`${
                            tutor.isBlocked ? "text-gray-300" : "text-gray-700"
                          } text-lg`}
                        >
                          {tutor.address.gender}
                        </span>
                      </p>
                      <p className="text-xl">
                        Address:
                        <span
                          className={`${
                            tutor.isBlocked ? "text-gray-300" : "text-gray-700"
                          } text-lg`}
                        >
                          {tutor.address.city}, {tutor.address.state}
                        </span>
                      </p>
                    </div>
                    <div className="w-full py-2 flex justify-between border-y border-gray-200 ">
                      <span className="text-gray-400">
                        Verification : {tutor.status}
                      </span>
                      <span>
                        <ToggleBtn tutor={tutor} tutorVerify={tutorVerify} />
                      </span>
                    </div>
                    <div className="w-full flex items-center justify-between py-2">
                      <span className="text-gray-400">
                        {tutor.isBlocked ? "Blocked" : ""}
                      </span>
                      <span>
                        <BlockTutor tutor={tutor} tutorBlock={tutorBlock} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
    </div>
  );
};

export default AllTutor;
