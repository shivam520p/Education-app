import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const Graduation = () => {
  const { selectedClass, setSelectedClass } = useContext(AdminContext);

  const classes = [
    "Mathematics",
    "Physics",
    "Chemistry",
    "Biology",
    "Computer Science",
    "Economics",
    "Psychology",
    "History",
    "Literature",
    "Philosophy",
    "Political Science",
    "Sociology",
    "Engineering",
    "Law",
    "Business Administration",
    "Accounting",
    "Art & Design",
    "Music",
    "Theater Arts",
    "Environmental Science",
  ];
  return (
    <div className="pt-4 max-h-[300px] overflow-y-auto">
      <label
        htmlFor="subjectsValue"
        className="block text-lg font-medium text-gray-600"
      >
        Subjects you want to learn?
        <sup className="text-red-500">*</sup>
      </label>
      {classes.map((subject, index) => (
        <div
          key={index}
          className="flex items-center gap-2 border-2 py-2 px-2 m-1"
        >
          <input
            type="checkbox"
            name={subject}
            id={`subject-${index}`}
            onClick={() => {
              setSelectedClass({
                ...selectedClass,
                subjectName: [...(selectedClass.subjectName || []), subject],
              });
            }}
          />
          <label htmlFor={`subject-${index}`}>{subject}</label>
        </div>
      ))}
    </div>
  );
};

export default Graduation;
