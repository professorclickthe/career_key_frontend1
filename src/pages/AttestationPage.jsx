import React from "react";
import StudentNavbar from "../components/studentportal/StudentNavbar";
import AttestationRequestForm from "../components/studentportal/AttestationRequestForm";

const AttestationPage = ({ onNavigate }) => {
    const handleAttestationSubmit = (data) => {
        alert("Attestation request submitted!");
        console.log(data);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
            <StudentNavbar activeSection="attestation" onNavigate={onNavigate} />

            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">📋 Attestation Request</h1>
                    <p className="text-gray-600">Submit your attestation request form here</p>
                </div>
                
                <AttestationRequestForm onSubmit={handleAttestationSubmit} />
            </div>

            <footer className="py-6 text-center text-gray-500 text-sm border-t mt-16">
                © 2025 CareerKey – All Rights Reserved.
            </footer>
        </div>
    );
};

export default AttestationPage;
