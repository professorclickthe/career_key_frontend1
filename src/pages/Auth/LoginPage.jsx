import React, { useState } from "react";
import AuthCard from "../../components/auth/AuthCard";
import InputField from "../../components/common/InputField";
import PrimaryButton from "../../components/common/PrimaryButton";
import RoleSelector from "../../components/auth/RoleSelector";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [selectedRole, setSelectedRole] = useState("Student");
    const [formData, setFormData] = useState({ email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleLogin = (e) => {
        e.preventDefault();
        console.log(`${selectedRole} logging in...`, formData);

        // Navigate based on selected role
        if (selectedRole === "Student") {
            navigate('/student-portal');
        } else if (selectedRole === "University") {
            navigate('/university-portal');
        } else if (selectedRole === "HEC") {
            navigate('/hec-portal');
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-blue-50">
            <AuthCard title={`${selectedRole} Login`}>
                <RoleSelector selectedRole={selectedRole} setSelectedRole={setSelectedRole} />

                <form onSubmit={handleLogin} className="flex flex-col gap-4">
                    <InputField
                        label="Email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                    />
                    <InputField
                        label="Password"
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                    />

                    <PrimaryButton text="Login" type="submit" />
                </form>

                {selectedRole === "Student" && (
                    <p className="text-sm text-center text-gray-600 mt-4">
                        Don't have an account?{" "}

                        <Link to="/signup" className="text-blue-600 hover:underline">
                            Sign up
                        </Link>

                    </p>
                )}
            </AuthCard>
        </div>
    );
};

export default LoginPage;
