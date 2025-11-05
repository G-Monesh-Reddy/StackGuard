import { useAuth } from "../context/AuthContext";

export default function DashboardPage() {
    const { user, logout } = useAuth();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold mb-2">Dashboard Page</h1>
            <p className="text-gray-600 mb-4">
                Hello {user?.email || "user"}, how are you doing today?
            </p>
            <button
                onClick={logout}
                className="bg-gray-800 text-white rounded p-2 hover:bg-gray-900"
            >
                Logout
            </button>
        </div>
    );
}
