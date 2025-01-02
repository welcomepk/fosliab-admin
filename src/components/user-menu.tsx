import { useAuth } from "@/context/authProvider"
import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "./ui/dropdown-menu"
import {
    CalendarIcon,
    LogOut
} from "lucide-react";
import { Button } from "./ui/button";
function UserMenu() {
    const { user, logout } = useAuth();
    return (
        <div className="">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    Hello, {user?.username}
                </DropdownMenuTrigger>
                <DropdownMenuContent className="mr-4 min-w-[250px]">
                    <DropdownMenuLabel className="flex items-center gap-2"> <CalendarIcon className="h-5 w-5" /> Current login: {new Date().getDay()}</DropdownMenuLabel>
                    <DropdownMenuLabel className="flex items-center gap-2"> <CalendarIcon className="h-5 w-5" /> Current login: {new Date().getDay()}</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <Button className="w-full" onClick={logout}><LogOut /> Logout</Button>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    )
}

export default UserMenu