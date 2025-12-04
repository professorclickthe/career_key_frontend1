import React from "react";

const colors = {
    pending: "bg-yellow-50 text-yellow-700",
    verified: "bg-green-50 text-green-700",
    blockchain: "bg-blue-50 text-blue-700",
    rejected: "bg-red-50 text-red-700",
};

const StatCard = ({ icon, label, value, type }) => (
    <div className={`flex flex-col p-7 gap-2 rounded-2xl shadow hover:scale-105 transition ${colors[type]}`}>
        <span className="text-3xl mb-2">{icon}</span>
        <span className="text-2xl font-bold">{value}</span>
        <span className="text-sm font-semibold">{label}</span>
    </div>
);

export default StatCard;
