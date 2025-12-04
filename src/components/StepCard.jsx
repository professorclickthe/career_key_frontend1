import React from "react";

const StepCard = ({ number, title, desc, isLast }) => (
    <div className="flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mb-4">
            {number}
        </div>
        <div className="text-center">
            <h5 className="font-bold text-lg mb-2">{title}</h5>
            <p className="text-gray-600 text-sm">{desc}</p>
        </div>
        {!isLast && <div className="hidden md:block h-0.5 w-full bg-gradient-to-r from-blue-200 to-indigo-200 mt-8"></div>}
    </div>
);

export default StepCard;
