
import { useAuth } from "@/context/authProvider"
import LoginForm from "@/components/login-form"

function LoginPage() {
    const { login } = useAuth()

    return (
        <main className="flex min-h-svh w-full bg-slate-200 items-center justify-center p-6 md:p-10">
            <div className="w-full max-w-sm">
                <LoginForm />
            </div>
        </main>
    )
}

export default LoginPage