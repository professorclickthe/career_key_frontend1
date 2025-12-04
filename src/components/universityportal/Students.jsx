import React, { useState } from "react";

const Students = () => {
    const [students] = useState([
        { rollNo: "BCS-F22-E02", name: "Muhammad Shahis", department: "CS", batch: "2022", status: "Active" },
        { rollNo: "BCS-F22-E08", name: "Nayyab Gull", department: "CS", batch: "2022", status: "Active" },
        { rollNo: "BCS-F22-E26", name: "Muhammad Saqib", department: "CS", batch: "2022", status: "Active" },
    ]);

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">All Students</h3>
                <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg font-semibold hover:bg-indigo-700 transition">
                    + Add Student
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50 border-b">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Roll No</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Department</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Batch</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Status</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index} className="border-b hover:bg-gray-50 transition">
                                <td className="px-4 py-3 text-sm text-gray-800">{student.rollNo}</td>
                                <td className="px-4 py-3 text-sm text-gray-800">{student.name}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{student.department}</td>
                                <td className="px-4 py-3 text-sm text-gray-600">{student.batch}</td>
                                <td className="px-4 py-3">
                                    <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                                        {student.status}
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">
                                    <button className="text-blue-600 hover:underline mr-3">View</button>
                                    <button className="text-indigo-600 hover:underline">Edit</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Students;
