import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export const ProtectedRoute = ({ children, requireConfig = false }) => {
    const { user, configKey } = useAuth();

    if (!user) return <Navigate to="/" replace />;
    if (requireConfig && !configKey) return <Navigate to="/config" replace />;
    return children;
};
