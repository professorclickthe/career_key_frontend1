import React from "react";

const StatCard = ({ icon, title, value, color }) => (
    <div className={`p-6 rounded-2xl shadow-md border border-gray-100 ${color} transform hover:scale-105 transition`}>
        <div className="flex items-center justify-between mb-2">
            <div className="text-3xl">{icon}</div>
            <span className="text-2xl font-bold text-gray-800">{value}</span>
        </div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
    </div>
);

const DashboardStats = ({ stats }) => (
    <section className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        <StatCard icon="📄" title="Total Documents" value={stats.documents} color="bg-blue-50" />
        <StatCard icon="✅" title="Verified Documents" value={stats.verified} color="bg-green-50" />
        <StatCard icon="⏳" title="Pending Requests" value={stats.pending} color="bg-yellow-50" />
        <StatCard icon="💼" title="Job Matches" value={stats.jobs} color="bg-purple-50" />
    </section>
);

export default DashboardStats;
