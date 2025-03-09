import getProjects from "@/app/api/project/getProjects";
import { useCallback, useEffect } from "react";
import { useProjectsState } from "@/app/hooks/jotai/useProjectsState";
const useListProjects = () => {
  const { projects, setProjects } = useProjectsState();

  const fetchProjects = useCallback(async () => {
    try {
      const res = await getProjects();

      setProjects(res);
    } catch (error) {
      console.error(error);
    }
  }, [setProjects]);

  useEffect(() => {
    fetchProjects();
  }, [fetchProjects]);

  const tags = projects.map((project) => project.tag);

  return {
    projects,
    tags,
  };
};

export default useListProjects;
