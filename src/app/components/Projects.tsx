import projects from "../../data/projects";

type ProjectCardProps = {
  id: number;
  name: string;
  description: string;
  tools: string;
  path: string;
  links: string[];
}

function ProjectCard({ id, name, description, tools, path, links }: ProjectCardProps) {
  const code = links[0];
  const live = links[1];
  return (
      <div className="flex flex-col items-center gap-8 p-4 rounded-md min-w-44 shadow-[2px_4px_4px_rgba(0,0,0,0.38)] hover:shadow-[4px_8px_8px_rgba(0,0,0,0.38)] sm:flex-row">
          <div className={`${id % 2 === 0 ? "sm:order-first" : "sm:order-last"}`}><img src={path} className="w-full min-w-44 rounded-lg"></img></div>
          <div className="flex flex-col gap-4">
              <h3>{name}</h3>
              <div>{description}</div>
              <div className="italic">{tools}</div>
              <div className="project-links flex flex-col gap-2 sm:flex-row">
                  <a href={code} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-lg bg-[#c8cc92] cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80">
                      <img src="/images/code.svg" className="w-4 h-4"></img>
                      <span className="text-black">Code</span>
                  </a>
                  <a href={live} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-lg bg-[#c8cc92] cursor-pointer transition-all duration-300 ease-in-out hover:opacity-80">
                      <img src="/images/live.svg" className="w-4 h-4"></img>
                      <span className="text-black">Live</span>
                  </a>
              </div>
          </div>
      </div>
  );
}

export default function Projects() {
  const getPath = (name: string) => {
    let str = name.toLowerCase().replaceAll(" ","");
    let path = `/images/projects/${str}.png`;
    return path;
  };

  return (
    <div id="projects" className="flex flex-col gap-6 p-16 w-full">
      <h2>Some of my projects ↓</h2>
      <div className="flex flex-col gap-16">
        {
          projects.map(item => {
            let id = projects.indexOf(item);
            let path = getPath(item.name);
            let links = [item.repo, item.live];
            return (
              <ProjectCard
                  key={id}
                  id={id}
                  name={item.name}
                  description={item.description}
                  tools={item.tools}
                  path={path}
                  links={links}
              />
            )
          })
        }
      </div>
    </div>
  );
}
