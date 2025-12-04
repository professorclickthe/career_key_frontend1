import React from "react";

const FeatureCards = ({ title, desc, icon, gradient }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100`}>
        <div className={`w-14 h-14 rounded-full flex items-center justify-center text-white text-xl ${gradient}`}>
            {icon}
        </div>
        <h3 className="text-xl font-bold text-slate-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{desc}</p>
    </div>
);

export default FeatureCards;
