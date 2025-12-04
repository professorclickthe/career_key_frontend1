import React from 'react';

const VerificationSection = ({ onQRCodeClick, onIDClick }) => {
    return (
        <section className="py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="grid md:grid-cols-2 gap-6">
                    {/* QR Code Verification Option */}
                    <button
                        onClick={onQRCodeClick}
                        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                    >
                        <div className="w-16 h-16 mb-4 bg-blue-100 rounded-lg flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v1m6 11h2m-6 0h-2m0 0H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Scan QR Code</h3>
                        <p className="text-gray-600">
                            Quickly verify a document by scanning its QR code using your device's camera
                        </p>
                    </button>

                    {/* ID Verification Option */}
                    <button
                        onClick={onIDClick}
                        className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow group"
                    >
                        <div className="w-16 h-16 mb-4 bg-indigo-100 rounded-lg flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                            <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                            </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Check by ID</h3>
                        <p className="text-gray-600">
                            Verify credentials by entering the student or document ID
                        </p>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VerificationSection;