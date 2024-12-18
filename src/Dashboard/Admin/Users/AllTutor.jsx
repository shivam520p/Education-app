import React, { useContext, useEffect } from 'react'
import { FaTrash } from 'react-icons/fa'
import { AdminContext } from '../../../auth/adminhandling/AdminProvider'

const AllUser = () => {
  const {getAllUsers, allTutor, tutorDelete} = useContext(AdminContext);

  useEffect(()=>{
    getAllUsers();
  },[allTutor])

  return (
    <>
      <div className='bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg'>
        <h1 className='text-xl md:text-3xl pb-3 md:pb-5 px-1'>All Tutor</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Sr No.</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Tutor Name</th>
                <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Email</th>
                <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Number</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">Action</th>
              </tr>
            </thead>
            <tbody>
              {allTutor && allTutor.map((tutor, index) => (
                <tr key={tutor._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{index + 1}.</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                    <div>
                      <p>{tutor.userId.fullName}</p>
                      <div className="md:hidden text-xs text-gray-500">
                        <p>{tutor.userId.email}</p>
                        <p>{tutor.userId.mobile}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{tutor.userId.email}</td>
                  <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{tutor.userId.mobile}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-center">
                    <button 
                      onClick={()=>{tutorDelete(tutor._id)}} 
                      className="text-red-500 hover:text-red-700 p-2"
                      aria-label="Delete tutor"
                    >
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