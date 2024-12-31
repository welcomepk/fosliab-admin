import { useAuth } from "@/context/authProvider";
import { Navigate, Outlet } from "react-router";


function ProtectedDashboardLayout() {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <div>
            {/* sidebar */}
            Dashboard
            <Outlet />
            {/* main */}
            {/* header */}
        </div>
    )
}

export default ProtectedDashboardLayout