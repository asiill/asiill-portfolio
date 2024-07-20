import ProjectCard from "../components/projectCard";
import projects from "../../data/projects";

export default function Projects() {
  const getPath = (name: string) => {
    let str = name.toLowerCase().replaceAll(" ","");
    let path = `/images/projects/${str}.png`;
    return path;
  };

  return (
    <main className="flex flex-col gap-6">
      <h1>Some of my projects ↓</h1>
      <div className="flex flex-col gap-6">
        {
          projects.map(item => {
            let id = projects.indexOf(item);
            let path = getPath(item.name);
            let links = [item.repo, item.live];
            return (
              <ProjectCard
                  key={id}
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
    </main>
  );
}
