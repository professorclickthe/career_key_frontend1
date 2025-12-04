import React from "react";

const StudentHero = ({ studentName }) => (
    <section className="text-center py-16 px-4 bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl mb-8">
        <div className="inline-block mb-3">
            <span className="px-4 py-1.5 bg-green-100 text-green-700 text-xs font-semibold rounded-full">Welcome Back</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-3 text-gray-900 leading-tight">
            Hello, <span className="text-green-600">{studentName || "Student"}</span>! 👋
        </h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Manage your attestation requests, view verified documents, and explore AI-powered job recommendations — all in one place.
        </p>
    </section>
);

export default StudentHero;
