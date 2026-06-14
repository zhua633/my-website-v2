import Card from "../Helpers/card/index";
import { Projects as projectList } from "../../consts.ts";

function Projects() {
  return (
    <div className="relative flex w-full flex-col gap-10">
      <div className="flex gap-12">
        {projectList.slice(0, 2).map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
      <div className="flex gap-12">
        {projectList.slice(2).map((project) => (
          <Card key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}

export default Projects;
