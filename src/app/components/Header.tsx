import Github from "./Github";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header id="header" className="relative min-h-[300px] flex flex-col gap-16 text-white p-8 sm:p-16">
            <Image 
                src="/images/header.JPG"
                alt="close-up of a bee"
                fill
                style={{ objectFit: "cover" }}
                className="absolute top-0 left-0 z-0"
            />
            <div className="relative z-10 flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <Image
                        src="/images/as.png"
                        alt="as"
                        width="75"
                        height="75"
                    />
                </div>
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 sm:items-center">
                    <nav className="flex flex-col gap-6 text-black text-base sm:text-lg sm:flex-row sm:gap-8">
                        <div className="flex items-center justify-center rounded-md px-3 p-2 w-fit bg-[#c8cc92] transition hover:opacity-80"><Link href="/#about">About</Link></div>
                        <div className="flex items-center justify-center rounded-md px-3 p-2 w-fit bg-[#c8cc92] transition hover:opacity-80"><Link href="/#projects">Portfolio</Link></div>
                        <div className="flex items-center justify-center rounded-md px-3 p-2 w-fit bg-[#c8cc92] transition hover:opacity-80"><Link href="/#contact">Contact</Link></div>
                    </nav>
                    <div>
                        <Github 
                            fill="white"
                        />
                    </div>
                </div>
            </div>
            <div className="relative z-10 flex flex-col gap-4 sm:justify-center sm:items-center">
                <div className="flex flex-col gap-2 sm:justify-center sm:items-center">
                    <p className="text-base sm:text-lg">Heyy, I&#39;m</p>
                    <h1 className="gradient-text text-3xl sm:text-5xl">Aseel Shakra</h1>
                    <p className="text-lg sm:text-xl">a front-end web developer;</p>
                </div>
                <div className="underline-on-hover text-base text-lg">
                    <Link href="/#projects" className="relative p-1 w-fit block">➵ See my projects</Link>
                </div>
            </div>
        </header>
    );
}