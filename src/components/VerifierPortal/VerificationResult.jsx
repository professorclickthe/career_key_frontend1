import React from "react";

const VerificationResult = ({ result }) => {
    if (!result) return null;

    return (
        <div className={`max-w-2xl mx-auto my-6 p-6 rounded-xl shadow-lg border-l-4 ${result.status === "success" ? "bg-green-50 border-green-500" : "bg-red-50 border-red-500"}`}>
            <p className={`text-lg font-bold ${result.status === "success" ? "text-green-700" : "text-red-700"}`}>
                {result.message}
            </p>
        </div>
    );
};

export default VerificationResult;
