import { useCallback } from "react";
import { useCurrentUserState } from "../jotai/useCurrentUser";
import getMe from "@/app/api/auth/getMe";
import { useIsLoadingState } from "../jotai/useIsLoadingState";

const useAuthChecker = () => {
  const { setCurrentUser } = useCurrentUserState();
  const { setIsLoading } = useIsLoadingState();

  const authCheck = useCallback(async () => {
    const token = localStorage.getItem("JWT");
    if (!token) {
      setCurrentUser(undefined);
      return;
    }

    try {
      setIsLoading(true);
      const res = await getMe();

      setCurrentUser(res);
    } catch (error) {
      console.error(error);
      localStorage.removeItem("JWT");
      setCurrentUser(undefined);
    } finally {
      setIsLoading(false);
    }
  }, [setCurrentUser, setIsLoading]);

  return { authCheck };
};
export default useAuthChecker;
