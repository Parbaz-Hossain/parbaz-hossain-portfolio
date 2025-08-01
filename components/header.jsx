import Link from "next/link";
import {Button} from "./ui/button";

// Importing the Nav component
import Nav from "./nav";
import MobileNav from "./mobilenav";

const Header = () => {
    return ( 
        <header className="py-8 xl:py-6 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                 <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Parbaz<span className="text-accent">.</span>
                    </h1>
                 </Link>
                {/* Desktop nav */}
                <div className="hidden xl:flex items-center gap-8">                    
                    <Nav />
                    <Link href="/contact">
                        <Button>
                            Hire Me
                        </Button>
                    </Link>
                </div>
                {/* Mobile nav */}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </header>
    );
}


// This is a simple header component for a Next.js application.
export default Header;