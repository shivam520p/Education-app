import React, { useContext } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";

const ProfileSettings = () => {
    const {
        tutorProfile,
        tutorProfileHandleChange,
        tutorProfileUpdate,
        editAgainProfile,
        profileEdit,
      } = useContext(TutorContext);
      const tutorData=JSON.parse(localStorage.getItem("userData"));
  return (
    <>
      <div className="flex itmes-center justify-center">
          <div className="h-screen w-full lg:w-2/3 p-3 lg:p-5 rounded-xl">
            <h3 className="text-xl lg:text-2xl text-semibold">
              Personal Details
            </h3>
            <p className="text-sm lg:text-lg text-gray-700">
              Please provide your personal information below to complete your
              profile
            </p>
            <form
              onSubmit={tutorProfileUpdate}
              className="w-full flex flex-col pt-10 gap-6"
            >
              <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
                <label htmlFor="fullName">Full Name: </label>
                <input
                  type="text"
                  name="fullName"
                  value={tutorData?.fullName}
                  readOnly
                  placeholder="Enter your full name"
                  className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                />
              </div>
              <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
                <label htmlFor="email">Email: </label>
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={tutorData?.email}
                  placeholder="Enter your email"
                  className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                />
              </div>
              <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
                <label htmlFor="gender">Gender: </label>
                <div className="flex space-x-4 items-center justify-start w-[80%]">
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Male"
                      onChange={tutorProfileHandleChange}
                      checked={tutorProfile?.gender === "Male"}
                      disabled={profileEdit}
                    />
                    <span className="ml-2">Male</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Female"
                      onChange={tutorProfileHandleChange}
                      checked={tutorProfile?.gender === "Female"}
                      disabled={profileEdit}
                    />
                    <span className="ml-2">Female</span>
                  </label>
                  <label className="inline-flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      value="Other"
                      onChange={tutorProfileHandleChange}
                      checked={tutorProfile?.gender === "Other"}
                      disabled={profileEdit}
                    />
                    <span className="ml-2">Other</span>
                  </label>
                </div>
              </div>
              <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
                <label htmlFor="email">Date of Birth: </label>
                <input
                  type="date"
                  name="dateOfBirth"
                  value={tutorProfile?.dateOfBirth}
                  onChange={tutorProfileHandleChange}
                  readOnly={profileEdit}
                  className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                />
              </div>
              <div className="h-72 lg:h-40 flex items-center justify-between border-t-2 border-gray-300">
                <label htmlFor="address">Address: </label>
                <div className="flex flex-col lg:flex-row w-[80%] itmes-center justify-between lg:gap-5 pl-5 lg:pl-0">
                  <div className="lg:w-1/2">
                    <div className="w-full">
                      <label htmlFor="city" className="block text-m">
                        City
                      </label>
                      <div className="mt-2">
                        <input
                          id="city"
                          name="city"
                          type="text"
                          readOnly={profileEdit}
                          value={tutorProfile?.city}
                          onChange={tutorProfileHandleChange}
                          className="w-full bg-slate-100 px-4 py-2 rounded-md"
                        />
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="region" className="block text-m">
                        State / Province
                      </label>
                      <div className="mt-2">
                        <select
                          name="state"
                          value={tutorProfile?.state}
                          onChange={tutorProfileHandleChange}
                          disabled={profileEdit}
                          className="w-full bg-slate-100 px-4 py-2 rounded-md"
                        >
                          <option value="" disabled selected>
                            Select a State
                          </option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">
                            Arunachal Pradesh
                          </option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">
                            Himachal Pradesh
                          </option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Odisha">Odisha</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Telangana">Telangana</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttarakhand">Uttarakhand</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="West Bengal">West Bengal</option>
                          <option value="Andaman and Nicobar Islands">
                            Andaman and Nicobar Islands
                          </option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Dadra and Nagar Haveli and Daman and Diu">
                            Dadra and Nagar Haveli and Daman and Diu
                          </option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Puducherry">Puducherry</option>
                          <option value="Ladakh">Ladakh</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          {/* More options */}
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <div className="w-full">
                      <label htmlFor="region" className="block text-m">
                        Country
                      </label>
                      <div className="mt-2">
                        <select
                          name="country"
                          value={tutorProfile?.country}
                          onChange={tutorProfileHandleChange}
                          disabled={profileEdit}
                          className="w-full bg-slate-100 px-4 py-2 rounded-md"
                        >
                          <option value="" disabled selected>
                            Select a Country
                          </option>
                          <option value="United States<">United States</option>
                          <option value="Canada">Canada</option>
                          <option value="United Kingdom">United Kingdom</option>
                          <option value="France">France</option>
                          <option value="Germany">Germany</option>
                          <option value="Japan">Japan</option>
                          <option value="India">India</option>
                          <option value="Australia">Australia</option>
                          <option value="Brazil">Brazil</option>
                          <option value="Italy">Italy</option>
                          {/* More options */}
                        </select>
                      </div>
                    </div>
                    <div className="w-full">
                      <label htmlFor="postal-code" className="block text-m">
                        ZIP / Postal Code
                      </label>
                      <div className="mt-2">
                        <input
                          id="postal-code"
                          name="pinCode"
                          type="text"
                          value={tutorProfile?.pinCode}
                          onChange={tutorProfileHandleChange}
                          readOnly={profileEdit}
                          className="w-full bg-slate-100 px-4 py-2 rounded-md"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-16 flex items-center justify-between border-t-2 border-gray-300">
                <label htmlFor="language" className="block text-m">
                  Language:
                </label>
                <select
                  name="language"
                  value={tutorProfile.language}
                  onChange={tutorProfileHandleChange}
                  disabled={profileEdit}
                  className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                >
                  <option value="" disabled selected>
                    Select a Language
                  </option>
                  <option value="HINDI">HINDI</option>
                  <option value="ENGLISH">ENGLISH</option>
                  <option value="HINGLISH">HINGLISH</option>
                  {/* More options */}
                </select>
              </div>
              <div className="h-48 flex items-center justify-between border-t-2 border-gray-300">
                <label htmlFor="discription" className="block text-m">
                  Discription: <br />
                  (Write about yourself)
                </label>
                <textarea
                  rows="5"
                  name="about"
                  value={tutorProfile.about}
                  onChange={tutorProfileHandleChange}
                  readOnly={profileEdit}
                  placeholder="Enter your message..."
                  className="bg-slate-100 w-[80%] px-4 py-2 rounded-md"
                ></textarea>
              </div>
              <div className="flex items-center justify-end gap-5 pb-10">
                <button
                  onClick={editAgainProfile}
                  type="button"
                  className="rounded-md px-4 py-2 text-sm font-semibold bg-blue-500 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700"
                >
                  Edit
                </button>
                {!profileEdit && (
                  <button
                    type="submit"
                    className={`rounded-md px-4 py-2 text-sm font-semibold bg-blue-500 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-green-700`}
                  >
                    Save & Update
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
    </>
  );
};

export default ProfileSettings;
