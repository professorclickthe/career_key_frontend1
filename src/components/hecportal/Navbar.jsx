import React from "react";

const Navbar = ({ admin }) => (
    <nav className="flex items-center justify-between px-8 py-4 bg-indigo-900 text-white shadow-lg sticky top-0 z-50">
        <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center text-indigo-900 font-extrabold text-2xl">
                HEC
            </div>
            <h1 className="font-bold text-2xl tracking-tight">HEC Admin Panel</h1>
        </div>
        <div className="flex items-center gap-4">
            <span className="font-semibold text-lg">{admin?.name || "Admin"}</span>
            <button className="bg-pink-600 hover:bg-pink-700 px-4 py-1 text-white font-bold rounded-xl shadow-md">
                Logout
            </button>
        </div>
    </nav>
);

export default Navbar;
