import { useLocalStorage } from '@/hooks/use-local-storage';
import { createContext, useContext, ReactNode } from 'react';
import { useNavigate } from 'react-router';

interface User {
    id: string;
    username: string;
}

interface AuthContextType {
    isAuthenticated: boolean | null;
    user: User | null;
    authToken: string | null;
    login: (token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [isAuthenticated, setIsAuthenticated] = useLocalStorage<boolean | null>("loggedIn", false);
    const [user, setUser] = useLocalStorage<User | null>("user", null);
    const [authToken, setAuthToken] = useLocalStorage<string | null>("authToken", null);

    const navigate = useNavigate();

    const login = (token: string) => {
        setAuthToken(token);
        setIsAuthenticated(true);
        navigate('/');
    };

    const logout = () => {
        setUser(null);
        setIsAuthenticated(false);
        navigate('/login', { replace: true });
    };

    return (
        <AuthContext.Provider value={{ user, authToken, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};