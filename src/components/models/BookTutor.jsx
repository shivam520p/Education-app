import React, { useContext } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";
import SubjectChange from "./SubjectChange";
import Class4To5 from "./Class4To5";
import { Class6To8 } from "./Class6To8";
import Class11To12 from "./Class11To12";
import Graduation from "./Graduation";
import Spoken from "./Spoken";
import { IITJEE } from "./IITJEE";
import { NEET } from "./NEET";
import { Programming } from "./Programming";
import { Others } from "./Others";
import Mode from "./Mode";

const BookTutor = ({ subject }) => {
  const { setPopUp, selectedClass, setSelectedClass } =
    useContext(AdminContext);

  const classes = [
    "Nursery",
    "Class I",
    "Class II",
    "Class III",
    "Class IV",
    "Class V",
    "Class VI",
    "Class VII",
    "Class VIII",
    "Class IX",
    "Class X",
    "Class XI",
    "Class XII",
    "Graduation",
    "Spoken Language",
    "IIT JEE",
    "NEET",
    "Programming Language",
    "Others",
  ];

  const classComponentMap = {
    Nursery: SubjectChange,
    "Class I": SubjectChange,
    "Class II": SubjectChange,
    "Class III": SubjectChange,
    "Class IV": Class4To5,
    "Class V": Class4To5,
    "Class VI": Class6To8,
    "Class VII": Class6To8,
    "Class VIII": Class6To8,
    "Class IX": Class6To8,
    "Class X": Class6To8,
    "Class XI": Class11To12,
    "Class XII": Class11To12,
    Graduation: Graduation,
    "Spoken Language": Spoken,
    "IIT JEE": IITJEE,
    NEET: NEET,
    "Programming Language": Programming,
    Others: Others,
  };

  const renderClassComponent = () => {
    const Component = classComponentMap[selectedClass.class];
    return Component ? <Component /> : null;
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center w-full h-full bg-gray-800 bg-opacity-50">
      <div className="relative p-3 w-full max-w-md max-h-full bg-blue-100 rounded-md">
        <div className="p-4 bg-white rounded-md">
          <div className="flex justify-between items-center pb-4 border-b border-gray-300">
            <div className="text-xl font-semibold text-gray-800">
              Looking for a {subject} tutor?
            </div>
            <i
              onClick={() => setPopUp(false)}
              className="hover:cursor-pointer text-xl text-gray-500 fa-solid fa-xmark"
            ></i>
          </div>

          <form className="space-y-2">
            {!selectedClass.class && (
              <div className="pt-4">
                <label className="block text-lg font-medium text-gray-600">
                  Class? Course student studying in?
                  <sup className="text-red-500">*</sup>
                </label>
                <div className="max-h-[300px] overflow-y-auto">
                  {classes.map((classObject, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 border-2 py-2 px-2 m-1"
                    >
                      <input
                        type="radio"
                        name="class"
                        onClick={() =>
                          setSelectedClass({
                            ...selectedClass,
                            class: classObject,
                          })
                        }
                        value={classObject}
                        id={`course-${index}`}
                      />
                      <label htmlFor={`course-${index}`}>{classObject}</label>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {renderClassComponent()}
            <Mode/>

            <div className="flex items-center justify-end gap-x-6 pt-5">
              <button
                type="button"
                className="rounded-md bg-blue-500 px-10 py-2 text-sm font-semibold text-white hover:shadow-md"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookTutor;
