"use client";   

import {Sheet, SheetContent, SheetTrigger, SheetClose} from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

const links = [
    {name: "home", path: "/"},
    {name: "services", path: "/services"},
    {name: "resume", path: "/resume"},
    {name: "work", path: "/work"},
    {name: "contact", path: "/contact"},
]

const MobileNav = () => {
    const pathname = usePathname();

    return(
       <Sheet> 
            <SheetTrigger className="
            flex justify-center items-center
            transition-opacity
            data-[state=open]:opacity-0           
            data-[state=open]:pointer-events-none 
            ">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col z-50">
                {/* Accessible label for screen readers */}
                <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
                {/* logo */}
                <div className="mt-10 mb-40 text-center text-2xl">                    
                </div>
                {/* nav links */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {links.map((link, index) => {
                        return (
                            <SheetClose asChild key={link.path}>
                                <Link 
                                    href={link.path} 
                                    key={index} 
                                    className={`${link.path === pathname && 
                                        "text-accent border-b-2 border-accent"
                                    } text-xl capitalize hover:text-accent transition-all`}
                                >
                                    {link.name}
                                </Link>
                            </SheetClose>
                        );
                    })}
                </nav>
            </SheetContent>
       </Sheet>
    );
}


export default MobileNav;