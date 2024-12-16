import React from "react";
import { motion } from "framer-motion";

const RecentClass = () => {
  const data = [
    {
      id: 442794,
      name: "aayushi",
      class: "Class III",
      subject: "All Subjects",
      area: "Noida, Uttar Pradesh",
      postedOn: "10-12-2024 15:20:03",
      contact: "9560XXXXXX",
    },
    {
      id: 442793,
      name: "Jayant/ Neetu",
      class: "Class III",
      subject: "All Subjects",
      area: "Sri Niwaspuri, New Delhi",
      postedOn: "10-12-2024 15:20:00",
      contact: "9818XXXXXX",
    },
    {
      id: 442792,
      name: "Hemant Giri",
      class: "Class III",
      subject: "All Subjects",
      area: "Reshim Bagh, Nagpur",
      postedOn: "10-12-2024 15:03:53",
      contact: "9370XXXXXX",
    },
    {
      id: 442791,
      name: "shivi kumar",
      class: "Class IX",
      subject: "Mathematics, Science",
      area: "Hinjewadi, Pune, Maharashtra",
      postedOn: "10-12-2024 15:03:03",
      contact: "7066XXXXXX",
    },
  ];

  return (
    <motion.div 
      className="p-6 bg-gray-100 drop-shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-3xl text-center pb-5">Recent Classes</h3>
      <div className="container mx-auto overflow-x-auto">
        <table className="table-auto w-full bg-white border border-gray-300 shadow-lg rounded-lg">
          <thead className="bg-gray-200 text-gray-700 uppercase text-sm">
            <tr>
              <th className="px-4 py-2 border">Enquiry ID</th>
              <th className="px-4 py-2 border">Name</th>
              <th className="px-4 py-2 border">Class</th>
              <th className="px-4 py-2 border">Subject</th>
              <th className="px-4 py-2 border">Area</th>
              <th className="px-4 py-2 border">Posted On</th>
              <th className="px-4 py-2 border">Contact No.</th>
              <th className="px-4 py-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <motion.tr
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`text-gray-700 ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-4 py-2 border">{item.id}</td>
                <td className="px-4 py-2 border">{item.name}</td>
                <td className="px-4 py-2 border">{item.class}</td>
                <td className="px-4 py-2 border">{item.subject}</td>
                <td className="px-4 py-2 border">{item.area}</td>
                <td className="px-4 py-2 border">{item.postedOn}</td>
                <td className="px-4 py-2 border">{item.contact}</td>
                <td className="px-4 py-2 border">
                  <button className="bg-blue-500 text-white px-3 py-1 rounded hover:shadow-md">
                    View Contact
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <motion.div 
        className="flex justify-center mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:shadow-md">
          View More Classes
        </button>
      </motion.div>
    </motion.div>
  );
};

export default RecentClass;
