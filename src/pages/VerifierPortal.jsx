import React, { useState } from "react";
import VerifierNavbar from "../components/VerifierPortal/VerifierNavbar";
import HeroSection from "../components/VerifierPortal/HeroSection";
import VerificationMethodCard from "../components/VerifierPortal/VerificationMethodCard";
import ScanByQRCode from "../components/VerifierPortal/ScanByQRCode";
import CheckById from "../components/VerifierPortal/CheckById";
import VerificationResult from "../components/VerifierPortal/VerificationResult";
import DocumentPreview from "../components/VerifierPortal/DocumentPreview";
import Navbar from "../components/Navbar";
const VerifierPortal = () => {
    const [showQRModal, setShowQRModal] = useState(false);
    const [showIDModal, setShowIDModal] = useState(false);
    const [result, setResult] = useState(null);
    const [docUrl, setDocUrl] = useState(null);

    const handleNavigate = (section) => {
        document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <Navbar onNavigate={handleNavigate} />

            <div id="home">
                <HeroSection onStartVerification={() => handleNavigate('verify')} />
            </div>

            <section id="verify" className="max-w-5xl mx-auto bg-white/70 backdrop-blur-md shadow-xl rounded-3xl p-10 mb-16">
                <h3 className="text-3xl font-bold mb-8 text-center text-gray-900">Choose Verification Method</h3>
                <div className="grid md:grid-cols-2 gap-10">
                    <VerificationMethodCard
                        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20H8a2 2 0 01-2-2V6a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V18a2 2 0 01-2 2z" /></svg>}
                        title="Scan QR / Upload Document"
                        description="Upload the file or scan the QR code on the degree to verify its authenticity."
                        buttonText="Upload / Scan Now"
                        onClick={() => setShowQRModal(true)}
                        bgColor="bg-blue-50/50"
                        iconColor="bg-blue-100 text-blue-600"
                    />
                    <VerificationMethodCard
                        icon={<svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" /></svg>}
                        title="Verify via Student ID"
                        description="Enter the student's unique ID to fetch and verify their degree details."
                        buttonText="Enter ID"
                        onClick={() => setShowIDModal(true)}
                        bgColor="bg-indigo-50/50"
                        iconColor="bg-indigo-100 text-indigo-600"
                    />
                </div>
            </section>

            <div id="result">
                <VerificationResult result={result} />
                <DocumentPreview docUrl={docUrl} />
            </div>

            {showQRModal && <ScanByQRCode setDocUrl={setDocUrl} setResult={setResult} onClose={() => setShowQRModal(false)} />}
            {showIDModal && <CheckById setDocUrl={setDocUrl} setResult={setResult} onClose={() => setShowIDModal(false)} />}

            <footer className="py-6 text-center text-gray-500 text-sm border-t mt-16">
                © 2025 CareerKey – All Rights Reserved.
            </footer>
        </div>
    );
};

export default VerifierPortal;
