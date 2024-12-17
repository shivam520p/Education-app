import React, { useContext } from "react";
import { TutorContext } from "../../auth/TutorHandling/TutorProvider";

const ChangePassword = () => {
  const { changePassword, passwordHandleChange, newPassword } =
    useContext(TutorContext);
  return (
    <div className="min-h-screen flex items-start justify-start p-4">
      <div className="w-full max-w-2xl bg-white rounded-lg shadow-md p-6">
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Change Your Password
          </h1>
          <p className="text-gray-600">
            Choose a strong password to secure your account
          </p>
        </div>

        <form className="space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="Password" className="w-full md:w-1/4 font-medium">
                Old Password
              </label>
              <input
                type="password"
                name="Password"
                id="Password"
                value={newPassword.Password}
                onChange={passwordHandleChange}
                placeholder="Enter your current password"
                className="w-full md:w-3/4 p-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2">
              <label htmlFor="newPassword" className="w-full md:w-1/4 font-medium">
                New Password
              </label>
              <input
                type="password"
                name="newPassword"
                id="newPassword"
                value={newPassword.newPassword}
                onChange={passwordHandleChange}
                placeholder="Enter your new password"
                className="w-full md:w-3/4 p-2.5 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <button
              onClick={changePassword}
              type="button"
              className="px-6 py-2.5 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Change Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default ChangePassword;
