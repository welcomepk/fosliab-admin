import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/context/authProvider"
import { FormEvent, useState } from "react"

interface LoginFormState {
    username: string;
    password: string;
}
export default function LoginForm({
    className,
    ...props
}: React.ComponentPropsWithoutRef<"div">) {

    const { login } = useAuth();
    const [user, setUser] = useState<LoginFormState>({} as LoginFormState);

    const handleLogin = (e: FormEvent) => {
        e.preventDefault();
        if (!user.username || !user.password) {
            alert("Please enter your username and password");
            return;
        }
        if (user.username === "admin" && user.password === "password") {
            login("token123", { id: "1", username: user.username });
        }
        else {
            alert("Invalid username or password");
        }
    }
    return (
        <div className={cn("flex flex-col gap-6", className)} {...props}>
            <Card>
                <CardHeader>
                    <CardTitle className="text-2xl"><h2 className="font-normal">Login</h2></CardTitle>
                    <CardDescription>
                        Enter your username below to login to your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin}>
                        <div className="flex flex-col gap-6">
                            <div className="grid gap-3">
                                <Label htmlFor="username">Username</Label>
                                <Input
                                    id="username"
                                    type="text"
                                    placeholder="Enter your username"
                                    required
                                    onChange={(e) => setUser({ ...user, username: e.target.value })}
                                />
                            </div>
                            <div className="grid gap-3">
                                <Label htmlFor="password">Password</Label>
                                <Input
                                    id="password"
                                    type="password"
                                    placeholder="Enter your password"
                                    required
                                    onChange={(e) => setUser({ ...user, password: e.target.value })}
                                />
                            </div>
                            <Button onClick={handleLogin} variant="brand" type="submit" className="w-full">
                                Login
                            </Button>
                        </div>
                        {/* <div className="mt-4 text-center text-sm">
                            Don&apos;t have an account?{" "}
                            <a href="#" className="underline underline-offset-4">
                                Sign up
                            </a>
                        </div> */}
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}
