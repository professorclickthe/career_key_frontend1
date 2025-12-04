import React, { useState } from "react";

const UniversityRegistration = () => {
    const [formData, setFormData] = useState({
        universityName: "",
        hecRegNo: "",
        password: "",
        confirmPassword: "",
        email: "",
        phone: "",
        address: "",
        city: "",
        province: "",
        contactPerson: "",
        designation: ""
    });

    const [errors, setErrors] = useState({});
    const [successMessage, setSuccessMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) {
            setErrors({ ...errors, [name]: "" });
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.universityName.trim()) {
            newErrors.universityName = "University name is required";
        }
        if (!formData.hecRegNo.trim()) {
            newErrors.hecRegNo = "HEC Registration Number is required";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 8) {
            newErrors.password = "Password must be at least 8 characters";
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }
        if (!formData.phone.trim()) {
            newErrors.phone = "Phone number is required";
        }
        if (!formData.address.trim()) {
            newErrors.address = "Address is required";
        }
        if (!formData.city.trim()) {
            newErrors.city = "City is required";
        }
        if (!formData.province.trim()) {
            newErrors.province = "Province is required";
        }
        if (!formData.contactPerson.trim()) {
            newErrors.contactPerson = "Contact person name is required";
        }
        if (!formData.designation.trim()) {
            newErrors.designation = "Designation is required";
        }

        return newErrors;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSuccessMessage("");

        const newErrors = validateForm();
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            console.log("University Registration Data:", formData);
            setSuccessMessage("✓ University registered successfully! Your registration has been submitted for verification.");
            setFormData({
                universityName: "",
                hecRegNo: "",
                password: "",
                confirmPassword: "",
                email: "",
                phone: "",
                address: "",
                city: "",
                province: "",
                contactPerson: "",
                designation: ""
            });
            setIsLoading(false);

            // Clear success message after 5 seconds
            setTimeout(() => setSuccessMessage(""), 5000);
        }, 1500);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-100 p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-10">
                    <h1 className="text-4xl font-bold text-gray-900 mb-2">🏫 University Registration</h1>
                    <p className="text-gray-600 text-lg">Register your university with HEC Portal to manage attestations and student verification</p>
                </div>

                {/* Success Message */}
                {successMessage && (
                    <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg text-center font-semibold">
                        {successMessage}
                    </div>
                )}

                {/* Registration Form */}
                <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-10">
                    {/* Basic Information */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-indigo-400">📋 Basic Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">University Name *</label>
                                <input
                                    type="text"
                                    name="universityName"
                                    value={formData.universityName}
                                    onChange={handleInputChange}
                                    placeholder="Enter university name"
                                    className={`w-full px-4 py-3 border ${errors.universityName ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.universityName && <p className="text-red-500 text-sm mt-1">{errors.universityName}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">HEC Registration Number *</label>
                                <input
                                    type="text"
                                    name="hecRegNo"
                                    value={formData.hecRegNo}
                                    onChange={handleInputChange}
                                    placeholder="e.g., HEC-2025-001"
                                    className={`w-full px-4 py-3 border ${errors.hecRegNo ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.hecRegNo && <p className="text-red-500 text-sm mt-1">{errors.hecRegNo}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    placeholder="university@email.com"
                                    className={`w-full px-4 py-3 border ${errors.email ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    placeholder="+92-XX-XXXXXXX"
                                    className={`w-full px-4 py-3 border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Address Information */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-indigo-400">📍 Address Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="md:col-span-2">
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Street Address *</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleInputChange}
                                    placeholder="Enter complete street address"
                                    className={`w-full px-4 py-3 border ${errors.address ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">City *</label>
                                <input
                                    type="text"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleInputChange}
                                    placeholder="Enter city name"
                                    className={`w-full px-4 py-3 border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Province/State *</label>
                                <input
                                    type="text"
                                    name="province"
                                    value={formData.province}
                                    onChange={handleInputChange}
                                    placeholder="Enter province/state"
                                    className={`w-full px-4 py-3 border ${errors.province ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.province && <p className="text-red-500 text-sm mt-1">{errors.province}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Contact Person */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-indigo-400">👤 Contact Person</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Contact Person Name *</label>
                                <input
                                    type="text"
                                    name="contactPerson"
                                    value={formData.contactPerson}
                                    onChange={handleInputChange}
                                    placeholder="Enter full name"
                                    className={`w-full px-4 py-3 border ${errors.contactPerson ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.contactPerson && <p className="text-red-500 text-sm mt-1">{errors.contactPerson}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Designation *</label>
                                <input
                                    type="text"
                                    name="designation"
                                    value={formData.designation}
                                    onChange={handleInputChange}
                                    placeholder="e.g., Registrar, Director"
                                    className={`w-full px-4 py-3 border ${errors.designation ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.designation && <p className="text-red-500 text-sm mt-1">{errors.designation}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Security Information */}
                    <div className="mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-4 border-b-2 border-indigo-400">🔐 Security Information</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Password *</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    placeholder="Enter a strong password (min 8 characters)"
                                    className={`w-full px-4 py-3 border ${errors.password ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Confirm Password *</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    placeholder="Confirm your password"
                                    className={`w-full px-4 py-3 border ${errors.confirmPassword ? "border-red-500" : "border-gray-300"} rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 transition`}
                                />
                                {errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>}
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="flex gap-4">
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="flex-1 px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:from-indigo-700 hover:to-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            {isLoading ? "Registering..." : "📝 Register University"}
                        </button>
                        <button
                            type="reset"
                            className="flex-1 px-8 py-4 bg-gray-400 text-white font-bold text-lg rounded-lg shadow-lg hover:shadow-xl hover:bg-gray-500 transition"
                        >
                            Clear Form
                        </button>
                    </div>

                    <p className="text-xs text-gray-500 mt-6 text-center">
                        By registering, you agree to our terms and conditions. Your registration will be verified by HEC before approval.
                    </p>
                </form>
            </div>
        </div>
    );
};

export default UniversityRegistration;
