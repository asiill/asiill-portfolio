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
        <div className="project-card flex flex-col gap-4 items-center text-center p-4 rounded-md shadow-[2px_4px_4px_rgba(0,0,0,0.38)] hover:shadow-[4px_8px_8px_rgba(0,0,0,0.38)] sm:flex-[0_0_calc(50%-24px)]">
            <div><img src={path} className="w-full h-auto"></img></div>
            <h2>{name}</h2>
            <div>{description}</div>
            <div className="italic">{tools}</div>
            <div className="flex flex-col gap-2 sm:flex-row">
                <a href={code} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-sm cursor-pointer">
                    <img src="/images/code.svg" className="w-4 h-4 bg-white"></img>
                    <span>Code</span>
                </a>
                <a href={live} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-sm cursor-pointer">
                    <img src="/images/live.svg" className="w-4 h-4 bg-white"></img>
                    <span>Live</span>
                </a>
            </div>
        </div>
    );
}