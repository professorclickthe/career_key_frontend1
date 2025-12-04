import React from "react";

const Reports = () => (
    <div className="bg-white rounded-2xl shadow-md p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">📄 Reports</h3>
        <div className="grid md:grid-cols-2 gap-6">
            <ReportCard title="Monthly Issued Degrees" count={42} />
            <ReportCard title="Department-wise Stats" count={5} />
            <ReportCard title="Pending Attestations" count={18} />
            <ReportCard title="Blockchain Transactions" count={298} />
        </div>
        <button className="mt-6 px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Export All Reports (CSV)
        </button>
    </div>
);

const ReportCard = ({ title, count }) => (
    <div className="p-6 bg-indigo-50 rounded-xl border hover:shadow-md transition">
        <h4 className="font-semibold text-gray-800 mb-2">{title}</h4>
        <p className="text-3xl font-bold text-indigo-600">{count}</p>
    </div>
);

export default Reports;
