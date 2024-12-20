import React from "react";

const Mode = () => {
  const mode = ["Online (via Zoom, Google Meet, Skype etc)", "Offline (Tuition at My Home)"];
  return (
    <div className="pt-4 max-h-[300px] overflow-y-auto">
      <label className="block text-lg font-medium text-gray-600">
        Subjects you want to learn?
        <sup className="text-red-500">*</sup>
      </label>
      {mode.map((subject, index) => (
        <div
          key={subject}
          className="flex items-center gap-2 border-2 py-2 px-2 m-1"
        >
          <input 
            type="checkbox" 
            name={subject}
          />
          <label htmlFor={`mode-${index}`}>{subject}</label>
        </div>
      ))}
    </div>
  );
};

export default Mode;
