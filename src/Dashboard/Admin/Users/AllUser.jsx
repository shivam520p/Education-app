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
      <div className='bg-blue-100 w-full h-auto p-4 rounded-lg'>
        <h1 className='text-3xl pb-5 px-1'>All User</h1>
        <table className="min-w-full bg-white shadow-md rounded-lg">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="py-3 px-4 text-left">Sr No</th>
              <th className="py-3 px-4 text-left">User Name</th>
              <th className="py-3 px-4 text-left">Email</th>
              <th className="py-3 px-4 text-left">Number</th>
              <th className="py-3 px-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Students mapping */}
            {allStudent && allStudent.map((student, index) => (
              <tr key={student.userId._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{index + 1}</td>
                <td className="py-3 px-4">{student.userId.fullName}</td>
                <td className="py-3 px-4">{student.userId.email}</td>
                <td className="py-3 px-4">{student.userId.mobile}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
            
            {/* Tutors mapping */}
            {allTutor && allTutor.map((tutor, index) => (
              <tr key={tutor._id} className="border-b hover:bg-gray-50">
                <td className="py-3 px-4">{allStudent.length + index + 1}</td>
                <td className="py-3 px-4">{tutor.userId.fullName}</td>
                <td className="py-3 px-4">{tutor.userId.email}</td>
                <td className="py-3 px-4">{tutor.userId.mobile}</td>
                <td className="py-3 px-4 text-center">
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default AllUser