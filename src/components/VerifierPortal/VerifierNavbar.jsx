import React from "react";
import logo from "../../assets/images/logo.png";

const VerifierNavbar = ({ onNavigate }) => (
    <nav className="flex items-center justify-between px-6 py-4 bg-white/90 backdrop-blur-lg shadow-sm sticky top-0 z-50 border-b border-gray-100">
        <div className="flex items-center gap-3">
            <img src={logo} alt="CareerKey logo" className="w-11 h-11 rounded-xl object-cover shadow-md" />
            <div>
                <h1 className="text-lg font-bold text-slate-800 leading-tight">CareerKey</h1>
                <p className="text-[10px] text-gray-500 tracking-wide uppercase">Verifier Portal</p>
            </div>
        </div>
        <div className="hidden md:flex items-center gap-5">
            <button onClick={() => onNavigate('home')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Home</button>
            <button onClick={() => onNavigate('verify')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Verify</button>
            <button onClick={() => onNavigate('result')} className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">Result</button>
            <a href="/login" className="px-5 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-lg shadow hover:shadow-lg transition">
                Login
            </a>
        </div>
    </nav>
);

export default VerifierNavbar;
