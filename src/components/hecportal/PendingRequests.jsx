import React, { useState } from "react";
import RequestDetailsModal from "./RequestDetailsModal";

const demoRequests = [
    { id: 1, name: "Muhammad Shahis", cnic: "12345-1234567-1", university: "UMW", degree: "BS CS", date: "29 Oct 2025" },
    { id: 2, name: "Nayyab Gull", cnic: "54321-7654321-2", university: "UMW", degree: "BS CS", date: "29 Oct 2025" },
];

const PendingRequests = () => {
    const [viewId, setViewId] = useState(null);

    return (
        <div>
            <h2 className="font-bold text-2xl mb-6 text-gray-900">Pending Attestation Requests</h2>
            <div className="bg-white rounded-2xl shadow p-4">
                <table className="w-full">
                    <thead className="bg-indigo-50">
                        <tr>
                            <th className="px-4 py-2 text-left text-xs font-bold text-indigo-900">Student Name</th>
                            <th className="px-4 py-2 text-left text-xs font-bold text-indigo-900">CNIC</th>
                            <th className="px-4 py-2 text-left text-xs font-bold text-indigo-900">University</th>
                            <th className="px-4 py-2 text-left text-xs font-bold text-indigo-900">Degree</th>
                            <th className="px-4 py-2 text-left text-xs font-bold text-indigo-900">Date</th>
                            <th className="px-4 py-2 text-center text-xs font-bold text-indigo-900">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {demoRequests.map((req) => (
                            <tr key={req.id} className="border-b hover:bg-indigo-50 transition">
                                <td className="px-4 py-3">{req.name}</td>
                                <td className="px-4 py-3">{req.cnic}</td>
                                <td className="px-4 py-3">{req.university}</td>
                                <td className="px-4 py-3">{req.degree}</td>
                                <td className="px-4 py-3">{req.date}</td>
                                <td className="px-4 py-3 text-center">
                                    <button
                                        className="px-4 py-1 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700"
                                        onClick={() => setViewId(req.id)}
                                    >
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {viewId && <RequestDetailsModal request={demoRequests.find(r => r.id === viewId)} onClose={() => setViewId(null)} />}
        </div>
    );
};

export default PendingRequests;
