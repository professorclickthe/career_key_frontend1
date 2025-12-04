import React, { useState } from "react";

const Attestations = () => {
    const [requests] = useState([
        { id: 1, rollNo: "BCS-F22-E02", name: "Muhammad Shahis", status: "Pending", feePaid: true, date: "2025-10-25" },
        { id: 2, rollNo: "BCS-F22-E08", name: "Nayyab Gull", status: "Under Review", feePaid: true, date: "2025-10-26" },
        { id: 3, rollNo: "BCS-F22-E26", name: "Muhammad Saqib", status: "Sent to HEC", feePaid: false, date: "2025-10-27" },
    ]);

    const handleAction = (id, action) => {
        alert(`Action: ${action} for request ID: ${id}`);
        // Backend API call here
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-6">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Attestation Requests</h3>
            <div className="space-y-4">
                {requests.map((req) => (
                    <div key={req.id} className="p-5 bg-gray-50 rounded-xl border hover:shadow-md transition">
                        <div className="flex items-center justify-between mb-3">
                            <div>
                                <p className="font-semibold text-gray-800">{req.name}</p>
                                <p className="text-sm text-gray-500">Roll No: {req.rollNo}</p>
                            </div>
                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${req.status === "Pending" ? "bg-yellow-100 text-yellow-700" :
                                    req.status === "Under Review" ? "bg-blue-100 text-blue-700" :
                                        "bg-green-100 text-green-700"
                                }`}>
                                {req.status}
                            </span>
                        </div>
                        <div className="flex items-center justify-between text-sm">
                            <div>
                                <span className="text-gray-600">Fee Paid: </span>
                                <span className={req.feePaid ? "text-green-600 font-semibold" : "text-red-600 font-semibold"}>
                                    {req.feePaid ? "Yes ✅" : "No ❌"}
                                </span>
                            </div>
                            <p className="text-gray-500">Date: {req.date}</p>
                        </div>
                        <div className="flex gap-2 mt-4">
                            <button
                                onClick={() => handleAction(req.id, "Verify")}
                                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition"
                            >
                                Verify & Approve
                            </button>
                            <button
                                onClick={() => handleAction(req.id, "Send to HEC")}
                                className="px-4 py-2 bg-indigo-600 text-white text-sm rounded-lg hover:bg-indigo-700 transition"
                            >
                                Forward to HEC
                            </button>
                            <button
                                onClick={() => handleAction(req.id, "Reject")}
                                className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 transition"
                            >
                                Reject
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Attestations;
