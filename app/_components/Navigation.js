import React from "react";
import Link from "next/link";

function Navigation() {
    const links = [
        { href: "/", label: "Home" },
        { href: "/cabins", label: "Cabins" },
        { href: "/about", label: "About" },
        { href: "/account", label: "Guest Area" },
    ];

    return (
        <nav className="flex items-center gap-4  text-lg text-primary-50">
            {links.map((link) => (
                <Link
                    href={link.href}
                    className="rounded-md px-3 py-2 transition-colors hover:bg-primary-900/40 hover:text-accent-200"
                    key={link.href}
                >
                    {link.label}
                </Link>
            ))}
        </nav>
    );
}

export default Navigation;
