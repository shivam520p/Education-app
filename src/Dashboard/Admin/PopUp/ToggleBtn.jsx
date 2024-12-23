import React from "react";

const ToggleBtn = ({ tutorVerify, tutor }) => {
  return (
    <div>
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          value=""
          className="sr-only peer"
          checked={tutor.status==="complete" && tutor.isBlocked===false}
          onClick={() => {
            tutorVerify(tutor._id);
          }}
        />
        <div className="relative w-11 h-6 bg-gray-200 rounded-full peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500"></div>
      </label>
    </div>
  );
};

export default ToggleBtn;
