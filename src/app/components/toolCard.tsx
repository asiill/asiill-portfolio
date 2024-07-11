type ToolCardProps = {
    tool: string;
    path: string;
}

export default function ToolCard({ tool, path }: ToolCardProps) {
    return (
        <div className="flex flex-col gap-2 justify-center items-center sm:flex-[1_0_calc(25%-16px)]">
            <img src={path} className="w-10 h-10"></img>
            <span>{tool}</span>
        </div>
    )
}