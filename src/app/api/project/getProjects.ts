import axiosClient from "@/app/lib/axiosClient";
import Project from "@/app/model/project";
import ProjectType from "@/app/types/Project";

const getProjects = async () => {
  const res = await axiosClient.get("/projects");
  const projectsJson: Project[] = res.data.projects.map(
    (project: ProjectType) => Project.buildFromJson(project)
  );
  return projectsJson;
};

export default getProjects;
