import Link from "next/link";
import Github from "./github";

export default function Header() {
    return (
        <header className="flex flex-col gap-4 py-4 px-16 text-white sm:flex-row sm:justify-between sm:items-center sm:gap-0 ">
            <div>
                <Link href="/">
                    <div>
                        <span className="text-3xl italic hover:text-sage">as.</span>
                    </div>
                </Link>
            </div>
            <nav className="flex flex-col gap-4 text-sage sm:flex-row sm:gap-8">
                <div><Link href="/">Home</Link></div>
                <div><Link href="/projects">Portfolio</Link></div>
                <div><Link href="/contact">Contact</Link></div>
            </nav>
            <div>
                <Github />
            </div>
        </header>
    );
}