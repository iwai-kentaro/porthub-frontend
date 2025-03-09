import { atom, useAtom } from "jotai";
import Project from "@/app/model/project";

export const projectsState = atom<Project[]>([]);

export const useProjectsState = () => {
  const [state, setState] = useAtom(projectsState);

  const pushProjects = (projects: Project[]) => {
    setState((prev) => [...prev, ...projects]);
  };

  return {
    projects: state,
    setProjects: setState,
    pushProjects,
  };
};
