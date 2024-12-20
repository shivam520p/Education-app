import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const Class4To5 = () => {
  const { selectedClass, setSelectedClass } = useContext(AdminContext);
  const subjects = [
    "All Subject",
    "English",
    "Mathematics",
    "Science",
    "Social Science",
  ];

  return (
    <>
      <div className="pt-4 h-[300px]">
        <label
          htmlFor="subjectsValue"
          className="block text-lg font-medium text-gray-600"
        >
          Subjects you want to learn?
          <sup className="text-red-500">*</sup>
        </label>
        {subjects.map((subject) => (
          <div
            key={subject}
            className="flex items-center gap-2 border-2 py-2 px-2 m-1"
          >
            <input type="checkbox" name="class"
            onClick={()=>{
                setSelectedClass({...selectedClass, 
                    subjectName:[...selectedClass.subjectName||[],subject]})
            }} 
            />
            <label htmlFor="subjects">{subject}</label>
          </div>
        ))}
      </div>
    </>
  );
};

export default Class4To5;
