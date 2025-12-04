import React from "react";

const PrimaryButton = ({ text, onClick, type = "button" }) => (
    <button
        type={type}
        onClick={onClick}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-2 rounded-lg shadow hover:shadow-lg transition-all"
    >
        {text}
    </button>
);

export default PrimaryButton;
