import React from "react";

const TestimonialCard = ({ quote, name, role, avatar }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
        <div className="flex items-start mb-4 text-amber-400 text-xl">
            {"★★★★★"}
        </div>
        <p className="text-gray-600 mb-6 italic">"{quote}"</p>
        <div className="flex items-center">
            <img src={avatar} alt={name} className="w-10 h-10 rounded-full object-cover mr-3" />
            <div>
                <div className="font-semibold text-slate-800">{name}</div>
                <div className="text-xs text-gray-500">{role}</div>
            </div>
        </div>
    </div>
);

export default TestimonialCard;
