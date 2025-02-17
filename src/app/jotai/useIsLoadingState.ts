import { atom, useAtom } from "jotai";

export const useIsLoading = atom<boolean>(false);

export const useIsLoadingState = () => {
  const [state, setState] = useAtom(useIsLoading);

  return {
    setIsLoading: setState,
    isLoading: state,
  };
};
