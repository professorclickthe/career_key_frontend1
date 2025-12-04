import React, { useState } from "react";

const DegreeIssuance = () => {
    const [formData, setFormData] = useState({
        rollNo: "",
        degreeName: "",
        issueDate: "",
        document: null,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, document: e.target.files[0] });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Degree issued & stored on blockchain!");
        console.log(formData);
        // Backend API call
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">🎓 Issue Degree</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
                <input
                    type="text"
                    name="rollNo"
                    placeholder="Student Roll Number"
                    value={formData.rollNo}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="text"
                    name="degreeName"
                    placeholder="Degree Name (e.g., BS Computer Science)"
                    value={formData.degreeName}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    required
                    className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Upload Degree PDF</label>
                    <input
                        type="file"
                        accept="application/pdf"
                        onChange={handleFileChange}
                        required
                        className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition"
                >
                    Issue & Store on Blockchain
                </button>
            </form>
        </div>
    );
};

export default DegreeIssuance;
