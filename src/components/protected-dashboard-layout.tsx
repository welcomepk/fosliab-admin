import { useAuth } from "@/context/authProvider";
import { Navigate, Outlet } from "react-router";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"


function ProtectedDashboardLayout() {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <SidebarProvider>
            <AppSidebar />
            <main>
                <SidebarTrigger />
                <Outlet />
            </main>
        </SidebarProvider>
    )
}

export default ProtectedDashboardLayout