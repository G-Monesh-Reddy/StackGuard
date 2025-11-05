import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import stackGuard from "../assets/Images/stackGuard.png";

export default function ConfigPage() {
    const [key, setKey] = useState("");
    const navigate = useNavigate();
    const { setConfigKey } = useAuth();

    const handleVerify = () => {
        if (key.length >= 100 && key.length <= 1000) {
            setConfigKey(key);
            navigate("/dashboard");
        } else {
            alert("Public key must be between 100 and 1000 characters.");
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
                    Verify your public key
                </h1>
                <p className="text-sm text-gray-500 mb-4">
                    To get started, provide your public key for verification
                </p>

                <input
                    type="text"
                    placeholder="Enter your public key"
                    className="w-full max-w-sm border rounded p-2 mb-4"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}
                />
                <button
                    onClick={handleVerify}
                    className="w-full max-w-sm bg-purple-700 text-white rounded p-2 hover:bg-purple-800"
                >
                    Verify
                </button>
            </div>
        </div>
    );
}
