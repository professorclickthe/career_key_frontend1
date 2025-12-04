import React from "react";

const Settings = () => (
    <div className="bg-white rounded-2xl shadow-md p-8 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">⚙️ Settings</h3>
        <div className="space-y-4">
            <SettingItem label="University Name" value="University of Mianwali" />
            <SettingItem label="HEC Registration No" value="HEC-001234" />
            <SettingItem label="Blockchain Network" value="Ethereum (Sepolia)" />
            <SettingItem label="Smart Contract Address" value="0x1a2b3c..." />
            <SettingItem label="IPFS Gateway" value="https://ipfs.io" />
        </div>
        <button className="mt-6 w-full px-6 py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition">
            Update Settings
        </button>
    </div>
);

const SettingItem = ({ label, value }) => (
    <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
        <span className="font-medium text-gray-700">{label}:</span>
        <span className="text-gray-900 font-semibold">{value}</span>
    </div>
);

export default Settings;
