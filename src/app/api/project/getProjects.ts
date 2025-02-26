import axiosClient from "@/app/lib/axiosClient";
import Project from "@/app/model/project";
import ProjectType from "@/app/types/Project";

const getProjects = async () => {
  const res = await axiosClient.get("/projects");

  console.log("res", res.data);

  // レスポンスが直接配列なので、res.data.map(...) とする
  const projectsJson: Project[] = res.data.map((project: ProjectType) =>
    Project.buildFromJson(project)
  );
  return projectsJson;
};

export default getProjects;
