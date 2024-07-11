import ToolCard from "../components/toolCard";

export default function About() {
  const tools: string[] = ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", "Git", "npm", "webpack", "Jest"];

  const getPath = (item: string) => {
    let str = item.toLowerCase().replace(".", "").replace(" ", "");
    let path = `/images/tools/${str}.svg`;
    return path;
  }

  return (
    <main className="flex flex-col gap-6">
      <h1>About me</h1>
      <div className="flex flex-col">
          <p>Hey! My name is Aseel, and I am a front-end web developer based in Montréal, Québec.</p>
          <p>..</p>
      </div>
      <div className="flex flex-col gap-4">
          <h2>My toolkit</h2>
          <div className="flex flex-wrap gap-4">
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
