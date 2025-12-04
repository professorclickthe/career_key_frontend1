import React, { useState } from "react";
import Sidebar from "../components/universityportal/Sidebar";
import Header from "../components/universityportal/Header";
import Dashboard from "../components/universityportal/Dashboard";
import Students from "../components/universityportal/Students";
import Attestations from "../components/universityportal/Attestations";
import DegreeIssuance from "../components/universityportal/DegreeIssuance";
import Verification from "../components/universityportal/Verification";
import Reports from "../components/universityportal/Reports";
import Settings from "../components/universityportal/Settings";

const UniversityPortal = () => {
    const [activeTab, setActiveTab] = useState("dashboard");

    const renderContent = () => {
        switch (activeTab) {
            case "dashboard": return <Dashboard />;
            case "students": return <Students />;
            case "attestations": return <Attestations />;
            case "degree-issuance": return <DegreeIssuance />;
            case "verification": return <Verification />;
            case "reports": return <Reports />;
            case "settings": return <Settings />;
            default: return <Dashboard />;
        }
    };

    return (
        <div className="flex h-screen overflow-hidden bg-gray-50">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="flex-1 flex flex-col overflow-auto">
                <Header title={activeTab.replace("-", " ").toUpperCase()} universityName="University of Mianwali" />
                <main className="p-8">{renderContent()}</main>
            </div>
        </div>
    );
};

export default UniversityPortal;
