import projects from "../../data/projects";
import Image from "next/image";

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
      <div className="flex flex-col items-center gap-6 min-w-44 shadow-md hover:shadow-lg transition-shadow md:grid md:grid-cols-2">
          <div className={`${id % 2 === 0 ? "md:order-first" : "md:order-last"} span-1`}>
          <Image src={path} alt={name} className="min-w-44" width={640} height={360} />
          </div>
          <div className="flex flex-col gap-4 items-center text-center p-4 span-1">
              <h3 className="text-xl sm:text-3xl">{name}</h3>
              <div className="text-base sm:text-lg">{description}</div>
              <div className="italic text-sm sm:text-base">{tools}</div>
              <div className="project-links flex gap-2 text-sm sm:text-base">
                  <a href={code} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-lg bg-[#c8cc92] cursor-pointer transition hover:opacity-70">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                        <path d="M12.89,3L14.85,3.4L11.11,21L9.15,20.6L12.89,3M19.59,12L16,8.41V5.58L22.42,12L16,18.41V15.58L19.59,12M1.58,12L8,5.58V8.41L4.41,12L8,15.58V18.41L1.58,12Z" />
                      </svg>
                      <span className="text-black">Code</span>
                  </a>
                  <a href={live} target="_blank" className="flex gap-1 justify-center items-center p-2 rounded-lg bg-[#c8cc92] cursor-pointer transition hover:opacity-70">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                      <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                    </svg>
                      <span className="text-black">Live</span>
                  </a>
              </div>
          </div>
      </div>
  );
}

export default function Projects() {
  const getPath = (name: string) => {
    const str = name.toLowerCase().replaceAll(" ","").replaceAll("'","");
    const path = `/images/projects/${str}.png`;
    return path;
  };

  return (
    <div id="projects" className="flex flex-col gap-6 w-full p-8 sm:p-16">
      <h2 className="text-2xl sm:text-4xl">Some of my projects ↓</h2>
      <div className="flex flex-col gap-16">
        {
          projects.map(item => {
            const path = getPath(item.name);
            const links = [item.repo, item.live];
            return (
              <ProjectCard
                  key={item.id}
                  id={item.id}
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
