import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Footer = () => (
    <div className="px-6 py-8 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-4">
                <img src={logo} alt="CareerKey logo" className="w-10 h-10 rounded-xl object-cover" />
                <div>
                    <h3 className="font-bold text-slate-800">CareerKey</h3>
                    <p className="text-xs text-gray-500">Blockchain & AI — FYP</p>
                </div>
            </div>

            <div className="flex flex-wrap justify-center gap-6">
                <Link className="text-sm text-gray-600 hover:text-blue-600 transition" to="/">Home</Link>
                <a className="text-sm text-gray-600 hover:text-blue-600 transition" href="#features">Features</a>
                <a className="text-sm text-gray-600 hover:text-blue-600 transition" href="#how-it-works">How It Works</a>
                <Link className="text-sm text-gray-600 hover:text-blue-600 transition" to="/verify">Verify Degree</Link>
                <Link className="text-sm text-gray-600 hover:text-blue-600 transition" to="/student/login">Student Portal</Link>
            </div>

            <div className="text-sm text-gray-600 text-center md:text-right">
                <div>© {new Date().getFullYear()} CareerKey — Final Year Project (BCS)</div>
                <div className="text-xs mt-1">Built with React, Tailwind, Spring Boot & Blockchain</div>
            </div>
        </div>
    </div>
);

export default Footer;
