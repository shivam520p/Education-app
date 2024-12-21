import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../../auth/adminhandling/AdminProvider";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const AllLeads = () => {
  const { allLeads, getAllLeadsFromUser } = useContext(AdminContext);
  console.log(allLeads);
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
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {allLeads &&
                  allLeads.map((leads, index) => (
                    <tr className="border-b border-gray-200 hover:bg-gray-50">
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        {index + 1}.
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>{leads.details.fullName}</p>
                      </td>
                      <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <p>{leads.details.email.slice(0, 4) + "XXXX"}</p>
                        <p>{leads.details.mobile.slice(0, 4) + "XXXX"}</p>
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
                        <p>{leads.classesId.updatedAt}</p>
                      </td>
                      <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base text-center">
                        <button className="rounded-md bg-blue-500 py-2 px-3 text-sm font-semibold text-white hover:shadow-md">
                          <FontAwesomeIcon
                            icon={faSignOutAlt}
                            className="mr-3"
                          />
                          View Details
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default AllLeads;
