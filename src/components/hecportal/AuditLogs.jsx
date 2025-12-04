import React from "react";

const logs = [
    { event: "Request received (BCS-F22-E02)", time: "29 Oct 2025 13:02" },
    { event: "Verified by HEC", time: "29 Oct 2025 13:35" },
    { event: "Stamped, IPFS upload", time: "29 Oct 2025 14:11" },
    { event: "Blockchain Tx mined", time: "29 Oct 2025 14:20" },
];

const AuditLogs = () => (
    <div>
        <h2 className="font-bold text-2xl mb-6 text-gray-900">Audit Logs</h2>
        <div className="bg-white rounded-2xl shadow p-6">
            <ul className="space-y-3">
                {logs.map((log, idx) => (
                    <li key={idx} className="flex justify-between items-center p-3 rounded-lg bg-indigo-50 hover:bg-indigo-100 transition">
                        <span className="text-sm text-indigo-900">{log.event}</span>
                        <span className="text-xs text-indigo-500">{log.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default AuditLogs;
