import React from "react";

const DocumentCard = ({ name, status, date, hash }) => (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-lg transition">
        <div className="flex items-center justify-between mb-3">
            <h4 className="font-bold text-lg text-gray-800">{name}</h4>
            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${status === 'Verified' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>
                {status}
            </span>
        </div>
        <p className="text-sm text-gray-500 mb-2">📅 Submitted: {date}</p>
        {hash && <p className="text-xs text-gray-400 mb-4">🔗 IPFS: {hash.slice(0, 20)}...</p>}
        <button className="w-full px-4 py-2 bg-blue-600 text-white text-sm font-semibold rounded-lg hover:bg-blue-700 transition">
            View Document
        </button>
    </div>
);

const MyDocuments = ({ documents }) => (
    <section id="documents" className="mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">📂 My Documents</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
                <DocumentCard key={index} {...doc} />
            ))}
        </div>
    </section>
);

export default MyDocuments;
