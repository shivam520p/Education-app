    import React, { useContext, useEffect } from "react";
    import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
    import { FaTrash } from "react-icons/fa";
    import AddLanguage from "../PopUp/AddLanguage"

    const AllLanguage = () => {
    const { allLanguage, getAllLanguage, setPopUp, popUp, deleteLanguage } = useContext(AdminContext);

    useEffect(() => {
        getAllLanguage();
    }, []);
    return (
        <>
        <div className="bg-blue-100 w-full h-auto p-4 rounded-lg">
            <div className="flex items-center justify-between py-3">
            <h1 className="text-3xl pb-5 px-1">All Languages</h1>
            <button onClick={()=>{setPopUp(true)}} className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                Add New Language
            </button>
            </div>
            <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
                <tr className="bg-gray-200 text-gray-700">
                <th className="py-3 px-4 text-left">Sr No.</th>
                <th className="py-3 px-4 text-left">Language Name</th>
                <th className="py-3 px-4 text-center">Action</th>
                </tr>
            </thead>
            <tbody>
                {/* Students mapping */}
                {allLanguage &&
                allLanguage.map((languageObject, index) => (
                    <tr key={index} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4">{index + 1}.</td>
                    <td className="py-3 px-4">{languageObject.languageName}</td>
                    <td className="py-3 px-4 text-center">
                        <button onClick={()=>{deleteLanguage(languageObject._id)}} className="text-red-500 hover:text-red-700">
                        <FaTrash />
                        </button>
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
        </div>
        {popUp && <AddLanguage/>}
        </>
    );
    };

    export default AllLanguage;
