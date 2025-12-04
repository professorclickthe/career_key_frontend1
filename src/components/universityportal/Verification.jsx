import React, { useState } from "react";

const VerificationModal = ({ isOpen, onClose, studentData }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden animate-bounce-in">
                {/* Success Header */}
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-8 text-center">
                    <div className="text-6xl mb-4">✅</div>
                    <h2 className="text-2xl font-bold">Verification Successful!</h2>
                </div>

                {/* Verified Student Details */}
                <div className="p-8 space-y-6">
                    <div className="bg-green-50 border-l-4 border-green-600 p-4">
                        <p className="text-sm text-gray-600 mb-1">Student Name</p>
                        <p className="font-bold text-gray-900 text-lg">{studentData.studentName}</p>
                    </div>

                    <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                        <p className="text-sm text-gray-600 mb-1">CNIC</p>
                        <p className="font-bold text-gray-900 text-lg">{studentData.cnic}</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-purple-50 border-l-4 border-purple-600 p-4">
                            <p className="text-sm text-gray-600 mb-1">Roll Number</p>
                            <p className="font-bold text-gray-900">{studentData.rollNo}</p>
                        </div>
                        <div className="bg-orange-50 border-l-4 border-orange-600 p-4">
                            <p className="text-sm text-gray-600 mb-1">Degree</p>
                            <p className="font-bold text-gray-900 text-sm">{studentData.degree}</p>
                        </div>
                    </div>

                    <div className="bg-indigo-50 border-l-4 border-indigo-600 p-4">
                        <p className="text-sm text-gray-600 mb-1">Verification Date</p>
                        <p className="font-bold text-gray-900">{studentData.verificationDate}</p>
                    </div>

                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <p className="text-xs text-yellow-800">
                            <span className="font-bold">✓ Verified:</span> This student's credentials have been successfully verified and recorded on the blockchain.
                        </p>
                    </div>

                    <button
                        onClick={onClose}
                        className="w-full px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-lg hover:shadow-lg transition"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const Verification = () => {
    const [searchType, setSearchType] = useState("cnic"); // "cnic" or "rollNo"
    const [searchValue, setSearchValue] = useState("");
    const [result, setResult] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [errors, setErrors] = useState({});

    // Mock student database
    const studentDatabase = [
        {
            cnic: "12345-1234567-1",
            rollNo: "BCS-F22-E02",
            studentName: "Muhammad Shahis",
            degree: "BS Computer Science",
            issueDate: "2025-06-15",
            university: "University of Mianwali"
        },
        {
            cnic: "98765-9876543-9",
            rollNo: "BCS-F22-E05",
            studentName: "Ayesha Khan",
            degree: "BS Information Technology",
            issueDate: "2025-06-16",
            university: "University of Mianwali"
        },
        {
            cnic: "55555-5555555-5",
            rollNo: "BCS-F22-E08",
            studentName: "Ali Hassan",
            degree: "BS Computer Science",
            issueDate: "2025-06-17",
            university: "University of Mianwali"
        },
        {
            cnic: "12345-6789012-3",
            rollNo: "BCS-F22-E03",
            studentName: "Fatima Ahmed",
            degree: "BS Computer Science",
            issueDate: "2025-06-18",
            university: "University of Mianwali"
        },
        {
            cnic: "11111-2222222-2",
            rollNo: "BCS-F22-E04",
            studentName: "Hassan Khan",
            degree: "BS Software Engineering",
            issueDate: "2025-06-19",
            university: "University of Mianwali"
        }
    ];

    const validateInput = () => {
        const newErrors = {};

        if (!searchValue.trim()) {
            newErrors.search = `Please enter a ${searchType === "cnic" ? "CNIC" : "Roll Number"}`;
        } else if (searchType === "cnic") {
            // Validate CNIC format (flexible - accepts 5-7-1 or 5-7-2 digit format)
            const cnicRegex = /^\d{5}-\d{7}-\d{1,2}$/;
            if (!cnicRegex.test(searchValue)) {
                newErrors.search = "Please enter a valid CNIC format (e.g., 12345-1234567-1)";
            }
        }

        return newErrors;
    };

    const handleVerify = async () => {
        setErrors({});
        const newErrors = validateInput();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setIsLoading(true);

        // Simulate API call
        setTimeout(() => {
            let foundStudent = null;

            if (searchType === "cnic") {
                foundStudent = studentDatabase.find(
                    (student) => student.cnic.toLowerCase() === searchValue.toLowerCase()
                );
            } else {
                foundStudent = studentDatabase.find(
                    (student) => student.rollNo.toLowerCase() === searchValue.toLowerCase()
                );
            }

            setIsLoading(false);

            if (foundStudent) {
                setResult({
                    found: true,
                    ...foundStudent,
                    blockchainHash: "0x1a2b3c4d5e6f7g8h9i0j...",
                    ipfsHash: "QmHash123abc...",
                    verificationDate: new Date().toLocaleString()
                });
                setShowModal(true);
            } else {
                setErrors({
                    search: `Student ${searchType === "cnic" ? "with this CNIC" : "with this Roll Number"} not found in the system`
                });
                setResult(null);
            }
        }, 1500);
    };

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleVerify();
        }
    };

    return (
        <div className="bg-white rounded-2xl shadow-md p-8 max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold mb-2 text-gray-900 text-center">🔍 Student Verification</h3>
            <p className="text-gray-600 text-center mb-8">Search and verify student credentials by CNIC or Roll Number</p>

            {/* Search Type Selector */}
            <div className="flex gap-4 mb-6">
                <label className={`flex-1 p-4 border-2 rounded-lg cursor-pointer transition ${searchType === "cnic" ? "border-indigo-600 bg-indigo-50" : "border-gray-300"}`}>
                    <input
                        type="radio"
                        name="searchType"
                        value="cnic"
                        checked={searchType === "cnic"}
                        onChange={(e) => {
                            setSearchType(e.target.value);
                            setSearchValue("");
                            setResult(null);
                            setErrors({});
                        }}
                        className="mr-2"
                    />
                    <span className="font-semibold text-gray-800">🆔 Search by CNIC</span>
                </label>
                <label className={`flex-1 p-4 border-2 rounded-lg cursor-pointer transition ${searchType === "rollNo" ? "border-indigo-600 bg-indigo-50" : "border-gray-300"}`}>
                    <input
                        type="radio"
                        name="searchType"
                        value="rollNo"
                        checked={searchType === "rollNo"}
                        onChange={(e) => {
                            setSearchType(e.target.value);
                            setSearchValue("");
                            setResult(null);
                            setErrors({});
                        }}
                        className="mr-2"
                    />
                    <span className="font-semibold text-gray-800">📋 Search by Roll Number</span>
                </label>
            </div>

            {/* Search Input */}
            <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                    {searchType === "cnic" ? "Enter Student CNIC" : "Enter Roll Number"} *
                </label>
                <div className="flex gap-3">
                    <input
                        type="text"
                        placeholder={searchType === "cnic" ? "e.g., 12345-1234567-1" : "e.g., BCS-F22-E02"}
                        value={searchValue}
                        onChange={(e) => {
                            setSearchValue(e.target.value);
                            if (errors.search) setErrors({});
                        }}
                        onKeyPress={handleKeyPress}
                        className={`flex-1 border ${errors.search ? "border-red-500" : "border-gray-300"} rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500`}
                    />
                    <button
                        onClick={handleVerify}
                        disabled={isLoading}
                        className="px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        {isLoading ? "Verifying..." : "✅ Verify"}
                    </button>
                </div>
                {errors.search && <p className="text-red-500 text-sm mt-2">{errors.search}</p>}
            </div>

            {/* Result Display */}
            {result && !showModal && (
                <div className="p-6 bg-gradient-to-r from-green-50 to-teal-50 border-l-4 border-green-600 rounded-xl">
                    <p className="font-bold text-green-700 mb-4 text-lg">✅ Student Found & Verified!</p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                            <p className="text-gray-600 font-medium">Student Name</p>
                            <p className="font-bold text-gray-900">{result.studentName}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">CNIC</p>
                            <p className="font-bold text-gray-900">{result.cnic}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Roll Number</p>
                            <p className="font-bold text-gray-900">{result.rollNo}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Degree</p>
                            <p className="font-bold text-gray-900">{result.degree}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">University</p>
                            <p className="font-bold text-gray-900">{result.university}</p>
                        </div>
                        <div>
                            <p className="text-gray-600 font-medium">Issue Date</p>
                            <p className="font-bold text-gray-900">{result.issueDate}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Help Text */}
            <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-800">
                    <span className="font-bold">💡 Test CNICs:</span> 12345-1234567-1, 98765-9876543-9, 55555-5555555-5, 12345-6789012-3, 11111-2222222-2
                </p>
            </div>

            {/* Verification Modal */}
            <VerificationModal
                isOpen={showModal}
                onClose={() => {
                    setShowModal(false);
                    setSearchValue("");
                    setResult(null);
                }}
                studentData={result}
            />
        </div>
    );
};

export default Verification;
