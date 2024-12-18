import React, { useContext, useEffect }  from 'react'
import { AdminContext } from '../../../auth/adminhandling/AdminProvider';

const AllSessionBook = () => {
  const {allSessionBook,getAllSessionBook}=useContext(AdminContext);
  useEffect(()=>{
    getAllSessionBook();
  },[]);
  return (
    <>
    <div className='bg-blue-100 w-full h-auto p-2 md:p-4 rounded-lg'>
        <h1 className='text-xl md:text-3xl pb-3 md:pb-5 px-1'>All Session Book</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-md rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Sr No.</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Name</th>
                <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Email</th>
                <th className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-left text-sm md:text-base">Subject</th>
                <th className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">Message</th>
              </tr>
            </thead>
            <tbody>
              {allSessionBook && allSessionBook.map((session, index) => (
                <tr key={session._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{index + 1}.</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">
                    <div>
                      <p>{session.fullName}</p>
                      <div className="md:hidden text-xs text-gray-500">
                        <p>{session.email}</p>
                        <p>{session.subject}</p>
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{session.email}</td>
                  <td className="hidden md:table-cell py-2 md:py-3 px-2 md:px-4 text-sm md:text-base">{session.subject}</td>
                  <td className="py-2 md:py-3 px-2 md:px-4 text-center text-sm md:text-base">{session.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default AllSessionBook