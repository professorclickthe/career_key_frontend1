import React from "react";

const StatCard = ({ icon, title, value, color, bgColor }) => (
    <div className={`${bgColor} p-6 rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition`}>
        <div className="flex items-center justify-between mb-3">
            <div className={`w-14 h-14 ${color} rounded-xl flex items-center justify-center text-2xl shadow`}>
                {icon}
            </div>
            <span className="text-3xl font-bold text-gray-800">{value}</span>
        </div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
    </div>
);

const Dashboard = () => {
    const stats = [
        { icon: "👥", title: "Total Students", value: 1250, color: "bg-blue-100 text-blue-600", bgColor: "bg-blue-50" },
        { icon: "🎓", title: "Degrees Issued", value: 342, color: "bg-green-100 text-green-600", bgColor: "bg-green-50" },
        { icon: "⏳", title: "Pending Attestations", value: 18, color: "bg-yellow-100 text-yellow-600", bgColor: "bg-yellow-50" },
        { icon: "✅", title: "Blockchain Verified", value: 298, color: "bg-purple-100 text-purple-600", bgColor: "bg-purple-50" },
    ];

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {stats.map((stat, index) => (
                    <StatCard key={index} {...stat} />
                ))}
            </div>
            <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Recent Activities</h3>
                <div className="space-y-3">
                    <ActivityItem text="New attestation request from BCS-F22-E02" time="5 mins ago" />
                    <ActivityItem text="Degree issued to Nayyab Gull" time="1 hour ago" />
                    <ActivityItem text="HEC attestation completed for 3 students" time="3 hours ago" />
                </div>
            </div>
        </div>
    );
};

const ActivityItem = ({ text, time }) => (
    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition">
        <p className="text-sm text-gray-700">{text}</p>
        <span className="text-xs text-gray-500">{time}</span>
    </div>
);

export default Dashboard;
