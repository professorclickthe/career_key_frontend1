import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => (
    <nav className="flex items-center justify-between px-5 py-3 bg-white/80 backdrop-blur-md rounded-xl shadow-sm mb-6">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
            <img src={logo} alt="CareerKey logo" className="w-10 h-10 rounded-lg object-cover shadow-sm" />
            <div>
                <h1 className="text-xl font-bold text-slate-800 leading-tight">CareerKey</h1>
                <p className="text-[11px] text-gray-500 tracking-wide">Blockchain & AI • FYP</p>
            </div>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-5">

            <Link to="/" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Home
            </Link>

            <a href="#features" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Features
            </a>

            <a href="#how-it-works" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                How It Works
            </a>

            <Link to="/verify" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition">
                Verify Degree
            </Link>
            <Link
                to="/login"
                className="ml-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-medium shadow-sm hover:shadow-md transition-all"
            >

                Student Portal
            </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition">
            <svg
                className="w-6 h-6 text-gray-700"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
        </button>
    </nav>
);

export default Navbar;
