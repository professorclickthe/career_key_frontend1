import React from "react";
import logo from "../../assets/images/logo.png";

const StudentNavbar = ({ activeSection, onNavigate }) => (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
            <img src={logo} alt="CareerKey logo" className="w-11 h-11 rounded-xl object-cover shadow-md" />
            <div>
                <h1 className="text-lg font-bold text-slate-800 leading-tight">CareerKey</h1>
                <p className="text-[10px] text-gray-500 tracking-wide uppercase">Student Portal</p>
            </div>
        </div>
        <div className="hidden md:flex items-center gap-5">
            <button
                onClick={() => onNavigate('dashboard')}
                className={`text-sm font-medium transition ${activeSection === 'dashboard' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
                Dashboard
            </button>
            <button
                onClick={() => onNavigate('attestation')}
                className={`text-sm font-medium transition ${activeSection === 'attestation' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
                Request Attestation
            </button>
            <button
                onClick={() => onNavigate('jobs')}
                className={`text-sm font-medium transition ${activeSection === 'jobs' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
                Job Recommendations
            </button>
            <button
                onClick={() => onNavigate('documents')}
                className={`text-sm font-medium transition ${activeSection === 'documents' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
                My Documents
            </button>
            <button
                onClick={() => onNavigate('profile')}
                className={`text-sm font-medium transition ${activeSection === 'profile' ? 'text-green-600' : 'text-gray-700 hover:text-green-600'}`}
            >
                Profile
            </button>
            <a href="/logout" className="px-5 py-2 bg-gradient-to-r from-green-600 to-teal-600 text-white text-sm font-semibold rounded-lg shadow hover:shadow-lg transition">
                Logout
            </a>
        </div>
    </nav>
);

export default StudentNavbar;
