import Image from "next/image";

function Tools() {
    const tools: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Git"];

    const getPath = (item: string) => {
        let str = item.toLowerCase().replace(".", "").replace(" ", "");
        let path = `/images/tools/${str}.svg`;
        return path;
    }

    return (
        <div className="flex flex-col gap-6">
            <h3>My toolkit</h3>
            <div className="flex flex-wrap justify-between gap-6">
            {
                tools.map(item => {
                    let path = getPath(item);
                    return (
                        <div className="flex flex-col justify-center items-center gap-2 flex-[1_0_calc(25%-24px)]">
                            <img src={path} className="w-12 h-12"></img>
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
                <h2>About me</h2>
                <div className="flex flex-col gap-4 sm:grid sm:grid-cols-2 sm:items-center sm:place-items-center">
                    <div className="col-span-1">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam interdum augue risus, quis ullamcorper nisi porta sit amet. Donec a dolor dui.
                            Integer interdum nisi vel dictum fringilla.
                            Mauris eu risus elementum, blandit mi vitae, placerat nisi. Ut felis ex, dapibus ut efficitur non, ultricies id mi.
                            Integer sed faucibus nisl. Nam eu fringilla tellus. Vestibulum dignissim odio id nunc porttitor aliquet.
                            Pellentesque eu velit sollicitudin, blandit mi feugiat, rutrum elit. Integer vitae malesuada est.
                            Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam quis mauris ex.
                            Curabitur posuere tempor lobortis. </p>
                        </div>
                    <div className="col-span-1 order-first sm:order-last">
                        <Image 
                            src=""
                            width={500}
                            height={500}
                            alt="profile picture"
                            style={{borderRadius:"0.5rem"}}
                        />
                    </div>
                </div>
            </div>
            <Tools />
        </div>
    );
}