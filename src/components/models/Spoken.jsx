import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const Spoken = () => {
  const { selectedClass, setSelectedClass } = useContext(AdminContext);
  return (
    <div className="pt-4 h-[300px] overflow-y-auto">
      <label
        htmlFor="subjectsValue"
        className="block text-lg font-medium text-gray-600"
      >
        Subjects you want to learn?
        <sup className="text-red-500">*</sup>
      </label>
      <div className="flex items-center gap-2 border-2 py-2 px-2 m-1">
        <input
          type="checkbox"
          name="class"
          onClick={() =>
            setSelectedClass({
              ...selectedClass,
              subject: [
                ...(selectedClass.subjectName || []),
                "Spoken Language",
              ],
            })
          }
        />
        <label htmlFor="subjects">Spoken Language</label>
      </div>
    </div>
  );
};

export default Spoken;
