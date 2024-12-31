import { Navigate } from "react-router";
import { useAuth } from "@/context/authProvider";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
    const isAuthenticated = useAuth(); // replace with actual auth check

    return isAuthenticated ? children : <Navigate to="/login" />;
};