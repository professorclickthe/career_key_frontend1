import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";
import FeatureCard from "../components/FeatureCard.jsx";
import StepCard from "../components/StepCard.jsx";
import TestimonialCard from "../components/TestimonialCard.jsx";



const LandingPage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Background shapes */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-100 rounded-full opacity-20 blur-3xl"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8">
            <Navbar />

            {/* Hero Section */}
            <div className="py-20 text-center">
                <h1 className="text-5xl font-bold text-gray-900 mb-6">
                    Secure Your Academic Future with
                    <span className="text-blue-600"> CareerKey</span>
                </h1>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
                    Revolutionizing degree verification through blockchain technology.
                    Secure, transparent, and instant verification for students and employers.
                </p>
                <div className="flex gap-4 justify-center">
                    <Link to="/login"
                        className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
                        Get Started
                    </Link>
                    <Link to="/verifier-portal"
                        className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold hover:bg-gray-50 transition shadow-lg hover:shadow-xl border border-blue-100">
                        Verify a Degree
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <div id="features" className="py-20">
                <h2 className="text-3xl font-bold text-center mb-12">Why Choose CareerKey?</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Blockchain Security"
                        description="Your academic credentials are secured by cutting-edge blockchain technology"
                        icon="🔒"
                    />
                    <FeatureCard
                        title="Instant Verification"
                        description="Verify degrees in seconds, not days or weeks"
                        icon="⚡"
                    />
                    <FeatureCard
                        title="AI-Powered"
                        description="Smart validation and fraud detection using artificial intelligence"
                        icon="🤖"
                    />
                </div>
            </div>

            {/* How It Works Section */}
            <div id="how-it-works" className="py-20">
                <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <StepCard
                        step="1"
                        title="Register"
                        description="Create your account with your academic institution details"
                    />
                    <StepCard
                        step="2"
                        title="Upload"
                        description="Submit your degree for blockchain verification"
                    />
                    <StepCard
                        step="3"
                        title="Share"
                        description="Share your verified credentials with employers"
                    />
                </div>
            </div>

            {/* Testimonials */}
            <div className="py-20">
                <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <TestimonialCard
                        name="Sarah Johnson"
                        role="Recent Graduate"
                        text="CareerKey made sharing my verified credentials with employers so much easier!"
                    />
                    <TestimonialCard
                        name="Michael Chen"
                        role="HR Manager"
                        text="This platform has streamlined our verification process significantly."
                    />
                </div>
            </div>

            <Footer />
        </div>
    </div>
);

export default LandingPage;
