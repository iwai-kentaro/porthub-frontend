import axiosClient from "@/app/lib/axiosClient";
import Project from "@/app/types/Project";

const getProject = async (id: number | undefined) => {
  const res = await axiosClient.get(`/projects/${id}`);
  const projectJson: Project = res.data.project ? res.data.project : res.data;
  return projectJson;
};

export default getProject;
