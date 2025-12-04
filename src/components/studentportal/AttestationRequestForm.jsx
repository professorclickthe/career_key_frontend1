import React, { useState } from "react";
import PaymentModal from "./PaymentModal";

const AttestationRequestForm = ({ onSubmit }) => {
    const [formData, setFormData] = useState({
        rollNo: "",
        name: "",
        cnic: "",
        degree: "",
        university: "",
        document: null,
    });
    const [showPaymentModal, setShowPaymentModal] = useState(false);
    const [documentFileName, setDocumentFileName] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setFormData({ ...formData, document: file });
        setDocumentFileName(file ? file.name : "");
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        // Show payment modal instead of direct submission
        setShowPaymentModal(true);
    };

    const handlePaymentSuccess = (paymentData) => {
        // After payment, submit the form with payment details
        onSubmit({
            ...formData,
            paymentData,
            status: "Payment Completed"
        });
        setShowPaymentModal(false);
    };

    return (
        <>
            <section id="attestation" className="max-w-3xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-10">
                <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">📝 Request Attestation</h3>
                <form onSubmit={handleSubmitClick} className="space-y-5">
                    <div className="grid md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            name="rollNo"
                            placeholder="Roll Number"
                            value={formData.rollNo}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <input
                        type="text"
                        name="cnic"
                        placeholder="CNIC (e.g., 12345-1234567-1)"
                        value={formData.cnic}
                        onChange={handleChange}
                        required
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                    <div className="grid md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            name="degree"
                            placeholder="Degree Title (e.g., BS Computer Science)"
                            value={formData.degree}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                        <input
                            type="text"
                            name="university"
                            placeholder="University Name"
                            value={formData.university}
                            onChange={handleChange}
                            required
                            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload Document (PDF/Image)</label>
                        <div className="relative">
                            <input
                                type="file"
                                accept="application/pdf,image/*"
                                onChange={handleFileChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
                            />
                            {documentFileName && (
                                <p className="text-sm text-green-600 mt-2">✓ {documentFileName}</p>
                            )}
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-6 py-3.5 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition transform"
                    >
                        💳 Submit Request & Pay Fee
                    </button>
                </form>
            </section>

            {/* Payment Modal */}
            <PaymentModal
                isOpen={showPaymentModal}
                onClose={() => setShowPaymentModal(false)}
                onPaymentSubmit={handlePaymentSuccess}
                amount={500}
            />
        </>
    );
};

export default AttestationRequestForm;
