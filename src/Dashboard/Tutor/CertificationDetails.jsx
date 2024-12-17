import React, { useContext } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";

const CertificationDetails = () => {
  const {
    certificatesDetails,
    certificatesDetailsUpdate,
    profileEdit,
    editAgainProfile,
    certificateHandleChange,
  } = useContext(TutorContext);
  const certificate = JSON.parse(localStorage.getItem("certificate"));
  console.log(certificate[0].certificationPic);
  return (
    <>
      <div className="flex items-center justify-center p-4">
        <form action="" onSubmit={certificatesDetailsUpdate} className="w-full md:w-2/3">
          <div className="flex flex-col md:flex-row items-start justify-between gap-5">
            <div className="flex flex-col w-full md:w-1/2">
              <h3 className="text-xl lg:text-2xl font-semibold mb-2">
                Certification Details
              </h3>
              <p className="text-sm lg:text-lg text-gray-700 mb-4">
                Please provide your certification details below to complete your
                profile
              </p>
              <div className="space-y-4 w-full">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t-2 border-gray-300 pt-4">
                  <label htmlFor="name" className="mb-2 sm:mb-0">Certification Name: </label>
                  <input
                    type="text"
                    name="name"
                    value={certificatesDetails?.name}
                    onChange={certificateHandleChange}
                    readOnly={profileEdit}
                    placeholder="Enter your certification name"
                    className="bg-slate-100 w-full sm:w-[70%] px-4 py-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t-2 border-gray-300 pt-4">
                  <label htmlFor="institution" className="mb-2 sm:mb-0">Issuing Organization: </label>
                  <input
                    type="text"
                    name="issuingOrganization"
                    value={certificatesDetails?.issuingOrganization}
                    onChange={certificateHandleChange}
                    readOnly={profileEdit}
                    placeholder="Enter your issuing organization"
                    className="bg-slate-100 w-full sm:w-[70%] px-4 py-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t-2 border-gray-300 pt-4">
                  <label htmlFor="certificationPic" className="mb-2 sm:mb-0">Certification : </label>
                  <input
                    type="file"
                    name="certificationPic"
                    onChange={certificateHandleChange}
                    readOnly={profileEdit}
                    className="bg-slate-100 w-full sm:w-[70%] px-4 py-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t-2 border-gray-300 pt-4">
                  <label htmlFor="startDate" className="mb-2 sm:mb-0">Issue Date: </label>
                  <input
                    type="date"
                    name="issuedDate"
                    value={certificatesDetails?.issuedDate}
                    onChange={certificateHandleChange}
                    readOnly={profileEdit}
                    className="bg-slate-100 w-full sm:w-[70%] px-4 py-2 rounded-md"
                  />
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t-2 border-gray-300 pt-4">
                  <label htmlFor="expireDate" className="mb-2 sm:mb-0">Expiry Date: </label>
                  <input
                    type="date"
                    name="expireDate"
                    value={certificatesDetails?.expireDate}
                    onChange={certificateHandleChange}
                    readOnly={profileEdit}
                    className="bg-slate-100 w-full sm:w-[70%] px-4 py-2 rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-4 md:mt-0">
              <img
                src={certificate[0].certificationPic}
                alt="Certification File"
                className="w-full h-auto max-h-[400px] object-contain rounded-lg"
              />
            </div>
          </div>
          <div className="flex items-center justify-end gap-3 pt-6">
            <button
              onClick={editAgainProfile}
              type="button"
              className="rounded-md px-3 py-2 text-sm font-semibold bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Edit
            </button>
            {!profileEdit && (
              <button
                type="submit"
                className="rounded-md px-3 py-2 text-sm font-semibold bg-blue-500 text-white shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Save & Update
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );
};

export default CertificationDetails;