import React from "react";

const ChartsOverview = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="bg-blue-50 rounded-xl flex flex-col items-center justify-center h-56 font-bold text-xl text-blue-700 shadow">
            Chart: Verified vs Pending
        </div>
        <div className="bg-indigo-50 rounded-xl flex flex-col items-center justify-center h-56 font-bold text-xl text-indigo-700 shadow">
            Chart: Blockchain Attestation Over Time
        </div>
    </div>
);

export default ChartsOverview;
