import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../auth/adminhandling/AdminProvider";

const AllTileOnScreen = () => {
  const { allTitle, getAllQuotes,deleteQuotes } = useContext(AdminContext);

  useEffect(() => {
    getAllQuotes();
  }, [allTitle]);

  return (
    <section className="flex items-center justify-center">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-300">
              <th className="px-4 py-3 text-left">Heading</th>
              <th className="px-4 py-3 text-left">Content</th>
              <th className="px-4 py-3 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allTitle.map((title, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-3 text-black font-medium">
                  {title.titleName}
                </td>
                <td className="px-4 py-3 text-gray-600">
                  {title.titleContent}
                </td>
                <td className="px-4 py-3 text-center">
                  <button
                  onClick={()=>{deleteQuotes(title._id)}}
                  className="text-red-500 hover:text-red-700">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    </section>
  );
};

export default AllTileOnScreen;
