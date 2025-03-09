import ProjectType from "@/app/types/Project";
import { atom, useAtom } from "jotai";

export const projectDetailPageState = atom<Promise<ProjectType> | null>();

export const useProjectDetailPageState = () => {
  const [state, setState] = useAtom(projectDetailPageState);

  return {
    projectDetailState: state,
    setProjectDetailState: setState,
  };
};
