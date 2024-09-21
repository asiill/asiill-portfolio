import Image from "next/image";

function Tools() {
    const tools: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Git"];

    const getPath = (item: string) => {
        const str = item.toLowerCase().replace(".", "").replace(" ", "");
        const path = `/images/tools/${str}.svg`;
        return path;
    }

    return (
        <div className="flex flex-col gap-6">
            <h3>My toolkit</h3>
            <div className="flex flex-wrap justify-between gap-6">
            {
                tools.map(item => {
                    const id = tools.indexOf(item);
                    const path = getPath(item);
                    return (
                        <div key={id} className="flex flex-col justify-center items-center gap-2 flex-[1_0_calc(25%-24px)]">
                            <Image
                                src={path}
                                alt={item}
                                width={48}
                                height={48}
                            />
                            <span className="text-sm">{item}</span>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default function About() {
    return (
        <div className="flex flex-col gap-12 p-16 w-full bg-[#dddbbe]">
            <div id="about" className="flex flex-col gap-6">
                <h2>About me :</h2>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:place-items-center">
                    <div className="col-span-1">
                        <p>...</p>
                    </div>
                    <div className="col-span-1 order-first md:order-last">
                        <Image 
                            src="/images/profile.jpg"
                            width={500}
                            height={333}
                            alt="profile picture"
                            style={{borderRadius:"0.5rem", minWidth:"11rem"}}
                        />
                    </div>
                </div>
            </div>
            <Tools />
        </div>
    );
}