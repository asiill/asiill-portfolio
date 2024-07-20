type ProjectCardProps = {
    name: string;
    description: string;
    tools: string;
    path: string;
    links: string[];
}

export default function ProjectCard({ name, description, tools, path, links }: ProjectCardProps) {
    const code = links[0];
    const live = links[1];
    return (
        <div className="flex flex-col items-center gap-8 p-4 rounded-md min-w-44 shadow-[2px_4px_4px_rgba(0,0,0,0.38)] hover:shadow-[4px_8px_8px_rgba(0,0,0,0.38)] sm:flex-row">
            <div><img src={path} className="w-full min-w-44"></img></div>
            <div className="flex flex-col gap-4">
                <h2>{name}</h2>
                <div>{description}</div>
                <div className="italic">{tools}</div>
                <div className="project-links flex flex-col gap-2 sm:flex-row">
                    <a href={code} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-lg border-2 border-roseTaupe cursor-pointer transition-all duration-300 ease-in-out hover:bg-roseTaupe">
                        <img src="/images/code.svg" className="w-4 h-4"></img>
                        <span className="text-black">Code</span>
                    </a>
                    <a href={live} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-lg border-2 border-roseTaupe cursor-pointer transition-all duration-300 ease-in-out hover:bg-roseTaupe">
                        <img src="/images/live.svg" className="w-4 h-4"></img>
                        <span className="text-black">Live</span>
                    </a>
                </div>
            </div>
        </div>
    );
}