import React, { useContext, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AdminContext } from '../../../auth/adminhandling/AdminProvider'

const AllUser = () => {
  const {getAllUsers, allStudent, allTutor} = useContext(AdminContext);

  useEffect(()=>{
    getAllUsers();
  },[allStudent,allTutor])

  return (
    <>
      <div className='bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg'>
        <h1 className='text-xl md:text-3xl pb-3 md:pb-5 px-1'>All User</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-base">Sr No.</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-base">User Name</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-base">Email</th>
                <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-left text-xs md:text-base">Number</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-center text-xs md:text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              {/* Students mapping */}
              {allStudent && allStudent.map((student, index) => (
                <tr key={student.userId._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 md:py-3 px-2 md:px-4 text-xs md:text-base">{index + 1}.</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-xs md:text-base">{student.userId.fullName}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-xs md:text-base truncate max-w-[150px] md:max-w-none">
                    {student.userId.email}
                  </td>
                  <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-xs md:text-base">
                    {student.userId.mobile}
                  </td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash className="text-sm md:text-base" />
                    </button>
                  </td>
                </tr>
              ))}
              
              {/* Tutors mapping */}
              {allTutor && allTutor.map((tutor, index) => (
                <tr key={tutor._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 md:py-3 px-2 md:px-4 text-xs md:text-base">{allStudent.length + index + 1}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-xs md:text-base">{tutor.userId.fullName}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-xs md:text-base truncate max-w-[150px] md:max-w-none">
                    {tutor.userId.email}
                  </td>
                  <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-xs md:text-base">
                    {tutor.userId.mobile}
                  </td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                    <button className="text-red-500 hover:text-red-700">
                      <FaTrash className="text-sm md:text-base" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AllUser