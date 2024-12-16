import React, { useContext, useState } from "react";

const AddLanguage = () => {
  return (
    <>
      <div
        id="authentication-modal"
        tabindex="-1"
        aria-hidden="true"
        className={`fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full bg-slate-300 rounded-md">
          <div className="p-4 md:p-5">
          <div className=" flex justify-end items-end"><i className="hover:cursor-pointer text-xl fa-solid fa-xmark"></i></div>
            <form className="space-y-2" action="#">
              <div>
                <label
                  htmlFor="country"
                  className="block text-lg font-medium text-gray-700 pb-4"
                >
                  Add new Language
                  <sup className="text-red-500">*</sup>
                </label>
                <input type="text" placeholder="Enter new language to add.."
                className="w-full px-3 py-3 rounded-lg bg-white border border-gray-600" />
              </div>
              <div className="flex items-center justify-end gap-x-6 pt-5">
                <button
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

export default AddLanguage;
