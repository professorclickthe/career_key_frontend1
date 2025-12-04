import React from "react";

const VerificationMethodCard = ({ icon, title, description, buttonText, onClick, bgColor, iconColor }) => (
    <div className={`p-8 border border-gray-200 rounded-2xl hover:shadow-xl transition transform hover:-translate-y-1 text-center flex flex-col items-center ${bgColor}`}>
        <div className={`w-16 h-16 ${iconColor} rounded-2xl flex items-center justify-center mb-4 shadow-md`}>
            {icon}
        </div>
        <h4 className="font-bold text-lg mb-2 text-gray-800">{title}</h4>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">{description}</p>
        <button
            onClick={onClick}
            className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow hover:shadow-md transition"
        >
            {buttonText}
        </button>
    </div>
);

export default VerificationMethodCard;
