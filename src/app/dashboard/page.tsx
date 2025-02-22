import LogoutContainer from "@/app/components/logout/LogoutContainer";
import UserContainer from "@/app/components/user/UserContainer";
import { Heading } from "@chakra-ui/react";

const page = () => {
  return (
    <>
      <Heading>Dashboard</Heading>
      <UserContainer />
      <LogoutContainer />
    </>
  );
};
export default page;
