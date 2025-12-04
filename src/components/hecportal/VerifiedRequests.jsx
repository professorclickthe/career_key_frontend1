import React from "react";

const demoVerified = [
    { id: 11, name: "Saqib", degree: "BS CS", date: "28 Oct 2025", txHash: "0x874ae..." },
    { id: 12, name: "Sarah", degree: "MS IT", date: "27 Oct 2025", txHash: "0xcf319..." },
];

const VerifiedRequests = () => (
    <div>
        <h2 className="font-bold text-2xl mb-6 text-gray-900">Verified Requests</h2>
        <div className="bg-white rounded-2xl shadow p-4">
            <table className="w-full">
                <thead className="bg-green-50">
                    <tr>
                        <th className="px-4 py-2 text-left text-xs font-bold text-green-700">Student</th>
                        <th className="px-4 py-2 text-left text-xs font-bold text-green-700">Degree</th>
                        <th className="px-4 py-2 text-left text-xs font-bold text-green-700">Date</th>
                        <th className="px-4 py-2 text-left text-xs font-bold text-green-700">Tx Hash</th>
                    </tr>
                </thead>
                <tbody>
                    {demoVerified.map((item) => (
                        <tr key={item.id} className="border-b hover:bg-green-50 transition">
                            <td className="px-4 py-3">{item.name}</td>
                            <td className="px-4 py-3">{item.degree}</td>
                            <td className="px-4 py-3">{item.date}</td>
                            <td className="px-4 py-3 text-xs font-mono">{item.txHash}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

export default VerifiedRequests;
