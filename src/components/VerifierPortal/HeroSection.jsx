import React from "react";

const HeroSection = ({ onStartVerification }) => (
    <section className="text-center py-20 px-4">
        <div className="inline-block mb-3">
            <span className="px-4 py-1.5 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">Blockchain Powered</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 leading-tight">
            Verify Documents <span className="text-blue-600">Instantly</span>
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Use the verifier portal to authenticate academic records using QR code, uploaded file, or student ID — powered by blockchain trust.
        </p>
        <button
            onClick={onStartVerification}
            className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition transform"
        >
            Start Verification
        </button>
    </section>
);

export default HeroSection;
