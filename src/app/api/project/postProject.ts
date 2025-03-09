import Project from "@/app/model/project";
import axiosClient from "@/app/lib/axiosClient";

const postProject = async (formData: FormData): Promise<Project> => {
  const res = await axiosClient.post("/projects", formData);
  const projectJson: Project = res.data.project ? res.data.project : res.data;

  return projectJson;
};

export default postProject;
