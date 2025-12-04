import React from "react";

const ProfileSection = ({ profile }) => (
    <section id="profile" className="max-w-2xl mx-auto bg-white rounded-3xl shadow-xl p-10 mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">👤 My Profile</h3>
        <div className="space-y-4">
            <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">Name:</span>
                <span className="font-semibold text-gray-800">{profile.name}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">Roll Number:</span>
                <span className="font-semibold text-gray-800">{profile.rollNo}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">CNIC:</span>
                <span className="font-semibold text-gray-800">{profile.cnic}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">University:</span>
                <span className="font-semibold text-gray-800">{profile.university}</span>
            </div>
            <div className="flex justify-between border-b pb-3">
                <span className="font-medium text-gray-600">Degree:</span>
                <span className="font-semibold text-gray-800">{profile.degree}</span>
            </div>
        </div>
        <button className="w-full mt-6 px-6 py-3 bg-gradient-to-r from-green-600 to-teal-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition">
            Edit Profile
        </button>
    </section>
);

export default ProfileSection;
