import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

export const Programming = () => {
  const { selectedClass, setSelectedClass } = useContext(AdminContext);

  const subjects = [
    "Python Programming",
    "Java Programming",
    "C Programming",
    "C++ Programming",
    "JavaScript",
    "PHP Programming",
    "TypeScript",
    "C# Programming",
    "SQL Database",
  ];
  return (
    <div className="pt-4 max-h-[300px] overflow-y-auto">
      <label
        htmlFor="subjects"
        className="block text-lg font-medium text-gray-600"
      >
        Subjects you want to learn?
        <sup className="text-red-500">*</sup>
      </label>
      {subjects.map((subject, index) => (
        <div
          key={index}
          className="flex items-center gap-2 border-2 py-2 px-2 m-1"
        >
          <input
            type="checkbox"
            id={`subject-${index}`}
            onClick={() => {
              setSelectedClass({
                ...selectedClass,
                subjectName: [...(selectedClass.subjectName || []), subject],
              });
            }}
          />
          <label htmlFor="subjects">{subject}</label>
        </div>
      ))}
    </div>
  );
};
