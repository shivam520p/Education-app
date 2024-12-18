import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const BookTutor = ({subject}) => {
  const { setPopUp, allClasses, getAllClasses } = useContext(AdminContext);
  useEffect(() => {
    getAllClasses();
  }, []);
  console.log(allClasses);
  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50`}
      >
        <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-md">
          <div className="p-4 bg-white rounded-md">
            <div className="flex justify-between items-center pb-4 border-b border-gray-300">
              <div className="text-xl font-semibold text-gray-800">Looking for a {subject} tutor?</div>
              <div className=" flex justify-end items-end">
                <i
                  onClick={() => {
                    setPopUp(false);
                  }}
                  className="hover:cursor-pointer text-xl text-gray-500 fa-solid fa-xmark"
                ></i>
              </div>
            </div>
            <form className="space-y-2">
              <div className="pt-4">
                <label
                  htmlFor="courseTitle"
                  className="block text-lg font-medium text-gray-600"
                >
                  Class? Course student studying in?
                  <sup className="text-red-500">*</sup>
                </label>
                {allClasses?.map((classObject, index) => (
                  <div key={index} className="flex items-center gap-2 ml-2 mt-2">
                    <input type="radio" name="class" value={classObject.className} id={`course-${index}`} />
                    <label htmlFor={`course-${index}`}>{classObject.className}</label>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-end gap-x-6 pt-5">
                <button
                  type="submit"
                  className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookTutor;
