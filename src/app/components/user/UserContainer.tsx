"use client";
import { useCurrentUserState } from "@/app/hooks/jotai/useCurrentUser";
import { Text } from "@chakra-ui/react";
const UserContainer = () => {
  const { currentUser } = useCurrentUserState();

  return (
    <>
      <Text>UserContainer</Text>
      {currentUser && <Text>{currentUser.email}</Text>}
    </>
  );
};
export default UserContainer;
