"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {name: "home", path: "/"},
    {name: "services", path: "/services"},
    {name: "resume", path: "/resume"},
    {name: "work", path: "/work"},
    {name: "contact", path: "/contact"},
]

const Nav = () => {
    const pathname = usePathname();
    console.log("Current Pathname:", pathname);
    return (
        <nav className="flex gap-8">
            {links.map((link, index) => {
                return (
                    <Link 
                        href={link.path} 
                        key={index}
                        className={
                    `capitalize font-medium hover:text-accent transition-all ` +
                    (pathname === link.path ? "text-accent border-b-2 border-accent" : "")
                }>
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
}

// This is a simple navigation component for a Next.js application.
export default Nav;