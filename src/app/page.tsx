import Link from "next/link";
import ToolCard from "./components/toolCard";

export default function Home() {
  const tools: string[] = ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Git"];

  const getPath = (item: string) => {
    let str = item.toLowerCase().replace(".", "").replace(" ", "");
    let path = `/images/tools/${str}.svg`;
    return path;
  }
  return (
    <main className="flex flex-col gap-8">
      <div className="flex flex-col gap-6 pb-10 sm:flex-row sm:justify-around sm:items-center">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
              <p className="text-sm">Heyy, I'm</p>
              <h1>Aseel Shakra</h1>
              <p>a front-end web developer</p>
          </div>
          <div className="home-links text-lg text-sage">
            <Link href="/projects">➵ See my projects</Link>
          </div>
        </div>
        <div className="order-first sm:order-last">--- need an image ---</div>
      </div>
      <div className="flex flex-col gap-4">
        <h2>About me</h2>
        <div>
          <p>#TODO</p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <h2>My toolkit</h2>
        <div className="flex flex-wrap justify-between gap-6">
          {
            tools.map(item => {
              let id = tools.indexOf(item);
              let path = getPath(item);
              return (
                <ToolCard 
                  key={id}
                  tool={item}
                  path={path}
                />
              )
            })
          }
          </div>
      </div>
    </main>
  );
}
