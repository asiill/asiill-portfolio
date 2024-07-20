type ToolCardProps = {
    tool: string;
    path: string;
}

export default function ToolCard({ tool, path }: ToolCardProps) {
    return (
        <div className="flex flex-col gap-2 justify-center items-center">
            <img src={path} className="w-12 h-12"></img>
            <span className="text-sm">{tool}</span>
        </div>
    )
}