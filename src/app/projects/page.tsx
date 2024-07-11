import ProjectCard from "../components/projectCard";
import projects from "../data/projects.js";

export default function Projects() {
  const getPath = (repo: string) => {
    let path = `/images/projects/${repo}.png`;
    return path;
  };

  return (
    <main className="flex flex-col gap-6">
      <h1>Some of my projects</h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {
          projects.map(item => {
            let id = projects.indexOf(item);
            let path = getPath(item.repo);
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
