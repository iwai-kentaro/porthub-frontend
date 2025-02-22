"use client";
import { useCurrentUserState } from "@/app/hooks/jotai/useCurrentUser";
import { useIsLoadingState } from "@/app/hooks/jotai/useIsLoadingState";
import { Text } from "@chakra-ui/react";
import useAuthChecker from "@/app/hooks/auth/useAuthChecker";
import { useEffect } from "react";
import Loading from "@/app/components/utility/Loading";

const UserContainer = () => {
  const { currentUser } = useCurrentUserState();
  const { isLoading } = useIsLoadingState();
  const { authCheck } = useAuthChecker();

  useEffect(() => {
    authCheck();
  }, [authCheck]);

  return (
    <>
      {isLoading ? (
        <>
          <Loading />
          <Text>ローディング中</Text>
        </>
      ) : (
        <>{currentUser && <Text>{currentUser.email}</Text>}</>
      )}
    </>
  );
};
export default UserContainer;
