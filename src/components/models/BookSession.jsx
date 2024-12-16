import React from "react";

const BookSession = () => {
  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50"
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          {/* <!-- Modal content --> */}
          <div className="relative p-3 bg-white rounded-lg shadow dark:bg-gray-700">
            {/* <!-- Modal header --> */}
            <div className="bg-blue-50 rounded-lg">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-blue-500 dark:text-white border-b-2 border-blue-500">
                  Book a Session...!!
                </h3>
                <button
                  type="button"
                  className="end-2.5 text-blue-500 bg-transparent hover:bg-gray-200 hover:text-blue-600 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="authentication-modal"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              {/* <!-- Modal body --> */}
              <div className="p-4 md:p-5">
                <form className="space-y-2" action="#">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Enter Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="classname"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Enter Class Name
                    </label>
                    <input
                      type="text"
                      name="classname"
                      id="classname"
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      placeholder="Enter your class name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="subjectname"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Enter Subject Name
                    </label>
                    <input
                      type="text"
                      name="subjectname"
                      id="subjectname"
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      placeholder="Enter your subject name"
                      required
                    />
                  </div>
                  {/* <div>
                    <label
                      htmlFor="locationname"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Enter Location Name
                    </label>
                    <input
                      type="text"
                      name="locationname"
                      id="locationname"
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      placeholder="Enter your loaction"
                      required
                    />
                  </div> */}
                  <div>
                    <label
                      htmlFor="date"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      name="date"
                      id="date"
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="startTime"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      Start Time
                    </label>
                    <input
                      type="time"
                      name="startTime"
                      id="startTime"
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="endTime"
                      className="block mb-2 text-l font-medium text-gray-500"
                    >
                      End Time
                    </label>
                    <input
                      type="time"
                      name="endTime"
                      id="endTime"
                      className="block w-full p-2.5 border-2 border-blue-200 rounded-lg"
                      required
                    />
                  </div>
                  <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button
                      type="submit"
                      className="rounded-md bg-blue-500 px-4 py-2 text-sm font-semibold text-white hover:shadow-md"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookSession;
