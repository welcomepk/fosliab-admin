import { Navigate, Outlet } from 'react-router';
import { useAuth } from '@/context/authProvider';

const PublicRoute = () => {
    const { isAuthenticated } = useAuth();
    if (isAuthenticated) {
        return <Navigate to="/" />
    }
    return <Outlet />
}

export default PublicRoute