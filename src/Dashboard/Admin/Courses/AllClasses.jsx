import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaTrash } from "react-icons/fa";
import AddNewClass from "../PopUp/AddNewClass"

const AllClasses = () => {
  const { allClasses, getAllClasses, setPopUp, popUp, deleteClass } = useContext(AdminContext);

  useEffect(() => {
    getAllClasses();
  }, []);
  return (
    <>
      <div className="bg-blue-100 w-full h-auto p-4 rounded-lg">
        <div className="flex items-center justify-between py-3">
          <h1 className="text-3xl pb-5 px-1">All Classes</h1>
          <button onClick={()=>{setPopUp(true)}} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Add New Class
          </button>
        </div>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left">Sr No.</th>
              <th className="py-3 px-4 text-left">Class Name</th>
              <th className="py-3 px-4 text-left">Image</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Students mapping */}
            {allClasses &&
              allClasses.map((classObject, index) => (
                <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-3 px-4">{index + 1}.</td>
                  <td className="py-3 px-4">{classObject.className}</td>
                  <td className="py-3 px-4">
                    <img src={classObject.image} alt={classObject.className}
                    className="w-24 h-24 rounded-lg"
                     />
                  </td>
                  <td className="py-3 px-4 text-center">
                    <button onClick={()=>{deleteClass(classObject._id)}} className="text-red-500 hover:text-red-700">
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {popUp && <AddNewClass/>}
    </>
  );
};

export default AllClasses;
