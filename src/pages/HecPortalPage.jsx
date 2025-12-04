import React, { useState } from "react";
import Navbar from "../components/hecportal/Navbar";
import Sidebar from "../components/hecportal/Sidebar";
import Dashboard from "../components/hecportal/Dashboard";
import PendingRequests from "../components/hecportal/PendingRequests";
import VerifiedRequests from "../components/hecportal/VerifiedRequests";
import AuditLogs from "../components/hecportal/AuditLogs";
import ChartsOverview from "../components/hecportal/ChartsOverview";
import UniversityRegistration from "../components/hecportal/UniversityRegistration";

const admin = { name: "HEC Admin" };

const HecPortalPage = () => {
    const [activeTab, setActiveTab] = useState("dashboard");

    return (
        <div className="min-h-screen flex bg-gradient-to-br from-indigo-50 via-white to-blue-100">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 flex flex-col min-h-screen">
                <Navbar admin={admin} />
                <main className="flex-1 p-8">
                    {activeTab === "dashboard" && <Dashboard />}
                    {activeTab === "pending" && <PendingRequests />}
                    {activeTab === "verified" && <VerifiedRequests />}
                    {activeTab === "logs" && <AuditLogs />}
                    {activeTab === "charts" && <ChartsOverview />}
                    {activeTab === "register" && <UniversityRegistration />}
                </main>
                <footer className="py-5 bg-white text-center text-sm text-indigo-700 shadow-md">
                    © 2025 CareerKey • Blockchain Verified Attestations
                </footer>
            </div>
        </div>
    );
};

export default HecPortalPage;
