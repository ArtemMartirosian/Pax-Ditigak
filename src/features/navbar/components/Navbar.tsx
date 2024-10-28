import Link from "next/link";
import {Button} from "@/components/ui/button";

export const Navbar = () => {
    return <nav className="bg-blue-300">
        <Link href="/" className="text-red-500">PaxDigital</Link>
        <Button>Hello</Button>
    </nav>
}
