import Link from "next/link";
import Github from "./github";

export default function Header() {
    return (
        <header className="flex flex-col justify-center items-center gap-4 py-4 px-16 text-white sm:flex-row sm:justify-between sm:gap-0 ">
            <div>
                <Link href="/">
                    <div>
                        <span className="text-3xl italic">as.</span>
                    </div>
                </Link>
            </div>
            <nav className="flex flex-col justify-center items-center gap-4 sm:flex-row sm:gap-8">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/projects">Projects</Link>
                <Link href="/contact">Contact</Link>
            </nav>
            <div>
                <Github />
            </div>
        </header>
    );
}