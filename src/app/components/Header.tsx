import Github from "./Github";

export default function Header() {
    return (
        <header className="flex flex-col gap-16 p-16 text-white">
            <div className="flex flex-col gap-6 sm:flex-row sm:justify-between sm:items-center">
                <div>
                    <span className="text-4xl italic cursor-pointer transition hover:text-[#c8cc92]">as.</span>
                </div>
                <div className="flex flex-col gap-6 sm:flex-row sm:gap-8 sm:items-center">
                    <nav className="flex flex-col gap-6 text-black text-lg sm:flex-row sm:gap-8">
                        <div className="flex items-center justify-center rounded-lg p-2 w-fit bg-[#c8cc92] transition hover:opacity-80"><a href="#about">About</a></div>
                        <div className="flex items-center justify-center rounded-lg p-2 w-fit bg-[#c8cc92] transition hover:opacity-80"><a href="#projects">Portfolio</a></div>
                        <div className="flex items-center justify-center rounded-lg p-2 w-fit bg-[#c8cc92] transition hover:opacity-80"><a href="#contact">Contact</a></div>
                    </nav>
                    <div>
                        <Github 
                            fill="white"
                        />
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4 sm:justify-center sm:items-center">
                <div className="flex flex-col gap-2 sm:justify-center sm:items-center">
                    <p className="text-lg">Heyy, I&#39;m</p>
                    <h1>Aseel Shakra</h1>
                    <p className="text-xl">a front-end web developer;</p>
                </div>
                <div className="projects-link text-lg">
                <a href="#projects" className="relative p-1 w-fit block">➵ See my projects</a>
                </div>
            </div>
        </header>
    );
}