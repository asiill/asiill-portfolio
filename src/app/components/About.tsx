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
            <h3 className="text-xl sm:text-3xl">My toolkit</h3>
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
        <div  id="about" className="flex flex-col gap-12 w-full bg-[#dddbbe] p-8 sm:p-16">
            <div className="flex flex-col gap-6">
                <h2 className="text-2xl sm:text-4xl">About me :</h2>
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-center md:place-items-center">
                    <div className="col-span-1 text-sm sm:text-base">
                        <p>
                            Lured by its union of code and creativity, I have been
                            exploring the possibilities of web development with the mission of
                            helping people express their visions through bits and bytes.
                            Thus far, I have been focused on navigating the front-end realm
                            by experimenting with React-based applications.
                        </p><br />
                        <p>
                            Lately however, I have also been leaning into the back-end of web development.
                            My current project, <a href="https://github.com/asiill/palette-des-amis"  target="_blank" className="text-[#272727] font-bold italic transition hover:opacity-70">Friends&#39; Palette</a>,
                             is a collaborative attempt at working with databases and authentication.
                            The theme of this application is inspired by an interest in connecting people through art.
                        </p><br />
                        <p>
                            Feel free to write to me if you have questions or are interested in working on a project together!
                        </p>
                    </div>
                    <div className="col-span-1 order-first md:order-last">
                        <Image 
                            src="/images/profile.jpg"
                            width={480}
                            height={320}
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