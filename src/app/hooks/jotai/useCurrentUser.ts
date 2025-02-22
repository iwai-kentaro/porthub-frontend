import User from "@/app/types/User";
import { atom, useAtom } from "jotai";
import { useCallback } from "react";

type StateType = User | undefined;

export const currentUserState = atom<StateType>(undefined);

export const useCurrentUserState = () => {
  const [state, setState] = useAtom(currentUserState);

  const setCurrentUser = useCallback(
    (user: User | undefined) => {
      setState(user);
    },
    [setState]
  );

  const deleteCurrentUser = useCallback(() => {
    setState(undefined);
  }, [setState]);

  return {
    setCurrentUser,
    currentUser: state,
    deleteCurrentUser,
  };
};
