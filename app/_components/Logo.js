import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo({withTitle = true}) {
    return (
        <Link href="/" className="flex items-center gap-4">
            <Image src={logo} quality={100} height="60" width="60" alt="The Wild Oasis logo" />
            {withTitle && <span className="text-xl font-semibold text-primary-50">The Wild Oasis</span>}
        </Link>
    );
}

export default Logo;
