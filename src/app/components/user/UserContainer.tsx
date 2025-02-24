"use client";
import { useCurrentUserState } from "@/app/hooks/jotai/useCurrentUserState";
import { useIsLoadingState } from "@/app/hooks/jotai/useIsLoadingState";
import { Text } from "@chakra-ui/react";
import Loading from "@/app/components/utility/Loading";
import { useEffect } from "react";
import useAuthChecker from "@/app/hooks/auth/useAuthChecker";

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
        </>
      ) : (
        <>{currentUser && <Text>{currentUser.email}</Text>}</>
      )}
    </>
  );
};
export default UserContainer;
