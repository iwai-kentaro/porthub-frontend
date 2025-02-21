import { atom, useAtom } from "jotai";

export const useIsDisabled = atom<boolean>(false);

export const useIsDisabledState = () => {
  const [state, setState] = useAtom(useIsDisabled);

  return {
    setIsDisabled: setState,
    isDisabled: state,
  };
};
