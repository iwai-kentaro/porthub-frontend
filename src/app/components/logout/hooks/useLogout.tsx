import { useCallback } from "react";
import deleteAuth from "@/app/api/auth/deleteAuth";
import { useIsLoadingState } from "@/app/hooks/jotai/useIsLoadingState";
import { useRouter } from "next/navigation";
const useLogout = () => {
  const { isLoading, setIsLoading } = useIsLoadingState();
  const router = useRouter();
  const handleLogout = useCallback(async () => {
    try {
      setIsLoading(true);
      const res = await deleteAuth();
      console.log(res);
      router.push("/");
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, [setIsLoading, router]);
  return { handleLogout, isLoading };
};
export default useLogout;
