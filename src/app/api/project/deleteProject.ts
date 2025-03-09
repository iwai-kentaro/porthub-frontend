import axiosClient from "@/app/lib/axiosClient";
import Project from "@/app/types/Project";

const deleteProject = async (id: number | undefined) => {
  const res = await axiosClient.delete(`/projects/${id}`);
  const projectJson: Project = res.data.project ? res.data.project : res.data;
  return projectJson;
};

export default deleteProject;
