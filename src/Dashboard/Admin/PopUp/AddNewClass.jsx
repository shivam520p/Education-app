import React, { useContext, useState } from "react";
import { DataProvider } from "../../auth/ContextAPI";

const AddNewClass = () => {
    const {setPop,classHandleChange,addClass}=useContext(DataProvider)
  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full bg-slate-300 rounded-md">
          {/* <div>
          <i className="fixed right-1 fa-solid fa-xmark"></i>
          </div> */}
          <div className="p-4 md:p-5">
          <div className=" flex justify-end items-end"><i onClick={()=>{setPop(false)}} className="hover:cursor-pointer text-xl fa-solid fa-xmark"></i></div>
            <form className="space-y-2" action="#">
              <div>
                <label
                  htmlFor="country"
                  className="block text-lg font-medium text-gray-700 pb-4"
                >
                  Add new Class
                  <sup className="text-red-500">*</sup>
                </label>
                <input name='subjectName' type="text" placeholder="Enter new class to add.." onChange={classHandleChange}
                className="w-full px-3 py-3 rounded-lg bg-white border border-gray-600" />
              </div>
              <div>
                <label
                  htmlFor="country"
                  className="block text-lg font-medium text-gray-700 pb-4"
                >
                  Choose a pic
                  <sup className="text-red-500">*</sup>
                </label>
                <input name='image' type="file" placeholder="Choose a pic to add.." onChange={classHandleChange}
                className="w-full px-3 py-3 rounded-lg bg-white border border-gray-600" />
              </div>
              <div className="flex items-center justify-end gap-x-6 pt-5">
                <button  onClick={addClass}
                  type="submit"
                  className="rounded-md bg-primary px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
                >
                  Add +
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddNewClass;
