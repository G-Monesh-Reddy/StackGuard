import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

import stackGuard from "../assets/Images/stackGuard.png";

export default function AuthPage() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    const navigate = useNavigate();
    const { signIn, signUp } = useAuth();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (isSignUp) {
            if (password !== confirm) return alert("Passwords do not match");
            if (signUp(email, password)) navigate("/config");
        } else {
            if (signIn(email, password)) navigate("/config");
        }
    };

    return (
        <div className="min-h-screen flex">
            <div className="flex-1 bg-gray-200"></div>
            <div className="flex-1 flex flex-col justify-center items-center p-8">
                <div className="flex flex-row justify-center align-middle content-between mb-6">
                    <img
                        src={stackGuard}
                        alt="StackGuard Logo"
                        className="w-8 h-8"
                    />
                    <p className="text-2xl font-semibold mb-2">Stackguard</p>
                </div>
                <h1 className="text-2xl font-semibold mb-2">
                    {isSignUp
                        ? "Welcome to Stackguard"
                        : "Welcome back to Stackguard"}
                </h1>
                <p className="text-sm text-gray-500 mb-4">
                    Secure your codebase with advanced secret scanning best
                    practices
                </p>

                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-sm space-y-3"
                >
                    {isSignUp && (
                        <div className="flex space-x-2">
                            <input
                                className="w-1/2 border rounded p-2"
                                placeholder="Enter first name"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                            <input
                                className="w-1/2 border rounded p-2"
                                placeholder="Enter last name"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    )}
                    <input
                        type="email"
                        placeholder="Enter email ID"
                        className="w-full border rounded p-2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Enter password"
                        className="w-full border rounded p-2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {isSignUp && (
                        <input
                            type="password"
                            placeholder="Confirm password"
                            className="w-full border rounded p-2"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                        />
                    )}
                    <button className="w-full bg-purple-700 text-white rounded p-2 hover:bg-purple-800">
                        {isSignUp ? "Create account" : "Sign in"}
                    </button>
                </form>

                <p className="text-sm mt-4">
                    {isSignUp ? (
                        <>
                            Already have an account?{" "}
                            <button
                                className="text-purple-600"
                                onClick={() => setIsSignUp(false)}
                            >
                                Sign in
                            </button>
                        </>
                    ) : (
                        <>
                            Don’t have an account?{" "}
                            <button
                                className="text-purple-600"
                                onClick={() => setIsSignUp(true)}
                            >
                                Create one
                            </button>
                        </>
                    )}
                </p>
            </div>
        </div>
    );
}
