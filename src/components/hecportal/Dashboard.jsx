import React from "react";
import StatCard from "./StatCard";
import ChartsOverview from "./ChartsOverview";

const stats = [
    { icon: "🕒", label: "Pending Requests", value: 13, type: "pending" },
    { icon: "✅", label: "Verified", value: 90, type: "verified" },
    { icon: "⛓️", label: "Blockchain Attested", value: 75, type: "blockchain" },
    { icon: "❌", label: "Rejected", value: 2, type: "rejected" },
];

const recent = [
    { action: "New attestation request by Muhammad Shahis", time: "4 mins ago" },
    { action: "Degree stamped for Nayyab Gull", time: "45 mins ago" },
    { action: "Blockchain record submitted for BCS-F22-E02", time: "2 hours ago" },
];

const Dashboard = () => (
    <section>
        <h2 className="font-bold text-2xl mb-6 text-gray-900">Dashboard</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
            {stats.map((stat, idx) => <StatCard key={idx} {...stat} />)}
        </div>
        <ChartsOverview />
        <div className="mt-10 bg-white rounded-2xl shadow p-6">
            <h3 className="text-lg font-bold mb-4 text-indigo-900">Recent Activity</h3>
            <ul className="divide-y divide-indigo-50">
                {recent.map((ev, i) => (
                    <li key={i} className="flex justify-between py-2 text-gray-700 text-sm">
                        <span>{ev.action}</span>
                        <span className="text-indigo-400">{ev.time}</span>
                    </li>
                ))}
            </ul>
        </div>
    </section>
);

export default Dashboard;
