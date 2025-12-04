import React from "react";

const RequestDetailsModal = ({ request, onClose }) => (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg p-8 relative">
            <button onClick={onClose} className="absolute top-4 right-5 text-lg text-gray-300 hover:text-indigo-500 font-bold">✖</button>
            <h3 className="text-2xl font-bold mb-4 text-indigo-900">Request Details</h3>
            <div className="mb-4">
                <div className="text-sm mb-2"><b>Name:</b> {request.name}</div>
                <div className="text-sm mb-2"><b>CNIC:</b> {request.cnic}</div>
                <div className="text-sm mb-2"><b>University:</b> {request.university}</div>
                <div className="text-sm mb-2"><b>Degree:</b> {request.degree}</div>
                <div className="text-sm mb-2"><b>Date:</b> {request.date}</div>
            </div>
            <div className="flex gap-4">
                <button className="flex-1 px-6 py-2 bg-green-600 text-white rounded-xl shadow hover:bg-green-700 font-semibold">
                    Approve & Stamp
                </button>
                <button className="flex-1 px-6 py-2 bg-pink-600 text-white rounded-xl shadow hover:bg-pink-700 font-semibold">
                    Reject
                </button>
            </div>
        </div>
    </div>
);

export default RequestDetailsModal;
