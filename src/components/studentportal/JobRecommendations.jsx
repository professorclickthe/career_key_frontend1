import React from "react";

const JobCard = ({ title, company, location, matchScore }) => (
    <div className="p-6 bg-white rounded-2xl shadow-md border border-gray-100 hover:shadow-xl transition transform hover:-translate-y-1">
        <div className="flex items-start justify-between mb-3">
            <div>
                <h4 className="font-bold text-lg text-gray-800">{title}</h4>
                <p className="text-sm text-gray-500">{company}</p>
            </div>
            <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">{matchScore}% Match</span>
        </div>
        <p className="text-sm text-gray-600 mb-4">📍 {location}</p>
        <button className="w-full px-4 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg hover:shadow-md transition">
            View Details
        </button>
    </div>
);

const JobRecommendations = ({ jobs }) => (
    <section id="jobs" className="mb-10">
        <h3 className="text-3xl font-bold mb-6 text-gray-900 text-center">💼 AI-Powered Job Recommendations</h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {jobs.map((job, index) => (
                <JobCard key={index} {...job} />
            ))}
        </div>
    </section>
);

export default JobRecommendations;
