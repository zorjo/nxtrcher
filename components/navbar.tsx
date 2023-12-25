import { UserButton } from "@clerk/nextjs";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
export default function Navbar(){
    return (
        <div className="flex items-center p-4">
            <Button className="md:hidden" variant="ghost" size="icon">
                <Menu/>
            </Button>
            <div className="w-full flex justify-end"><UserButton afterSignOutUrl="/"/></div>
            
        </div>
    )
}