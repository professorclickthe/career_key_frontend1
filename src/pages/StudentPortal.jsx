

import React, { useState } from "react";
import StudentNavbar from "../components/studentportal/StudentNavbar";
import StudentHero from "../components/studentportal/StudentHero";
import DashboardStats from "../components/studentportal/DashboardStats";
import MyDocuments from "../components/studentportal/MyDocuments";
import AttestationPage from "./AttestationPage";
import JobRecommendationsPage from "./JobRecommendationsPage";
import ProfilePage from "./ProfilePage";

const StudentPortal = () => {
    const [activeSection, setActiveSection] = useState('dashboard');

    // Mock data
    const stats = { documents: 5, verified: 3, pending: 2, jobs: 12 };
    const profile = {
        name: "Muhammad Shahis",
        rollNo: "BCS-F22-E02",
        cnic: "12345-1234567-1",
        university: "University of Mianwali",
        degree: "BS Computer Science"
    };
    const documents = [
        { name: "Degree Certificate", status: "Verified", date: "2025-01-15", hash: "QmHash123abc..." },
        { name: "Transcript", status: "Pending", date: "2025-01-20", hash: null },
    ];

    const handleNavigate = (section) => {
        setActiveSection(section);
    };

    // Show different pages based on active section
    if (activeSection === 'attestation') {
        return <AttestationPage onNavigate={handleNavigate} />;
    }

    if (activeSection === 'jobs') {
        return <JobRecommendationsPage onNavigate={handleNavigate} />;
    }

    if (activeSection === 'profile') {
        return <ProfilePage onNavigate={handleNavigate} />;
    }

    // Default dashboard view
    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-green-50">
            <StudentNavbar activeSection={activeSection} onNavigate={handleNavigate} />

            <div className="container mx-auto px-4 py-8">
                <div id="dashboard">
                    <StudentHero studentName={profile.name} />
                    <DashboardStats stats={stats} />
                </div>

                <MyDocuments documents={documents} />
            </div>

            <footer className="py-6 text-center text-gray-500 text-sm border-t mt-16">
                © 2025 CareerKey – All Rights Reserved.
            </footer>
        </div>
    );
};

export default StudentPortal;
