import { useAuth } from "@/context/authProvider";
import { Link, Navigate, Outlet } from "react-router";
import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import UserMenu from "./user-menu";
import { Home } from "lucide-react";
import Footer from "./footer";


function ProtectedDashboardLayout() {
    const { isAuthenticated } = useAuth();
    if (!isAuthenticated) {
        return <Navigate to="/login" />
    }
    return (
        <SidebarProvider>
            {/* sidebar left */}
            <AppSidebar />
            {/* application content right */}
            <div className="flex flex-col flex-1">
                <header className="flex items-center justify-between border-b h-16">
                    <Link to="/" className="bg-primary hover:bg-primary/80 p-2 rounded-full ml-8">
                        <Home className="h-5 w-5 text-white" />
                    </Link>
                    <div className="flex flex-col">
                        <h1 className="text-lg font-semibold text-brand">Doorstep Account Management</h1>
                        <span className="text-sm self-end text-cBrand">V.20.0.1</span>
                    </div>
                    <div className="pr-8">
                        <UserMenu />
                    </div>
                </header>
                <main className="flex-1 p-8 md:p-14 ">
                    <Outlet />
                </main>
                <Footer />
            </div>
        </SidebarProvider>
    )
}

export default ProtectedDashboardLayout