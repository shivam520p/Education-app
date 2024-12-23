import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { FaEye, FaTrash } from "react-icons/fa";
import LeadViewCard from "./LeadViewCard";
const AllLeads = () => {
  const {
    statusOfLeads,
    allLeads,
    getAllLeadsFromUser,
    popUp,
    setPopUp,
    deleteLeads,
  } = useContext(AdminContext);
  const [lead, setLead] = useState(null);
  useEffect(() => {
    getAllLeadsFromUser();
  }, []);

  return (
    <>
      <section>
        <div className="bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg">
          <h1 className="text-xl md:text-3xl pb-3 md:pb-5 px-1">
            All Leads Form User
          </h1>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white shadow-md rounded-lg">
              <thead>
                <tr className="bg-gray-200 text-gray-700">
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Sr No.
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Name
                  </th>
                  <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Contact
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Address
                  </th>
                  <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Lead Created
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Status
                  </th>
                  <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allLeads &&
                  allLeads.map((leads, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-200 hover:bg-gray-50"
                    >
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        {index + 1}.
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>{leads.details.fullName}</p>
                      </td>
                      <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>
                          {leads.details.email.slice(0, 4) + "xxx@gmail.com"}
                        </p>
                        <p>{leads.details.mobile.slice(0, 4) + "XXXXXX"}</p>
                      </td>

                      <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>
                          {leads.addressDetails.street},{" "}
                          {leads.addressDetails.city}
                        </p>
                        <p>
                          {leads.addressDetails.state},{" "}
                          {leads.addressDetails.pinCode}
                        </p>
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>{new Date(leads.createDate).toLocaleString()}</p>
                      </td>
                      <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center text-gray-400">
                        <select
                          onChange={(e) => {
                            statusOfLeads(e.target.value, leads._id);
                          }}
                          className={` text-xl p-3 cursor-pointer`}
                          name=""
                          id=""
                        >
                          <option
                            className={`${
                              leads.status === "Complete" && "text-green-300"
                            } ${
                              leads.status === "Rejected" && "text-green-300"
                            } ${
                              leads.status === "Pending" && "text-gray-300"
                            } `}
                          >
                            {leads.status}
                          </option>
                          <option
                            className="text-green-300 p-4"
                            value="Complete"
                          >
                            Complete
                          </option>
                          <option className="text-red-300 p-4" value="Rejected">
                            Rejected
                          </option>
                        </select>
                      </td>
                      <td className="flex gap-5 items-center justify-center py-2 md:py-6 px-2 md:px-4">
                        <button
                          onClick={() => {
                            setPopUp(true);
                            setLead(leads);
                          }}
                        >
                          <FaEye className="text-2xl text-blue-400 hover:text-blue-700" />
                        </button>
                        <button
                          onClick={() => {
                            deleteLeads(leads._id);
                          }}
                        >
                          <FaTrash className="text-lg text-red-400 hover:text-red-700" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      {popUp && <LeadViewCard lead={lead} />}
    </>
  );
};

export default AllLeads;
