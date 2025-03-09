import ProjectType from "@/app/types/Project";
import { atom, useAtom } from "jotai";

export const projectState = atom<ProjectType | null>(null);

export const useProjectState = () => {
  const [state, setState] = useAtom(projectState);

  return {
    project: state,
    setProject: setState,
  };
};
